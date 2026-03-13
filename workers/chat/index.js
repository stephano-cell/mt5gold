const TELEGRAM_BOT_TOKEN = "8493663897:AAFEqDIqXMRq225kiBlskxCN-exk_g_ep0c";
const TELEGRAM_CHAT_ID = "695128492";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: CORS_HEADERS });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ ok: false, error: "Invalid JSON" }), {
        status: 400, headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
      });
    }

    const { name, email, telegram, message } = body;

    if (!name || !name.trim() || !email || !email.trim() || !message || message.trim().length < 2) {
      return new Response(JSON.stringify({ ok: false, error: "Name, email and message are required" }), {
        status: 400, headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
      });
    }

    const lines = [
      `💬 *New message from mt5gold.com*`,
      ``,
      `👤 *Name:* ${name.trim()}`,
      `📧 *Email:* ${email.trim()}`,
      telegram && telegram.trim() ? `✈️ *Telegram:* ${telegram.trim()}` : null,
      ``,
      `💬 *Message:*`,
      message.trim(),
    ].filter(l => l !== null);

    const text = lines.join("\n");

    const tgRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    const tgData = await tgRes.json();

    if (!tgData.ok) {
      return new Response(JSON.stringify({ ok: false, error: "Failed to send" }), {
        status: 500, headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
    });
  }
};
