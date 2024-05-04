import { getServerSession } from "next-auth";
import prismadb from "../../libs/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { MySession } from "@/app/constants/types";

export async function PUT(req: Request) {
  try {
    const session = (await getServerSession(req as any)) as MySession;

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const userEmail = session?.user?.email;

    const body = await req.json();
    const { password, newPassword1, newPassword2, hashPasswordd } = body;

    if (!password || !newPassword1 || !newPassword2 || !hashPasswordd) {
      return new Response("Missing data", { status: 400 });
    }

    if (newPassword1 !== newPassword2) {
      return new Response("new password is not equal to confirm password", {
        status: 400,
      });
    }

    const correctPassword = await bcrypt.compare(password, hashPasswordd);

    if (!correctPassword) {
      throw new Error("Invalid hash-password");
    }

    const newHashedPassword = await bcrypt.hash(newPassword1, 12);

    const updatedUser = await prismadb.user.update({
      where: {
        email: userEmail,
      },
      data: {
        hashedPassword: newHashedPassword,
      },
    });

    return new Response(JSON.stringify(updatedUser), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.log("UPDATE_ERR: " + err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
