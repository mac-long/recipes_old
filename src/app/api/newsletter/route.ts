import { getAllEmails, newEmail } from "@/app/lib/kysely";
import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function GET() {
  const emails = await getAllEmails();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mac@3sidedcube.com",
      pass: process.env.GMAIL_PASS
    }
  });

  let emailAddresses: any[] = [];
  emails.forEach((email) => {
    emailAddresses.push(email.email);
  });

  const mailOptions = {
    from: "mac@3sidedcube.com",
    to: emailAddresses
  };

  try {
    transporter.sendMail(mailOptions, (error: any, info: any) => {
      {
        error
          ? console.log(error)
          : console.log("Email sent: " + info.response);
      }
    });
  } catch (error: any) {
    return NextResponse.json({ status: 500, error });
  }

  return NextResponse.json({ status: 200, emails });
}

export async function POST(request: Request) {
  request = await request.json();

  try {
    await newEmail(request);
  } catch (error: any) {
    if (error.code === "23505")
      return NextResponse.json({ status: 500, message: "Already subscribed" });
    else return NextResponse.json({ status: 500, message: "Oops! Try again" });
  }

  return NextResponse.json({ status: 200, message: "Success" });
}
