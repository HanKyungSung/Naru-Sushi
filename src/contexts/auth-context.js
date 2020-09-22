import React, { useState } from "react";

export const AuthContext = React.createContext();

export default function AuthContextProvider(props) {
    const [isAuth, setAuth] = useState(false);
    
    const loginUser = () => {
        setAuth(true);
    }

    return (
        <AuthContext.Provider value={{isAuth, loginUser}}>
            {props.children}
        </AuthContext.Provider>
    );
}