import { authOptions } from "@/auth";
import SignupForm from "@/components/atoms/signupForm/signupForm";
import { allRoutes } from "@/constants/allRoutes";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Signup() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(allRoutes.HOME);
  }

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <SignupForm />
    </div>
  );
}
