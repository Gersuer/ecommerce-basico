import { createContext, ReactNode, useState } from "react";
//Métodos do firebase para criar usuários
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
//Metodos para logar o usuário
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
//Metodo para deslogar
import { signOut } from 'firebase/auth';
import { auth } from "../firebase/firebaseConfig";

interface ChildrenProps {
    children: ReactNode
}
interface LoginRegisterProps {
    email: string
    senha: string
}

interface AuthContextProps {
    register: ({ email, senha }: LoginRegisterProps) => Promise<void>
    login: ({ email, senha }: LoginRegisterProps) => Promise<void>
    signout: () => Promise<void>
    signed: boolean
}

export const AuthContext = createContext({} as AuthContextProps);

function AuthContextProvider({ children }: ChildrenProps) {
    const [signed, setSigned] = useState(false);
    //Hook do firebase para criar um usuário novo
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    // Hook do firebase para logar com usuário já cadastrado
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    //Função responsável por registrar um novo usuário
    async function register({ email, senha }: LoginRegisterProps) {
        await createUserWithEmailAndPassword(email, senha);
        if (user?.user) {
            console.log(user.user);
        }
    }

    //Função responsável por realizar o login
    async function login({ email, senha }: LoginRegisterProps) {
        await signInWithEmailAndPassword(email, senha);
        setSigned(true);
    }

    //Função responsável por fazer o logout do usuário
    async function signout() {
        signOut(auth);
        setSigned(false);
    }

    //Função responsável por adicionar itens ao carrinho

    return (
        <AuthContext.Provider
            value={
                {
                    register,
                    login,
                    signout,
                    signed
                }
            }
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;