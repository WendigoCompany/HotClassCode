import { useLang } from "../../Context/lang_context";

export default function DisclaimRedirect(){
    const {lang} = useLang();
    
    sessionStorage.setItem("o", window.location.href)


    if(sessionStorage.getItem("disclaim")){
        
     
    }else{
      
    }
    return <>

    
    </>
}