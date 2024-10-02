import { useState } from "react";
import { usePageContent } from "../../Context/page_content";


export default function RoomBtnProfile() {

    const {pg} = usePageContent();

    return <>
        <div className=" chat-btn chat-btn-profile">
            <button onClick={() => {  }} className="lang-selector">{pg["room"]}</button>
        </div>
    
    </>
}

