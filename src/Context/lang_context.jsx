import { createContext, useContext, useState } from "react";

export const LangContext = createContext();
export const useLang = () => useContext(LangContext);



const LangProvider = ({ children }) => {
    const [lang, setLang] = useState(sessionStorage.getItem("lang") || 'en');

    sessionStorage.setItem("lang", lang)
    return <LangContext.Provider value={{lang , setLang}}>{children}</LangContext.Provider>
}

export default LangProvider