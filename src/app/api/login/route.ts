import { usersConstants } from "@/constants/data";
import { NextResponse } from "next/server";

type User = {
  email: string;
  password: string;
  name: string;
};

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const user: User | undefined = usersConstants.find(
      (item) => item.email === email
    );

    if (user && user.password === `${password}`) {
      const data: Omit<User, "password"> & { password?: string } = { ...user };
      delete data.password;
      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Invalid email or password!" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
