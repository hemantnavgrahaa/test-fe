import Image from "next/image";
import Logout from "@/components/molecules/Logout";
import { authOptions } from "@/auth";

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

const HomePage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col items-center m-4">
      {session?.user?.name && session?.user?.image ? (
        <>
          <h1 className="text-3xl my-2">Welcome, {session?.user?.name}</h1>
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            width={72}
            height={72}
            className="rounded-full"
          />
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </>
      ) : (
        <h1 className="text-3xl my-2">Welcome, {session?.user?.email}</h1>
      )}
      <Logout />
    </div>
  );
};

export default HomePage;
