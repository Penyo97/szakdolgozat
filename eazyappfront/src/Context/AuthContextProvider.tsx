import React,{createContext, useState} from 'react';


interface authContext {
    isLogged: boolean;
    setIsLogged: (log: boolean) => void
}

const auth: authContext = {
    isLogged:false,
    setIsLogged:(log:boolean) => log

}


const AuthContext = createContext<authContext>(auth)

const AuthContextProvider = ({children}:any) => {

    const [isLogged,setIsLogged] = useState<boolean>(false)

    const authValues:authContext = {
        isLogged,
        setIsLogged
    }

    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export  {AuthContextProvider,AuthContext};