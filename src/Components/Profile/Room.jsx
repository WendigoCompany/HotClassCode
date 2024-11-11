import { useState } from "react";
import { usePageContent } from "../../Context/page_content";
import Relocate from "../../Utils/relocate";
import { useLang } from "../../Context/lang_context";


export default function RoomBtnProfile({id}) {

    const {pc} = usePageContent();
    const {lang} = useLang();
    
    return <>
        <div className=" chat-btn chat-btn-profile">
            <button onClick={() => { Relocate(`/${lang}/room/${id}`) }} className="lang-selector">{pc["room"]}</button>
        </div>
    
    </>
}

