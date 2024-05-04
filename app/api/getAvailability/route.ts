import { NextResponse } from "next/server";
import prismadb from "../../libs/prismadb";
import { IncomingMessage } from "http";
import { getServerSession } from "next-auth";

export async function GET(req: IncomingMessage) {
  try {
    const session = (await getServerSession(req as any)) as MySession;
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const userEmail = session.user?.email;

    if (!userEmail) {
      return new NextResponse("User email not found", { status: 400 });
    }

    const userData = await prismadb.availability.findMany({
      where: {
        email: {
          equals: userEmail,
        },
      },
    });

    if (!userData) {
      return new NextResponse("availability data not found", { status: 404 });
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

import { NextRequest } from "next/server";
import { AvailabilityData, MySession } from "@/app/constants/types";

export async function PUT(req: NextRequest) {
  try {
    const session = (await getServerSession(req as any)) as MySession;
    if (!session || !session.user || !session.user.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const userEmail = session.user.email;

    const body = await req.json();

    const { selectedDays, selectedHour1, selectedHour2, email } = body;

    if (!selectedDays || !selectedHour1 || !selectedHour2 || !email) {
      return new NextResponse("Missing data", { status: 400 });
    }

    if (email !== userEmail) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const newData: AvailabilityData = {
      selectedDays,
      selectedHour1,
      selectedHour2,
      email,
    };

    const id = body.id;

    const updatedData = await prismadb.availability.update({
      where: { id, email: userEmail },
      data: newData,
    });

    return new NextResponse(JSON.stringify(updatedData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { selectedDays, selectedHour1, selectedHour2, email } = body;

    if (!selectedDays || !selectedHour1 || !selectedHour2 || !email) {
      return new NextResponse("Missing data", { status: 400 });
    }

    const newData: AvailabilityData = {
      selectedDays,
      selectedHour1,
      selectedHour2,
      email,
    };

    const createdData = await prismadb.availability.create({
      data: newData,
    });

    return new NextResponse(JSON.stringify(createdData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
