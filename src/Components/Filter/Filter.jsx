import {Filter_Func} from "./filter_system.js"
import "../../Styles/Filter/manifiest.css"
import { useLang } from "../../Context/lang_context";
import { usePageContent } from "../../Context/page_content.jsx";
import girls from "../../DB/manifiest.en.json"




export default function Filter({extra}) {
    const { lang }= usePageContent()
    
    const build_droplist =()=>{
        let options = [];
        
        girls.map(g => g.tags.map(t => (options.indexOf(t) == -1) ? (options.push(t)) : ("")))
        options = options.map(t =>  <option value={t}>{t}</option> )
        
        return options
        
    }

    return <>
        <div className="filter-cont">
            <label htmlFor="" className="btxt-p btxt filter-l">{lang.search}</label>
            <input type="text" className="filter" onInput={Filter_Func} />
            <br />
            <select 
            name="select1" 
            onMouseDown={(e) => {
                const target = e.target; // Capturamos el objetivo del evento
                if (target.options && target.options.length > 8) {
                    target.size = 8; // Ajusta el tamaño si hay más de 8 opciones
                }
            }}
            onChange={(e)=>{
                // e.target.size = 1; 
            }}
            onBlur={(e) => { e.target.size = 1; }}
             id="droplist">
        {build_droplist()}           
  
            </select>
        </div>
    </>

}