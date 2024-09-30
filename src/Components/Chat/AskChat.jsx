import { useState } from "react";
import AskModal from "./AskModal";
import { useGirl } from "./ChatModal";

export default function AskChat({ }) {
    const {girl} = useGirl();
    const [askModal, setAskModal] = useState(null);



    return <>
        <button disabled={girl == null} onClick={() => {
            setAskModal(<AskModal  setAskModal={setAskModal} />)
        }} className="ask-btn close-btn" id="ask-btn">
            ASK
        </button>
        {askModal}
    </>
}