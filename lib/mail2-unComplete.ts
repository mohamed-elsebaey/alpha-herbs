import nodemailer from "nodemailer";
import Mail, { Address } from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
//   secure: process.env.NODE_ENV !== "development", //true
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
} as SMTPTransport.Options);

type SendEmailType = {
  sender: Address;
  receipients: Address[];
  subject: string;
  message: string;
};

export const sendEmail = async (data: SendEmailType) => {
  const { sender, receipients, subject, message } = data;

  return await transport.sendMail({
    from: sender,
    to: receipients,
    subject: subject,
    html: message,
    text: message,
  });
};
