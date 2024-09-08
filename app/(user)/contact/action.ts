"use server";

import { render } from "@react-email/components";
import { EmailData, transporter } from "../../../lib/utils-email/email.service";
import EmailHtml from "../../../lib/utils-email/email-html";

export async function sendEmailNotification(data: EmailData) {
  const emailHtml = await render(EmailHtml(data));
  await transporter.sendMail({
    to: "mike.gurin21@gmail.com",
    subject: "Portfolio Contact",
    html: emailHtml,
  });
}
