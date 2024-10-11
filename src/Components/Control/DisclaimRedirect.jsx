import { useLang } from "../../Context/lang_context";
import Relocate from "../../Utils/relocate";

export default function DisclaimRedirect(){
    const {lang} = useLang();
    



    if(!sessionStorage.getItem("disclaim")){
        sessionStorage.setItem("o", window.location.href)
        Relocate( "/"+ lang + "/disclaim/")
        

    }
    return <>

    
    </>
}