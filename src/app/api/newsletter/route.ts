import { getAllEmails, getLatestRecipes, newEmail } from "@/app/lib/kysely";
import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function GET() {
  const emails = await getAllEmails();
  const recipes = await getLatestRecipes();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mac@3sidedcube.com",
      pass: process.env.GMAIL_PASS,
    },
  });

  let emailAddresses: string[] = [];
  emails.forEach((email) => {
    emailAddresses.push(email.email);
  });
  const baseUrl = "https://recipes-sand.vercel.app/";

  const mailOptions = {
    from: "mac@3sidedcube.com",
    to: emailAddresses,
    subject: "Super Simple Recipes | Newsletter",
    html: `
        <style>
          .button{margin-top: 2rem;text-decoration:none;padding-top:.625rem;padding-bottom:.625rem;padding-left:.875rem;padding-right:.875rem;background-color:#4f46e5;color:#fff;font-size:.875rem;line-height:1.25rem;font-weight:600;border-radius:.375rem;box-shadow:0 1px 2px 0 rgba(0,0,0,.05);cursor:pointer}
        </style>
        <p>Hello, Food Lover<p>
        <br/>
        <h1>Welcome to the SSR Newsletter</h1>
        <p>Here you can see our most recent recipes!</p>
        <p>Then you can hop on over to our site and try out these scrumptuous recipes + any others you may have missed!</p>
        <h2>Recipes</h2>
        <ul>
          ${recipes.map(
            ({ id, title }: any) =>
              `<a href='${baseUrl}/recipes/${id}'><li>${title}</li></a>`
          )}
        </ul>
        <p>Thanks for reading, don't forget to check out our home page to see all the latest recipes!</p>
        <a class="button" href="${baseUrl}">Home Page</a>
    `,
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
