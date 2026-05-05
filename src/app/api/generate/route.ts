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
        "User-Agent": "OctoladeAmplify/1.0 (Next.js Edge Runtime)"
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const rawText = await response.text();
    const duration = Date.now() - startTime;

    if (!response.ok) {
      console.error(`n8n error (${response.status}) after ${duration}ms:`, rawText);
      return NextResponse.json({ 
        error: "n8n returned an error", 
        status: response.status,
        details: rawText 
      }, { status: response.status });
    }

    if (!rawText || rawText.trim() === "") {
      console.error(`n8n returned empty response after ${duration}ms`);
      return NextResponse.json({ 
        error: "n8n returned an empty response",
        details: "The webhook was triggered but did not return any data. Check n8n workflow completion."
      }, { status: 502 });
    }

    try {
      const data = JSON.parse(rawText);
      console.log(`n8n success after ${duration}ms:`, data);
      return NextResponse.json(data);
    } catch (e) {
      console.error(`Failed to parse n8n response as JSON after ${duration}ms:`, rawText);
      return NextResponse.json({ 
        error: "Invalid JSON response from n8n", 
        details: rawText 
      }, { status: 500 });
    }
  } catch (error: any) {
    const duration = Date.now() - startTime;
    console.error(`Internal Server Error after ${duration}ms:`, error);
    
    let errorType = "Internal Server Error";
    if (error.name === 'AbortError') {
      errorType = "Request Timeout (n8n took too long)";
    }

    return NextResponse.json({ 
      error: errorType, 
      details: error.message,
      duration: `${duration}ms`,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
}
