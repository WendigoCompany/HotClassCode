import { useState } from "react";
import AskModal from "./AskModal";

export default function AskChat({ girl }) {
    const [askModal, setAskModal] = useState(null);
    return <>
        <button disabled={girl == null} onClick={() => {
            setAskModal(<AskModal setter={setAskModal} />)
        }} className="ask-btn close-btn">
            ASK
        </button>
        {askModal}
    </>
}