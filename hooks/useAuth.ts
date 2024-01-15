"use client";

import { DASHBOARD_PATH, LOGIN_PATH } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

const useAuth = () => {
  const AUTH_LOCALSTORAGE_NAME = "logged-auth";
  const router = useRouter();

  const login = useCallback(
    (authUser: AuthUser) => {
      localStorage.setItem(AUTH_LOCALSTORAGE_NAME, JSON.stringify(authUser));
      router.replace(DASHBOARD_PATH);
    },
    [router]
  );

  const logout = useCallback(() => {
    localStorage.clear();
    router.replace(LOGIN_PATH);
  }, [router]);

  const getUserData = useMemo(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem(AUTH_LOCALSTORAGE_NAME);
      return userData ? (JSON.parse(userData) as AuthUser) : null;
    }
    return null;
  }, []);

  const isAuth = useMemo(() => {
    const userData = getUserData;
    return userData ? userData.isLoggedIn : false;
  }, [getUserData]);

  return { login, logout, getUserData, isAuth };
};

export default useAuth;
