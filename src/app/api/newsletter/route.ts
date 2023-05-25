import { NextResponse } from "next/server";

// cron job to send out emails every monday morning.
// post route to add new email address to mailing list.
export async function GET() {
  return NextResponse.json({ status: 200, message: "hello" });
}
