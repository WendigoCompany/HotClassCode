import {Filter_Func} from "./filter_system.js"
import "../../Styles/Filter/manifiest.css"
import { useLang } from "../../Context/lang_context";
import { usePageContent } from "../../Context/page_content.jsx";




export default function Filter({extra}) {
    const { lang }= usePageContent()
    
    return <>
        <div className="filter-cont">
            <label htmlFor="" className="btxt-p btxt filter-l">{lang.search}</label>
            <input type="text" className="filter" onInput={Filter_Func} />
        </div>
    </>

}