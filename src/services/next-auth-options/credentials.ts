import { checkLogin } from "../loginApis";

export const credentials = {
  email: { type: "string" },
  password: { type: "string" },
};

export const credentialsAuth = async (
  credentials: Partial<Record<"email" | "password", unknown>>
) => {
  if (credentials === null) return null;
  try {
    const user = await checkLogin({
      email: credentials.email as string,
      password: credentials.password as string,
    });

    if (user) {
      return user;
    } else {
      throw new Error("User not found");
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
