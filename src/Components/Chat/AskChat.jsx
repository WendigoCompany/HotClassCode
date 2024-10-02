import { useState } from "react";
import AskModal from "./AskModal";
import { useGirl } from "../../Pages/Profile";
import { usePageContent } from "../../Context/page_content";




export default function AskChat({ }) {
    const {girl} = useGirl();
    const [askModal, setAskModal] = useState(null);
    const {pg } = usePageContent(); 
    console.log(pg);
    

    return <>
        <button disabled={girl == null} onClick={() => {
            setAskModal(<AskModal  setAskModal={setAskModal} />)
        }} className="ask-btn close-btn" id="ask-btn">
           {pg["ask"]}
        </button>
        {askModal}
    </>
}