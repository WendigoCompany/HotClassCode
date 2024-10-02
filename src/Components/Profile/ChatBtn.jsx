import { useState } from "react";
import ChatModal from "../Chat/ChatModal";

export default function ChatBtnProfile() {
    const [modal, setModal] = useState(null);


    return <>
        <div className=" chat-btn chat-btn-profile">
            <button onClick={() => { setModal(<ChatModal setter={setModal} />) }} className="lang-selector">CHAT</button>
        </div>
            {modal}
    </>
}

