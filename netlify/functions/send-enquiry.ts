import { Resend } from "resend";

const TO_EMAIL = "meridianclgeducation@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "Meridian College <enquiry@meridiancollege.in>";
const RESEND_API_KEY = process.env.RESEND_API_KEY;

const resend = new Resend(RESEND_API_KEY);

const htmlEscapes: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => htmlEscapes[char]);
}

function json(statusCode: number, body: Record<string, unknown>) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

function safeSubjectValue(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function emailHtml({ name, phone, course, message }: { name: string; phone: string; course: string; message: string }) {
  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeCourse = escapeHtml(course);
  const phoneHref = phone.replace(/[^\d+]/g, "");
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: system-ui, sans-serif; color: #1e293b; }
    .container { max-width: 520px; margin: 0 auto; padding: 24px; }
    .badge { display: inline-block; background: #4f46e5; color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; padding: 4px 10px; border-radius: 4px; }
    h2 { font-size: 20px; margin: 16px 0 8px; }
    table { width: 100%; border-collapse: collapse; margin-top: 16px; }
    td { padding: 10px 12px; border-bottom: 1px solid #e2e8f0; vertical-align: top; }
    td:first-child { font-weight: 600; color: #64748b; white-space: nowrap; width: 90px; }
    .message-box { background: #f8fafc; border-left: 3px solid #4f46e5; padding: 14px 16px; margin-top: 16px; border-radius: 6px; line-height: 1.6; }
    .footer { margin-top: 24px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <span class="badge">New Enquiry</span>
    <h2>${safeName} is interested in ${safeCourse}</h2>
    <table>
      <tr><td>Name</td><td>${safeName}</td></tr>
      <tr><td>Phone</td><td><a href="tel:${phoneHref}">${safePhone}</a></td></tr>
      <tr><td>Course</td><td>${safeCourse}</td></tr>
    </table>
    ${safeMessage ? `<div class="message-box">${safeMessage}</div>` : ""}
    <div class="footer">
      Sent from the Meridian College admissions enquiry form &mdash; ${new Date().toLocaleDateString("en-IN", { dateStyle: "long" })}
    </div>
  </div>
</body>
</html>`;
}

export const handler = async (event: { httpMethod: string; body: string | null }) => {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method Not Allowed" });
  }

  if (!RESEND_API_KEY) {
    return json(500, { error: "Email service is not configured." });
  }

  let body: unknown;
  try {
    body = JSON.parse(event.body ?? "{}");
  } catch {
    return json(400, { error: "Request body is not valid JSON." });
  }

  const payload = body && typeof body === "object" ? (body as Record<string, unknown>) : {};
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
  const course = typeof payload.course === "string" ? payload.course.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || !phone || !course) {
    return json(400, { error: "Name, phone, and course are required." });
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `New Enquiry: ${safeSubjectValue(course)} - ${safeSubjectValue(name)}`,
      html: emailHtml({ name, phone, course, message }),
      replyTo: TO_EMAIL,
    });

    if (error) {
      console.error("Resend error:", error);
      return json(500, { error: "Failed to send email. Please try again." });
    }
  } catch (error) {
    console.error("Resend error:", error);
    return json(500, { error: "Failed to send email. Please try again." });
  }

  return json(200, { success: true });
};
