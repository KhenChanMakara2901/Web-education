import nodemailer from "nodemailer";
// /pages/api/send-email.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Add your email sending logic here, like with Nodemailer or another service

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
export async function GET() {
  return NextResponse.json(
    { success: false, message: "GET method not allowed" },
    { status: 405 }
  );
}
