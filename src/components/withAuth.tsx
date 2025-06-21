'use client';

import { jwtDecode } from 'jwt-decode';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import * as React from 'react';
import { toast } from 'sonner';

import useAuthStore from '@/app/store/useAuthStore';
// import Loading from '@/components/Loading';
import api from '@/lib/api';
import { getToken, removeToken } from '@/lib/cookies';
import type { ApiResponse } from '@/types/api';
import { JWTType, User } from '@/types/user';
import Loading from './Loading';

const ROLE = ['ADMIN', 'USER'] as const;

type Role = (typeof ROLE)[number];

export interface WithAuthProps {
  user: User;
}

const API_USER_ME = '/users/me';
const USER_ROUTE = '/dashboard';
const ADMIN_ROUTE = '/admin';
const LOGIN_ROUTE = '/login';

export enum RouteRole {
  /**
   Dapat diakses hanya ketika user belum login (Umum)
   */
  public,
  /**
   * Dapat diakses semuanya
   */
  optional,
  /**
   * For all authenticated user
   * will push to login if user is not authenticated
   */
  user,
  /**
   * For all authenticated admin
   * will push to login if user is not authenticated
   */
  admin,
}

export const isRole = (p: Role): p is Role => ROLE.includes(p as Role);

/**
 * Add role-based access control to a component
 *
 * @see https://react-typescript-cheatsheet.netlify.app/docs/hoc/full_example/
 * @see https://github.com/mxthevs/nextjs-auth/blob/main/src/components/withAuth.tsx
 */
export default function withAuth<T>(
  Component: React.ComponentType<T>,
  routeRole: keyof typeof RouteRole,
) {
  function ComponentWithAuth(props: T) {
    const router = useRouter();
    const params = useSearchParams();
    const redirect = params.get('redirect');
    const pathName = usePathname();

    //#region  //*=========== STORE ===========
    const isAuthenticated = useAuthStore.useIsAuthenticated();
    const isLoading = useAuthStore.useIsLoading();
    const login = useAuthStore.useLogin();
    const logout = useAuthStore.useLogout();
    const stopLoading = useAuthStore.useStopLoading();
    const user = useAuthStore.useUser();
    //#endregion  //*======== STORE ===========

    const checkAuth = React.useCallback(() => {
      const token = getToken();
      if (!token) {
        isAuthenticated && logout();
        stopLoading();
        return;
      }
      const loadUser = async () => {
        try {
          const res = await api.get<ApiResponse<User>>(API_USER_ME);

          if (!res.data.data) {
            toast.error('Sesi login tidak valid');
            throw new Error('Sesi login tidak valid');
          }

          login({
            ...res.data.data,
            token,
          });
        } catch (_err) {
          await removeToken();
        } finally {
          stopLoading();
        }
      };

      loadUser();
    }, [isAuthenticated, login, logout, stopLoading]);

    React.useEffect(() => {
      checkAuth();

      window.addEventListener('focus', checkAuth);
      return () => {
        window.removeEventListener('focus', checkAuth);
      };
    }, [checkAuth]);

    React.useEffect(() => {
      const Redirect = () => {
        const role: JWTType = jwtDecode(getToken());

        if (isAuthenticated) {
          if (routeRole === 'public') {
            if (redirect) {
              router.replace(redirect as string);
            } else if (role.role === 'admin') {
              router.replace(ADMIN_ROUTE);
            } else {
              router.replace(USER_ROUTE);
            }
          }
          if (role.role === 'user') {
            if (routeRole === 'admin') {
              router.replace(USER_ROUTE);
            }
          }
          if (role.role === 'admin') {
            if (routeRole === 'user') {
              router.replace(ADMIN_ROUTE);
            }
          }
        } else if (routeRole !== 'public') {
          // router.replace(`${LOGIN_ROUTE}?redirect=${pathName}`);
          router.replace(`${LOGIN_ROUTE}`);
        }
      };

      if (!isLoading) {
        Redirect();
      }
    }, [isAuthenticated, isLoading, pathName, redirect, router, user]);

    if (
      (isLoading || !isAuthenticated) &&
      routeRole !== 'public' &&
      routeRole !== 'optional'
    ) {
      return <Loading />;
    }

    return <Component {...(props as T)} user={user} />;
  }

  return ComponentWithAuth;
}
