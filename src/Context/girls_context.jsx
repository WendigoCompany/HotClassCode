import { createContext, useContext } from "react";

export const GirlsContext = createContext();
export const useGirls = () => useContext(GirlsContext);



const GirlsProvider = ({ children, ...params }) => {
    return <GirlsContext.Provider value={{ ...params }}>{children}</GirlsContext.Provider>
}

export default GirlsProvider