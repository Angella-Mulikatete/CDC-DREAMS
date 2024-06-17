// since we have two layouts we need to differentiate which layout to display. It depends if the user is authenticared or not
//React Context allows you to share and manage state across your components without passing down props.
//Based on whether the  token is available or not, the default layout will be rendered or the guest layout will be rendered with corresponding pages


import { createContext, useState, ReactNode } from "react";

interface StateContextType {
    user: object | null;
    token: string | null;
    setUser: React.Dispatch<React.SetStateAction<object | null>>;
    setToken: (token: string | null) => void;
}

interface ContextProviderProps {
    children: ReactNode;
}


export const StateContext = createContext<StateContextType>({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    // const [token, _setToken] = useState<string | null>(localStorage.getItem("ACCESS_TOKEN"));
    //  const [token, _setToken] = useState<string | null>("123");

    const setToken = (token: string | null) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token); // whenever an authenticated user refreshes  he/she stays authenticated
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    return (
        <StateContext.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </StateContext.Provider>
    );
};




























// import { createContext, useState } from "react";

// const stateContext = createContext({
//     user:null,
//     token:null,
// })

// export const ContextProvider =({children})=>{
//     const [user, setUser] = useState({});
//     const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

//     const setToken = (token)=>{
//         _setToken(token)
//         if(token){
//             localStorage.getItem('ACCESS_TOKEN', token);
//         }else{
//             localStorage.removeItem('ACCESS_TOKEN');
//         }
//     }
//     return(
//         <stateContext.Provider value={{
//             user,
//             setUser,
//             token,
//             setToken,
//         }}>
//             {children}
//         </stateContext.Provider>
//     )
// }