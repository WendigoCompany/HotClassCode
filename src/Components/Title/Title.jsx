import { config } from "../../Router/Routes";
import "../../Styles/Title/manifiest.css"

export default function Title(){
    let url = '';
    if(process.env.REACT_APP_STADE == "gh"){
        url += config.gh_repo +"#" 
    }
    

    return <>

                <h1 className={`page-title`} style={{cursor: "pointer"}} onClick={()=>{
                    window.location.href= url + "/";
                    window.location.reload()
                    
                }}>   {process.env.REACT_APP_NAME.toUpperCase()}</h1>
      
    </>
}