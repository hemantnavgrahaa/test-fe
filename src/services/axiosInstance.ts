import axios from "axios";

const PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const INTERNAL_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL;

const axiosPublic = axios.create({
  baseURL: PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosInternal = axios.create({
  baseURL: INTERNAL_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosPublic.interceptors.request.use(
  (config) => {
    // // Get the token from local storage
    // const token = localStorage.getItem("token"); // Adjust the key as needed

    // // If the token exists, add it to the headers
    // if (token) {
    //   // Remove quotes from both sides
    //   let trimmedToken = token.replace(/^"|"$/g, "");
    //   config.headers.Authorization = `Bearer ${trimmedToken}`;
    // }

    return config;
  },
  (error) => {
    // Handle any errors that occur during the request setup
    return Promise.reject(error);
  }
);

axiosPublic.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;
    switch (
      status
      //   case 401:
      //     localStorage.removeItem("token");
      //     window.location.href = allRoutes.LOGIN;
      //     break;
    ) {
    }
    throw error;
  }
);

export { axiosInternal, axiosPublic };
