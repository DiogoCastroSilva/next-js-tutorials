interface IUser {
  id: number;
  email: string;
  password: string;
}

interface ISession {
  id: number;
  expires_at: number;
  user_id: number;
}

export type { IUser, ISession };
