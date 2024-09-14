import nodemailer from "nodemailer";

export async function sendMail({
  to,
  name,
  subject,
  body,
}: {
  to: string;
  name: string;
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "elsebaey20100@gmail.com",
      pass: "uise bneq vewz zvop",
    },
  });
  try {
    const testResult = await transport.verify();
    // console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    // console.log(sendResult);
    return { message: "Mail Send successfully" };
  } catch (error) {
    console.log(error);
  }
}
