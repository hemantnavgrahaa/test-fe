import Image from "next/legacy/image";
import Logout from "@/components/molecules/Logout";
import { authOptions } from "@/auth";

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Card from "@/components/atoms/card/card";
import { allRoutes } from "@/constants/allRoutes";

const HomePage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(allRoutes.LOGIN);
  }

  return (
    <div className="flex flex-col items-center gap-5 m-4 ">
      <Card />
      <Card />
      <Card />
      <Logout />
    </div>
  );
};

export default HomePage;
