import { useState } from "react";
import { usePageContent } from "../../Context/page_content";
import Relocate from "../../Utils/relocate";


export default function RoomBtnProfile({id}) {

    const {pg} = usePageContent();

    
    return <>
        <div className=" chat-btn chat-btn-profile">
            <button onClick={() => { Relocate(`/room/${id}`) }} className="lang-selector">{pg["room"]}</button>
        </div>
    
    </>
}

