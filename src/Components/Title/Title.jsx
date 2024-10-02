import "../../Styles/Title/manifiest.css"
import Relocate from "../../Utils/relocate";

export default function Title() {
    // let url = '';
    // if (process.env.REACT_APP_STADE == "gh") {
    //     url += config.gh_repo + "#"
    // }


    return <>

        <h1 className={`page-title`} style={{ cursor: "pointer" }} onClick={()=>{Relocate("/")}
            // window.location.href = window.location.origin + url + "/";

            // if (process.env.REACT_APP_STADE == "gh") {
            //     window.location.reload()


            // }
        }>   {process.env.REACT_APP_NAME.toUpperCase()}</h1>

    </>
}