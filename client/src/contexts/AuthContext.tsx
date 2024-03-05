import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface AuthContextType {
  user: any;
  signed: boolean;
  setUser: (user: any) => void;
  signIn: (user: any) => Promise<void>;
  register: (user: any) => Promise<void>;
  logout: () => Promise<void>;
}

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  signed: false,
  setUser: () => { },
  signIn: async () => { },
  register: async () => { },
  logout: async () => { }

});


export const AuthProvider = ({ children }: any) => {

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const loadingStoreData = async () => {

      const storageUser = localStorage.getItem('@Auth:user')
      const storageToken = localStorage.getItem('@Auth:token')

      if (storageUser && storageToken) {
        console.log(storageUser)
        setUser(storageUser)
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${storageToken}`;
      }

    }
    loadingStoreData()
  }, [])



  const signIn = async (user: any) => {
    try {
      const response = await api.post('/auth/login', user);

      if (response.data.error) {
        if (response.data.error === "User not found") {
          throw new AuthError("Usuário não encontrado");
        } else if (response.data.error === "Invalid credentials") {
          throw new AuthError("Senha inválida");
        } else {
          throw new AuthError("Erro de autenticação: ");
        }
      } else {
        setUser(response.data.username);

        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;

        localStorage.setItem('@Auth:token', response.data.token);
        localStorage.setItem('@Auth:user', response.data.username);


      }
    } catch (error: any) {
      throw new AuthError("Erro de autenticação: " + error.message);
    }
  }

  const register = async (user: any) => {

    try {

      const response = await api.post('/auth/register', user);


      if (response.data.error) {
        if (response.data.error === "User already exists") {
          throw new AuthError("Usuário já existe");
        } else {
          throw new AuthError("Erro de autenticação: ");
        }
      } else {
        setUser(response.data.username);


        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;

        localStorage.setItem('@Auth:token', response.data.token);
        localStorage.setItem('@Auth:user', response.data.username);

      }

    } catch (error: any) {
      throw new AuthError("Erro de autenticação: " + error.message);
    }

  }

  const logout = async () => {

    localStorage.removeItem('@Auth:token');
    localStorage.removeItem('@Auth:user');

    setUser(null);

  }

  return (
    <AuthContext.Provider value={{ user, signed: !!user, setUser, signIn, register, logout }}>
      {children}
    </AuthContext.Provider>
  )

}