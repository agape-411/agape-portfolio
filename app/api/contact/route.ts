import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      subject,
      message,
    } = body;

    const { data, error } =
      await resend.emails.send({
        from:
          "Portfolio Contact <onboarding@resend.dev>",

        to: ["korrokagape@gmail.com"],

        subject: subject
          ? subject
          : `Portfolio Inquiry from ${name}`,

        replyTo: email,

        html: `
          <h2>New Portfolio Message</h2>

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Subject:</strong>
            ${subject}
          </p>

          <hr />

          <p>${message}</p>
        `,
      });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: "Email failed",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      {
        status: 500,
      }
    );
  }
}