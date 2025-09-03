'use client';
import Loading from '@/components/Loading';
import withAuth from '@/components/withAuth';
import React, { Suspense } from 'react';

function DashboardAdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

const AdminMiddleware = withAuth(DashboardAdminLayout, 'user');

export default function AdminPage({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <AdminMiddleware>{children}</AdminMiddleware>
    </Suspense>
  );
}
