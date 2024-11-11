import { useState } from "react";
import AskModal from "./AskModal";
import { usePageContent } from "../../Context/page_content";
import { useGirl } from "../../Context/girl_context";




export default function AskChat({ }) {
    const {girl} = useGirl();
    const [askModal, setAskModal] = useState(null);
    const {pc } = usePageContent(); 
    
    
    return <>
        <button disabled={girl == null} onClick={() => {
            setAskModal(<AskModal  setAskModal={setAskModal} />)
        }} className="ask-btn close-btn" id="ask-btn">
           {pc["ask"]}
        </button>
        {askModal}
    </>
}