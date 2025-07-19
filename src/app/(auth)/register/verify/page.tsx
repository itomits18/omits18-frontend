'use client';

import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import { toast } from 'sonner';
import useVerifyEmail from '../hooks/useVerifyEmail';

function VerifyPage() {
  const router = useRouter();
  const params = useSearchParams();
  const token = params.get('token');

  const { status } = useVerifyEmail(token as string);

  useEffect(() => {
    if (!token) {
      router.push('/login');
      return;
    }

    if (status === 'success') {
      toast.success('Email kamu berhasil diverifikasi!');
      router.push('/login');
    }

    if (status === 'error') {
      toast.error('Failed to verify email');
      return redirect('/login');
    }
  }, [token, status, router]);

  return null;
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyPage />
    </Suspense>
  );
}
