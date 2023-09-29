import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from 'firebase/auth'
import { Navigate } from "react-router-dom";
import { ReactNode, useState, useEffect } from "react";


interface ChildrenProps {
    children: ReactNode
}

const Private = ({ children }: ChildrenProps) => {
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(false);
    //useEffect para verificar se o usuário está logado ou não.
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false);
                setSigned(true);
            } else {
                setLoading(false);
                setSigned(false)
            }
        })
        return () => {
            unsub();
        }
    }, [])

    if (loading) {
        return <p>Carregando</p>
    }

    if (!signed) {
        return <Navigate to='/' />
    }

    return children
}

export default Private