

import { useLang } from "../Context/lang_context";
import en from "../DB/manifiest.en.json"
import es from "../DB/manifiest.es.json"
import { useRMeta } from "../Router/MetaContext";

const girls = { en , es};



export default function Profile(){
    const { lang  } = useLang();
    let girl_data
    /* eslint-disable */
    try {
        const {getParam} = useRMeta();
        const {id} = getParam();
        girl_data= girls[lang][id];
        
    } catch (error) {
        console.log(error);
        
    }
/* eslint-enable */

    return <>
    {
        (girl_data) ?  (
            <>
            asd
            </>


        ) : ("")
    }
    </>
}