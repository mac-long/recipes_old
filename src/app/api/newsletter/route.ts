import { getAllEmails, newEmail } from "@/app/lib/kysely";
import { NextResponse } from "next/server";

export async function GET() {
  const emails = await getAllEmails();
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
