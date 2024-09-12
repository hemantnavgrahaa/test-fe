import { authOptions } from "@/auth";
import ForgotPassForm from "@/components/atoms/forgotPassForm/forgotPassForm";
import { allRoutes } from "@/constants/allRoutes";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const ForgotPassword = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(allRoutes.HOME);
  }

  return (
    <div className="flex min-h-screen flex-col justify-center items-center m-4">
      <ForgotPassForm />
    </div>
  );
};

export default ForgotPassword;
