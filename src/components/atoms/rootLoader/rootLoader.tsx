"use client";
import { useAuthLoader } from "@/hooks/useAuthLoader";
import Loader from "@/components/atoms/loader/loader";

const RootLoader = () => {
  const loading = useAuthLoader();
  return loading ? <Loader /> : null;
};

export default RootLoader;
