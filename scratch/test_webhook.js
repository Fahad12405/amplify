
async function testWebhook() {
  const url = "https://n8n.octolade.com/webhook/806354d1-290e-441b-8b31-939d55c3bc05";
  const body = { 
    "user-input": "Create a LinkedIn post about AI scheduling",
    "chatInput": "Create a LinkedIn post about AI scheduling"
  };

  try {
    console.log("Sending request to n8n...");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("Status:", response.status);
    const contentType = response.headers.get("content-type");
    console.log("Content-Type:", contentType);

    const text = await response.text();
    console.log("Response Body:", text);

    if (contentType && contentType.includes("application/json")) {
      const json = JSON.parse(text);
      console.log("Parsed JSON:", json);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

testWebhook();
