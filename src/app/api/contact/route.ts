import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const photo = formData.get("photo");

    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields before sending." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    let attachment:
      | {
          filename: string;
          content: Buffer;
          contentType?: string;
        }
      | undefined;

    if (photo && typeof photo !== "string") {
      const allowedMimeTypes = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/gif",
        "image/heic",
        "image/heif",
      ];
      const fileName = photo.name || "project-photo";
      const isAllowedExtension = /\.(jpg|jpeg|png|webp|gif|heic|heif)$/i.test(fileName);

      if (!allowedMimeTypes.includes(photo.type) && !isAllowedExtension) {
        return NextResponse.json(
          { error: "Please upload a valid image file in JPG, PNG, WEBP, GIF, HEIC, or HEIF format." },
          { status: 400 },
        );
      }

      if (photo.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { error: "Please upload a photo smaller than 10 MB." },
          { status: 400 },
        );
      }

      attachment = {
        filename: fileName,
        content: Buffer.from(await photo.arrayBuffer()),
        contentType: photo.type || "application/octet-stream",
      };
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          error:
            "Email delivery is not configured yet. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in the app environment.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const recipient = process.env.CONTACT_TO_EMAIL || "info@blueridge.construction";
    const fromAddress = process.env.CONTACT_FROM_EMAIL || smtpUser;
    const subject = `New project inquiry from ${name} — ${projectType}`;
    const plainText = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Project Type: ${projectType}`,
      `Project Photo: ${attachment ? attachment.filename : "Not provided"}`,
      "",
      "Project Details:",
      message,
    ].join("\n");

    const html = `
      <h2>New project inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
      <p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>
      <p><strong>Project Photo:</strong> ${attachment ? escapeHtml(attachment.filename) : "Not provided"}</p>
      <p><strong>Project Details:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `;

    await transporter.sendMail({
      from: `Blue Ridge Construction <${fromAddress}>`,
      to: recipient,
      replyTo: email,
      subject,
      text: plainText,
      html,
      attachments: attachment ? [attachment] : undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your message. Please try again." },
      { status: 500 },
    );
  }
}
