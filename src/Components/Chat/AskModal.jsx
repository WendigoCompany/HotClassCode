
import { useLang } from "../../Context/lang_context";
import { usePageContent } from "../../Context/page_content";
import questions from "../../DB/questions.json"
import { useGirl } from "../../Pages/Profile";
import { useMsj } from "./ChatModal";

export default function AskModal({ setAskModal }) {
    const { girl } = useGirl();
    const { lang } = useLang();
    const { setMsj } = useMsj();
    const {pg} = usePageContent();
     
    return <>
        <div className="ask-modal">
            <div>
                <button className="close-btn" onClick={() => { setAskModal(null) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </button>
                <h1 className="page-title ask-title" >{pg["question"]}</h1>
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