import { authOptions } from "@/auth";
import LoginForm from "@/components/molecules/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <LoginForm />
    </div>
  );
}
