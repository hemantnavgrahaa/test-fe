import { authOptions } from "@/auth";
import LoginForm from "@/components/atoms/loginForm/loginForm";
import { allRoutes } from "@/constants/allRoutes";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(allRoutes.HOME);
  }

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <LoginForm />
    </div>
  );
}
