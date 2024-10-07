import { createContext, useContext, useState } from "react";
import { useRMeta } from "../Router/MetaContext";

export const LangContext = createContext();
export const useLang = () => useContext(LangContext);



const LangProvider = ({ children }) => {





let langSt
let setLang
  /* eslint-disable */
  try {
    const { getParam } = useRMeta();
    const { lang } = getParam();

    //  const [langSt, setLang] = useState(lang);

    let st1 =useState(lang) ;
     langSt =st1[0];
     setLang =st1[1];
  } catch (error) {
    console.log(error);

  }
    

  /* eslint-enable */


    
    // sessionStorage.setItem("lang", lang)


    
    return <LangContext.Provider value={{lang: langSt , setLang}}>{children}</LangContext.Provider>
}

export default LangProvider