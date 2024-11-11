import { createContext, useContext } from "react";

export const GirlContext = createContext();
export const useGirl = () => useContext(GirlContext);



const GirlProvider = ({ children, ...params }) => {
    return <GirlContext.Provider value={{ ...params }}>{children}</GirlContext.Provider>
}

export default GirlProvider