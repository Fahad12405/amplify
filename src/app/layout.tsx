import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Octolade Amplify | Automate Your Social Media With AI Agents",
  description:
    "Let AI agents handle your LinkedIn, Instagram, Twitter content strategy. Chat, generate, approve, and post - all in one platform. Book a free strategy call today.",
  keywords: "AI social media automation, AI content agent, LinkedIn automation, Instagram AI posting, social media AI",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Octolade Amplify | Automate Your Social Media With AI Agents",
    description: "Chat with your AI agent, generate content, approve it, and watch it post automatically.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
