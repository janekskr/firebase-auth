import { User } from "firebase/auth";
import { createContext, useState } from "react";

interface AuthContextType {
    user : User | null;
    userDisplayName : string | null | undefined;
    setUser : (user : User | null) => void;
    setUserDisplayName : (displayName : string | null | undefined) => void;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children } : {children : React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null)
    const [userDisplayName, setUserDisplayName] = useState<string | null | undefined>(undefined)

    return (
        <AuthContext.Provider value={{user, setUser, setUserDisplayName, userDisplayName}}>
            {children}
        </AuthContext.Provider>
    )
}