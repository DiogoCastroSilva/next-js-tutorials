import { ReactNode, createContext, useState } from 'react';

interface IUser {
  username: string;
  email: string;
  password: string;
}

type AuthState = (IUser & { error: string }) | null;

interface IAuthContext {
  auth: AuthState;
  register: (user: IUser) => Promise<void>;
  login: (user: Omit<IUser, 'username'>) => Promise<void>;
  logout: () => Promise<void>;
  checkUserLoggedIn: (user: IUser) => Promise<void>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthState>(null);

  const register = async ({ username, email, password }: IUser) => {};

  const login = async ({ email, password }: Omit<IUser, 'username'>) => {};

  const logout = async () => {
    setAuth(null);
  };

  const checkUserLoggedIn = async ({}: IUser) => {};

  return (
    <AuthContext.Provider
      value={{ auth, register, login, logout, checkUserLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
