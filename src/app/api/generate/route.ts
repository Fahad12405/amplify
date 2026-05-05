import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Generate API Request Body:", body);

    const response = await fetch("https://n8n.octolade.com/webhook/806354d1-290e-441b-8b31-939d55c3bc05", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(body),
    });

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
    console.error("Internal Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
  }
}
