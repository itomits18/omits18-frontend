import api from '@/lib/api';
import { useMutation, useQuery } from '@tanstack/react-query';
import React from 'react';
import { FormValues } from '../omits/registration/container/FormPage1';
import { ApiError } from '@/types/api';
import { toast } from 'sonner';
import {
  RegistrationForm,
  RegistrationFormTeam,
} from '@/types/registrationForm';

export default function useRegistration(type: string) {
  const { mutate, isPending } = useMutation({
    mutationKey: ['post-registration'],
    mutationFn: async (
      dataRegistration: RegistrationForm | RegistrationFormTeam,
    ) => {
      const { data } = await api.post(
        '/participants' + (type !== 'single' ? '/bulk' : ''),
        dataRegistration,
      );

      return data.data;
    },
    onSuccess: (data: FormValues) => {
      console.log(data);
    },
    onError: (err: { response: { data: ApiError } }) => {
      toast.error(err.response.data.message);
    },
  });

  return { mutate, isPending };
}
