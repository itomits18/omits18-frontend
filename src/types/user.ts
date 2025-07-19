export type JWTType = {
  participant_id: string;
  role: 'user' | 'admin';
  team_id: string;
  user_id: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  token: string;
  is_verified: boolean;
};

export type withToken = {
  token: string;
};
