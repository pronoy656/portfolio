import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const TARGET_EMAIL = process.env.CONTACT_TO_EMAIL || "pronoypaul56@gmail.com";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailHtml(name: string, email: string, message: string): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeInitial = escapeHtml(name.trim().charAt(0).toUpperCase() || "P");
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");
  const replySubject = encodeURIComponent(`Re: Message from ${name}`);
  const receivedAt = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Dhaka",
  }).format(new Date());

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        @media only screen and (max-width: 560px) {
          .email-bg { background-color: #07080f !important; }
          .email-outer { padding: 12px 8px !important; }
          .email-card { background-color: #0f1220 !important; border: 1px solid #1e243d !important; border-top: 1px solid #1e243d !important; }
          .email-header { background-color: #4f46e5 !important; background-image: linear-gradient(135deg, #312e81 0%, #4f46e5 55%, #6366f1 100%) !important; border-bottom: none !important; padding: 22px 18px 18px !important; }
          .email-badge { background-color: rgba(255,255,255,0.16) !important; border-color: rgba(255,255,255,0.22) !important; color: #ffffff !important; }
          .email-title { color: #ffffff !important; font-size: 20px !important; }
          .email-date { color: rgba(255,255,255,0.82) !important; }
          .email-pad { background-color: #0f1220 !important; padding: 20px 16px !important; }
          .email-box { background-color: #15192b !important; border-color: #242b47 !important; }
          .email-msg-box { background-color: #15192b !important; border-color: #242b47 !important; border-left: 4px solid #6366f1 !important; }
          .email-sender-name { color: #ffffff !important; }
          .email-link { color: #818cf8 !important; }
          .email-label { color: #818cf8 !important; }
          .email-body-text { color: #f4f4f5 !important; }
          .email-cta { background-color: #6366f1 !important; background-image: linear-gradient(135deg, #4f46e5, #6366f1) !important; color: #ffffff !important; }
          .email-footer { background-color: #0b0d17 !important; border-top-color: #1c2138 !important; padding: 14px 16px !important; }
        }
      </style>
    </head>
    <body class="email-bg" style="margin:0;padding:0;background-color:#f5f6f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#111827;-webkit-text-size-adjust:100%;">
      <table class="email-bg" role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="background-color:#f5f6f8;">
        <tr>
          <td class="email-outer" align="center" style="padding:28px 12px;">
            <table class="email-card" role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="max-width:580px;width:100%;background-color:#ffffff;border:1px solid #e5e7eb;border-top:4px solid #4f46e5;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(17,24,39,0.05);">
              <!-- Header (Clean white on desktop, Indigo gradient on mobile) -->
              <tr>
                <td class="email-header" style="background-color:#ffffff;padding:28px 28px 20px;border-bottom:1px solid #f1f5f9;">
                  <span class="email-badge" style="display:inline-block;padding:4px 10px;border-radius:999px;background-color:#eef2ff;border:1px solid #e0e7ff;font-size:10px;font-weight:700;letter-spacing:1.3px;text-transform:uppercase;color:#4f46e5;white-space:nowrap;">
                    Portfolio Message
                  </span>
                  <h1 class="email-title" style="margin:12px 0 0;font-size:22px;line-height:1.3;font-weight:800;color:#111827;letter-spacing:-0.3px;">
                    New message from ${safeName}
                  </h1>
                  <p class="email-date" style="margin:5px 0 0;font-size:12px;line-height:1.5;color:#6b7280;">
                    Received ${escapeHtml(receivedAt)} (BDT)
                  </p>
                </td>
              </tr>

              <!-- Body Content -->
              <tr>
                <td class="email-pad" style="padding:22px 28px 26px;background-color:#ffffff;">
                  <!-- Sender Card -->
                  <table class="email-box" role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;margin-bottom:16px;">
                    <tr>
                      <td style="padding:14px 16px;">
                        <table role="presentation" width="100%" cellPadding="0" cellSpacing="0">
                          <tr>
                            <td width="42" valign="middle" style="width:42px;">
                              <div style="width:38px;height:38px;border-radius:999px;background-color:#4f46e5;color:#ffffff;font-size:15px;font-weight:700;line-height:38px;text-align:center;">
                                ${safeInitial}
                              </div>
                            </td>
                            <td valign="middle" style="padding-left:12px;">
                              <p class="email-sender-name" style="margin:0;font-size:15px;font-weight:700;color:#111827;line-height:1.3;word-break:break-word;">
                                ${safeName}
                              </p>
                              <p style="margin:2px 0 0;font-size:13px;line-height:1.4;word-break:break-all;">
                                <a class="email-link" href="mailto:${safeEmail}" style="color:#4f46e5;text-decoration:none;font-weight:600;">${safeEmail}</a>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Message Card -->
                  <table class="email-msg-box" role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="background-color:#ffffff;border:1px solid #e5e7eb;border-left:3px solid #4f46e5;border-radius:12px;margin-bottom:22px;">
                    <tr>
                      <td style="padding:18px;">
                        <p class="email-label" style="margin:0 0 8px;font-size:10px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#6b7280;">
                          Message
                        </p>
                        <p class="email-body-text" style="margin:0;font-size:14.5px;line-height:1.7;color:#1f2937;word-break:break-word;">
                          ${safeMessage}
                        </p>
                      </td>
                    </tr>
                  </table>

                  <!-- Single Clean CTA -->
                  <table role="presentation" width="100%" cellPadding="0" cellSpacing="0">
                    <tr>
                      <td align="left">
                        <a class="email-cta" href="mailto:${safeEmail}?subject=${replySubject}" style="display:inline-block;padding:11px 22px;border-radius:999px;background-color:#111827;color:#ffffff;font-size:13px;font-weight:600;text-decoration:none;white-space:nowrap;">
                          Reply to ${safeName} &rarr;
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td class="email-footer" style="padding:14px 28px;background-color:#f9fafb;border-top:1px solid #f1f5f9;text-align:center;">
                  <p style="margin:0;font-size:11px;line-height:1.5;color:#9ca3af;">
                    Sent from your portfolio contact form &middot; Direct Reply-To enabled
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { ok: false, error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (name.length < 2 || name.length > 120) {
      return NextResponse.json(
        { ok: false, error: "Please enter your name (2–120 characters)." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email) || email.length > 200) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (message.length < 5 || message.length > 5000) {
      return NextResponse.json(
        { ok: false, error: "Please tell me a bit more about your project (5+ characters)." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER || TARGET_EMAIL;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
    const resendApiKey = process.env.RESEND_API_KEY;

    const subject = `Portfolio Inquiry from ${name}`;
    const html = buildEmailHtml(name, email, message);
    const text = `New Portfolio Contact Inquiry\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    if (gmailAppPassword) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailAppPassword,
        },
      });

      await transporter.sendMail({
        from: `"${name.replace(/"/g, "")} (Portfolio)" <${gmailUser}>`,
        to: TARGET_EMAIL,
        replyTo: email,
        subject,
        text,
        html,
      });

      return NextResponse.json({ ok: true });
    }

    if (resendApiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
          to: [TARGET_EMAIL],
          reply_to: email,
          subject,
          text,
          html,
        }),
      });

      if (!resendRes.ok) {
        return NextResponse.json(
          { ok: false, error: "Failed to deliver email via mail provider." },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      {
        ok: false,
        code: "MAIL_NOT_CONFIGURED",
        error: "Email service is not configured on the server yet.",
      },
      { status: 503 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong while sending your message. Please try again." },
      { status: 500 }
    );
  }
}

