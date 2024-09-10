// "use server";

import { signIn, signOut } from "next-auth/react";

// import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData: FormData) {
  const action = formData.get("action");
  await signIn(action as any, { callbackUrl: "/" });
}

export async function doLogout() {
  await signOut({ callbackUrl: "/login" });
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
