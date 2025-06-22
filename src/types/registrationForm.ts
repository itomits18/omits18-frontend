export type RegistrationForm = {
  name: string;
  user_id: null;
  email: string;
  postal?: number;
  phone: string;
  instance_name?: string;
  instance_address?: string;
  detail: {
    student_id: string;
    student_id_url: string;
    status?: string;
    type?: 'OMITS' | 'MISSION';
    sub_type?: string;
  };
};

export type RegistrationFormTeam = {
  participants: RegistrationForm[];
};

export type PaymentRegistration = {
  payment_method: string;
  competition_type: 'OMITS' | 'MISSION';
  competition_sub_type?: string;
  details: {
    participant_name: string;
    participant_student_id: string;
  }[];
};
