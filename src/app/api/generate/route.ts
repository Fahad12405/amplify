import { NextResponse } from "next/server";

export const maxDuration = 60; 
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const startTime = Date.now();
  try {
    const body = await request.json().catch(e => {
      console.error("Error parsing request JSON:", e);
      return null;
    });
    
    if (!body) {
      return NextResponse.json({ error: "Invalid or empty request body" }, { status: 400 });
    }

    console.log("Generate API Request Body:", body);
    console.log("Starting fetch to n8n...");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 55000); // 55s client-side guard

    const response = await fetch("https://n8n.octolade.com/webhook/806354d1-290e-441b-8b31-939d55c3bc05", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("n8n error:", response.status, errorText);
      return NextResponse.json({ error: "Failed to generate content", details: errorText }, { status: response.status });
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      console.log("n8n success response (JSON):", data);
      return NextResponse.json(data);
    } else {
      const textData = await response.text();
      console.log("n8n success response (Text):", textData);
      // If it's not JSON, we might want to try parsing it anyway or return it as is
      try {
        const parsedData = JSON.parse(textData);
        return NextResponse.json(parsedData);
      } catch (e) {
        return NextResponse.json({ error: "Invalid JSON response from n8n", details: textData }, { status: 500 });
      }
    }
  } catch (error: any) {
    const duration = Date.now() - startTime;
    console.error(`Internal Server Error after ${duration}ms:`, error);
    
    let errorType = "Internal Server Error";
    if (error.name === 'AbortError') {
      errorType = "Request Timeout (Function took too long)";
    }

    return NextResponse.json({ 
      error: errorType, 
      details: error.message,
      duration: `${duration}ms`,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
}
