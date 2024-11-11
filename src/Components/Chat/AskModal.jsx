
import { useGirl } from "../../Context/girl_context";
import { useLang } from "../../Context/lang_context";
import { usePageContent } from "../../Context/page_content";
import questions from "../../DB/questions.json"
import { useMsj } from "./ChatModal";

export default function AskModal({ setAskModal }) {
    const { lang } = useLang();
    const { setMsj } = useMsj();
    const {pc} = usePageContent();
     
    return <>
        <div className="ask-modal">
            <div>
                <button className="close-btn" onClick={() => { setAskModal(null) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </button>
                <h1 className="page-title ask-title" >{pc["question"]}</h1>
                <div className="ask-q">
                    

                    {questions.map(q => <button
                    onClick={()=>{
                        setMsj(q.id)
                        setAskModal(null)
                    }}
                    className="close-btn">{q[lang].toUpperCase()}</button>)}


                </div>
            </div>
        </div>
    </>
}