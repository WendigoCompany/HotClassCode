import { useLang } from "../../Context/lang_context";
import Relocate from "../../Utils/relocate";

export default function DisclaimRedirect(){
    const {lang} = useLang();
    



    if(!sessionStorage.getItem("disclaim")){

        
        if(process.env.REACT_APP_STADE == "gh"){
            sessionStorage.setItem("o", window.location.hash)
        }else{
            sessionStorage.setItem("o", window.location.pathname)
        }
        Relocate( "/"+ lang + "/disclaim/")
    }
    return <>

    
    </>
}