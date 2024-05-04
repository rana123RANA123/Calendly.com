import { getServerSession } from "next-auth";
import prismadb from "../../libs/prismadb";
import bcrypt from "bcrypt";

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { userEmail, password } = body;

    if (!userEmail || !password) {
      return new Response("Missing data", { status: 400 });
    }

    const newHashedPassword = await bcrypt.hash(password, 12);

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
