'use client';

import Loading from '@/components/Loading';
import api from '@/lib/api';
import { useRouter } from 'next/navigation';
import { use, useEffect, useRef } from 'react';
import { toast } from 'sonner';

export default function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const router = useRouter();
  const toastShown = useRef(false);

  useEffect(() => {
    api
      .get(`/links/o/${slug}` || '')
      .then((data) => {
        if (data.status === 200) {
          router.replace(data.data.data.original_link);
        }
      })
      .catch(() => {
        if (!toastShown.current) {
          toast.error('Link tidak ditemukan');
          toastShown.current = true;
        }
        router.replace('/coming-soon');
      });
  }, [slug, router]);

  return <Loading />;
}
