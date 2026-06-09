import { Resend } from "resend";

const TO_EMAIL = "meridianclgeducation@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "Meridian College <enquiry@meridiancollegeofeducation.in>";

const resend = new Resend(process.env.RESEND_API_KEY);

function emailHtml({
  name,
  phone,
  course,
  message,
}: {
  name: string;
  phone: string;
  course: string;
  message: string;
}) {
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
    <h2>${name} is interested in ${course}</h2>
    <table>
      <tr><td>Name</td><td>${name}</td></tr>
      <tr><td>Phone</td><td><a href="tel:${phone}">${phone}</a></td></tr>
      <tr><td>Course</td><td>${course}</td></tr>
    </table>
    ${message ? `<div class="message-box">${message}</div>` : ""}
    <div class="footer">
      Sent from the Meridian College admissions enquiry form &mdash; ${new Date().toLocaleDateString("en-IN", { dateStyle: "long" })}
    </div>
  </div>
</body>
</html>`;
}

exports.handler = async (event: {
  httpMethod: string;
  body: string | null;
  headers: Record<string, string>;
}) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }

  let body: { name?: string; phone?: string; course?: string; message?: string };
  try {
    body = JSON.parse(event.body ?? "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Request body is not valid JSON." }) };
  }

  const { name, phone, course, message } = body;

  if (!name || !phone || !course) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Name, phone, and course are required." }),
    };
  }

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    subject: `New Enquiry: ${course} \u2014 ${name}`,
    html: emailHtml({ name, phone, course, message: message ?? "" }),
    replyTo: TO_EMAIL,
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email. Please try again." }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
};
