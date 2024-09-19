import { useLang } from "../../Context/lang_context";
import "../../Styles/Lang/manifiest.css";
export default function LangSelector(){
    const {lang, setLang} = useLang();
    return <>
    <select value={lang} className="lang-selector" onChange={(e)=>{
        setLang(e.target.value)
        
    }}>
        <option value="en">English</option>
        <option value="es">Español</option>
    </select>
    </>
}