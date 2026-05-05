import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch("https://n8n.octolade.com/webhook/1eea6cf2-7101-4c22-b724-91557a053c32", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("n8n error:", errorText);
      return NextResponse.json({ error: "Failed to submit to n8n" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("API proxy error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
