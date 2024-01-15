"use client";

import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { DASHBOARD_PATH } from "@/constants/routes";

const useUserRoute = () => {
  const router = useRouter();
  const { isAuth } = useAuth();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (isAuth) {
      router.replace(DASHBOARD_PATH);
    }
    setLoading(false);
  }, [isAuth, router]);

  return { loading };
};

export default useUserRoute;
