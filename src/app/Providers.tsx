'use client';

import { AppProgressProvider as ProgressProvider } from '@bprogress/next';
import {
  QueryClient,
  QueryClientProvider,
  QueryOptions,
} from '@tanstack/react-query';
import { Toaster } from 'sonner';

import api from '@/lib/api';

const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
  const { data } = await api.get(`${queryKey?.[0]}`);
  return data;
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ProgressProvider
      color="#8fbfda"
      height="4px"
      options={{ showSpinner: false }}
    >
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" richColors />
        {children}
      </QueryClientProvider>
    </ProgressProvider>
  );
}
