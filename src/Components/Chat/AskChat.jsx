import { useState } from "react";

export default function AskChat({ girl }) {
    const [askModal, setAskModal] = useState(null);
    return <>
        <button style={{position : "relative" , top: "5vh"}}>
            ASK
        </button>
        {askModal}
    </>
}