"use client";

import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { LOGIN_PATH } from "@/constants/routes";

const useProtectedRoute = (authRedirect?: string) => {
  const router = useRouter();
  const { isAuth } = useAuth();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!isAuth) {
      router.replace(LOGIN_PATH);
    }
    if (authRedirect && isAuth) {
      router.replace(authRedirect);
    }
    setLoading(false);
  }, [authRedirect, isAuth, router]);

  return { loading };
};

export default useProtectedRoute;
