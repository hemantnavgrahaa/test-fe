import axiosInstance from "./axiosInstance";

export const checkLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    // const res = await axiosInstance.post("/login", {
    //   email,
    //   password,
    // });
    console.log({ email, password });
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
