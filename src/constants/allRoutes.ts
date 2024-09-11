export const allRoutes = {
  HOME: "/",
  SETTINGS: "/settings",
  PROFILE: (id: string) => `/profile/${id}`,
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  DEMO: "/demo",
};
