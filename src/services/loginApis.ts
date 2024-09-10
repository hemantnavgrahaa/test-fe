import { axiosInternal } from "./axiosInstance";

export const checkLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { data } = await axiosInternal.post("/api/login", {
      email,
      password,
    });

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
