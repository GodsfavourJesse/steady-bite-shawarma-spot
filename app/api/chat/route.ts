import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // 1️⃣ Check for "tracking" keywords to simulate functionality
    const lowerMsg = message.toLowerCase();
    if (
      lowerMsg.includes("track") ||
      lowerMsg.includes("order") && lowerMsg.includes("status")
    ) {
      return NextResponse.json({
        reply:
          "Sure thing! 🔍 Please log in to your Steady Bite account and head to *My Orders* to track your delivery in real-time. You’ll also get WhatsApp updates when your shawarma is on the way! 🚴💨",
      });
    }

    // 2️⃣ Otherwise, forward to OpenAI for a friendly conversational response
    const prompt = `
You are **SteadyBot**, the friendly virtual assistant for *Steady Bite Shawarma Spot* — a vibrant,
urban shawarma brand whose slogan is *"Where shawarma dreams come true."*

### Tone
- Speak like a cheerful street-smart friend.
- Use short sentences, emojis, and enthusiasm (🔥🌯😋).
- Always be polite, but fun.
- Never sound robotic.

### Brand Context
- Steady Bite serves shawarma, toasted bread, and both chicken and beef shawarmas.
- Sizes: Normal size, Medium size and Jumbo size.
- Prices: 1,500 naira (for toasted bread), 2,500 naira, 3,500 naira, 4,500.
- We deliver across the Port Harcourt city via dispatch riders.
- Opening hours: 6:30 PM – 10:30 PM daily.
- Delivery fee varies by location.
- Users can track orders once they log in.

### Instructions
- If the user greets, reply warmly.
- If they ask about *menu*, *delivery*, *pricing*, *tracking*, *refunds*, or *order history*, respond with clear, helpful info.
- If question is unrelated to food or Steady Bite, politely redirect the user.

User: ${message}
`;


    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // lightweight & affordable
      messages: [{ role: "user", content: prompt }],
      max_tokens: 200,
      temperature: 0.8,
    });

    const reply = completion.choices[0].message?.content?.trim() || "Sorry 😅 I didn’t quite get that. Could you say it another way?";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat API Error:", err);
    return NextResponse.json(
      { reply: "Oops! Something went wrong 😔 Try again shortly." },
      { status: 500 }
    );
  }
}
