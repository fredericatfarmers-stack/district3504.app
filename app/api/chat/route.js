import { paths, careerPageUrl } from "../../../data/paths";

// This route calls the Anthropic API directly. Set ANTHROPIC_API_KEY as an
// environment variable in your Vercel project settings before deploying.

const SYSTEM_PROMPT = `You are the District 3504 Q&A assistant for Farmers Insurance recruiting (Dallas-Fort Worth).

Your only job is to help visitors understand the career paths below and point them to the right Workable application. You must:
- Only state facts, figures, bonus amounts, or requirements that appear in the PROGRAM FACTS below. Never invent numbers.
- Never share any email address, phone number, or personal calendar link. Every next step is a Workable link.
- Keep answers short, warm, and conversational — this is meant to open a conversation, not close a sale.
- When a visitor seems to identify with a specific path, name it and give them its Workable link.
- If asked something outside these programs (legal, tax, or compensation guarantees), say a real conversation with the District 3504 team is the right next step, and give the general career page link.

PROGRAM FACTS:
${paths
  .map(
    (p) =>
      `- ${p.title}: ${p.description} Tags: ${p.tags.join(", ")}. Apply: ${p.workableUrl}`
  )
  .join("\n")}
- General career page (all openings): ${careerPageUrl}`;

export async function POST(req) {
  const { messages } = await req.json();

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json(
      {
        error:
          "ANTHROPIC_API_KEY is not set. Add it in your Vercel project's Environment Variables.",
      },
      { status: 500 }
    );
  }

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    return Response.json({ error: text }, { status: 500 });
  }

  const data = await response.json();
  const reply = data.content?.find((c) => c.type === "text")?.text ?? "";
  return Response.json({ reply });
}
