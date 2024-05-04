import { NextResponse } from "next/server";
import prismadb from "../../libs/prismadb";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new NextResponse("Email not provided in Availability Api", {
        status: 400,
      });
    }

    const userData = await prismadb.availability.findMany({
      where: {
        email: {
          equals: email,
        },
      },
    });

    if (!userData) {
      return new NextResponse("User data in Avialability Api not found", {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(userData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error:", err);
    return new NextResponse("Internal Server Error in Availability Api", {
      status: 500,
    });
  }
}
