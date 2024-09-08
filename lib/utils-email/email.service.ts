import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import EmailHtml from "./email-html";
import { Options } from "nodemailer/lib/sendmail-transport";

export type EmailData = {
  name: string;
  email: string;
  message: string;
};

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "465",
  secure: true,
  auth: {
    user: process.env["EMAIL_ADDRESS"],
    pass: process.env["EMAIL_PASS"],
  },
} as nodemailer.TransportOptions);
