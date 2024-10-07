import { createContext, useContext, useState } from "react";




export const PrevContext = createContext();
export const usePrev = () => useContext(PrevContext);



const PrevProvider = ({ children, ...params }) => {
    return <PrevContext.Provider value={{ ...params }}>{children}</PrevContext.Provider>
}



export default function Redirect({ children, middlewares = <></> , func ,destiny ="" }) {
    const [compo, setCompo ] = useState(<><label htmlFor="">Redirecting</label></>);
    
    try {
        func()
    } catch (error) {
        console.log(error);
        
    }
    sessionStorage.setItem("d", destiny)

    return <>
    <PrevProvider setCompo={setCompo}>
        {middlewares}
        {children}
    </PrevProvider>
        {compo}
    </>
}