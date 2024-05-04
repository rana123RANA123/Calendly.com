import { IncomingMessage } from "http";
import { NextResponse } from "next/server";
import prismadb from "../../libs/prismadb";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new NextResponse("Email not provided", { status: 400 });
    }

    const userData = await prismadb.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    });

    if (!userData) {
      return new NextResponse("User data not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(userData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
