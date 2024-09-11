// "use server";

import { allRoutes } from "@/constants/allRoutes";
import { signIn, signOut } from "next-auth/react";

// import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData: FormData) {
  const action = formData.get("action");
  await signIn(action as any, { callbackUrl: allRoutes.HOME });
}

export async function doLogout() {
  await signOut({ callbackUrl: allRoutes.LOGIN });
}

export async function doCredentialLogin(formData: FormData) {
  // "use server";
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (err) {
    throw err;
  }
}
