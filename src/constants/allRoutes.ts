export const allRoutes = {
  HOME: "/",
  SETTINGS: "/settings",
  PROFILE: (id: string) => `/profile/${id}`,
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  FORGOT_PASSWORD: "/auth/forgot-password",
  DEMO: "/demo",
};
