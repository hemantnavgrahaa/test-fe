"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export const useAuthLoader = () => {
  const { status } = useSession();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (status === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [status]);

  return loading;
};
