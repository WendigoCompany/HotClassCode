import { createContext, useContext, useState } from "react";

export const LangContext = createContext();
export const useLang = () => useContext(LangContext);



const LangProvider = ({ children }) => {
    const [lang, useLang] = useState('en');

    return <LangContext.Provider value={{lang , useLang}}>{children}</LangContext.Provider>
}

export default LangProvider