export type JWTType = {
  exp: number;
  iat: number;
  participant_id: string;
  role: 'user' | 'admin';
  team_id: string;
  user_id: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
};

export type withToken = {
  token: string;
};
