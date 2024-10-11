
// import { useRezise } from "../../Context/Mobile";
// import { getParams } from "../../functions/Params";
// import { github_url } from "../../App";
// import { useRezise } from "../../Context/Mobile";
// import { getParams } from "../Main Page/function/params";





// const router_code = process.env.NODE_ENV === "development" ? "" : "#/";

// CSS
import "../Styles/Disclaim/manifiest.css";
// CSS

// LANGS
import es from "../Lang/es/disclaim.json"
import en from "../Lang/en/disclaim.json"
import { useLang } from "../Context/lang_context";
import Title from "../Components/Title/Title";
import Relocate from "../Utils/relocate";
// LANGS


const langs ={
    es,
en
};


export default function Disclaim() {


    const {lang} = useLang();
    
    const lang_data = langs[lang];
    
const move_to_page = ()=>{
  
        let origin = sessionStorage.getItem('o') || `/${lang}/` ;
        sessionStorage.setItem("disclaim" , 1)
        Relocate(origin.replace("#", ""))
        sessionStorage.removeItem('o')

        // if(origin){
        //     Relocate(origin.replace("#", ""))
        //     sessionStorage.removeItem('o')
            
        // }else{
        //     Relocate(`/${lang}/`)
        //     sessionStorage.removeItem('o')
        // }

        // if (origin == null || origin.length < 8) {
        //     origin = github_url + router_code;
        // }
        // sessionStorage.setItem("disclaim", true) 
        // window.location.href = origin;
        // setTimeout(() => {
        //     window.location.reload();
        // }, 500);

    
}
const move_to_google = ()=>{
    window.location.href = "https://www.google.com";
}


    return (
        <div>
            {/* <div className={` disclaim-title`}>
                <h1 className={`disclaim-title  t-shadow-blacked`}>   {process.env.REACT_APP_NAME.toUpperCase()}</h1>
            </div> */}
            <Title/>
            <div className={`alert-img-cont`}>
                <img
                    className={`alert-img alert-img`}
                    src="https://cdn-icons-png.flaticon.com/512/2299/2299283.png"
                    alt=""
                />
            </div>
            <div style={{ textAlign: "center" }}>
                <h3 className={`disclaim disclaim t-shadow-blacked`}>
                    {lang_data.disclaim_txt}
                </h3>
                <button
                    onClick={move_to_page}
                    className={`button outline disc-accept disc-accept t-shadow-blacked`}
                >
                       {lang_data.y_btn}
                </button>
                <br />
                <button
                    onClick={move_to_google }
                    className={`button outline disc-cancel disc-cancel t-shadow-blacked`}
                >   {lang_data.n_btn}
                    
                </button>
            </div>
        </div>
    );
}