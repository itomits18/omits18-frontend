export type PostalDetail = {
  code: number;
  district: string;
  regency: string;
  province: string;
  region: string;
};

export type ParticipantDetail = {
  id: number;
  participant_id: number;
  student_id: string;
  student_id_url: string;
  status: 'PENDING' | 'VERIFIED' | 'REJECTED' | 'NEED_REVISION' | 'PAYMENT'; // enum opsional
  type: 'OMITS' | 'MISSION';
  sub_type: 'SD' | 'SMP' | 'SMA' | 'MISSION'; // sesuai data kamu sebelumnya
};

export type Participant = {
  id: number;
  name: string;
  user_id: number;
  creator_id: number;
  participant_number: string;
  email: string;
  postal: number;
  phone: string;
  instance_name: string;
  instance_address: string;
  participant_detail: ParticipantDetail;
  postal_detail: PostalDetail;
  payment_url: string;
  whatsapp_group_link: string;
  my_its_pass: string;
  is_omits_class: boolean;
};
