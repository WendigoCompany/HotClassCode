import { createContext, useContext, useState } from "react";
import { useRMeta } from "../Router/MetaContext";

export const LangContext = createContext();
export const useLang = () => useContext(LangContext);



const LangProvider = ({ children }) => {

  /* eslint-disable */
  try {
    const { getParam } = useRMeta();
    const { lang } = getParam();

    const [langSt, setLang] = useState(lang);

    return <LangContext.Provider value={{lang: langSt , setLang}}>{children}</LangContext.Provider>

  } catch (error) {
    console.log(error);

  }
  

  /* eslint-enable */


    
    // sessionStorage.setItem("lang", lang)

}

export default LangProvider