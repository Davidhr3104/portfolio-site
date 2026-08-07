import { Resend } from "resend";

const TO_EMAIL = "andreshr4578@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message, company } = body as {
    name?: string;
    email?: string;
    message?: string;
    company?: string; // honeypot -- real visitors never see or fill this field
  };

  if (company) {
    // Silently succeed so bots don't learn the honeypot was tripped.
    return Response.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Invalid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json(
      { error: "Email service isn't configured yet." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New message from ${name} via portfolio site`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend send failed:", error);
      return Response.json({ error: "Failed to send message." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return Response.json({ error: "Failed to send message." }, { status: 500 });
  }
}
