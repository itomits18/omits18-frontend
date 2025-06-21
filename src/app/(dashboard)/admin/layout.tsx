'use client';
import Loading from '@/components/Loading';
import withAuth from '@/components/withAuth';
import DashboardLayout from '@/layouts/DashboardLayout';
import React, { Suspense } from 'react';

function DashboradAdminLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}

const AdminMiddleware = withAuth(DashboradAdminLayout, 'admin');

export default function AdminPage({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <AdminMiddleware>{children}</AdminMiddleware>
    </Suspense>
  );
}
