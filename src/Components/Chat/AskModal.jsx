
import { useLang } from "../../Context/lang_context";
import questions from "../../DB/questions.json"
import { useGirl, useMsj } from "./ChatModal";

export default function AskModal({ setAskModal }) {
    const { girl } = useGirl();
    const { lang } = useLang();
    const { setMsj } = useMsj();

    return <>
        <div className="ask-modal">
            <div>
                <button className="close-btn" onClick={() => { setAskModal(null) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </button>
                <h1 className="page-title ask-title" >QUESTIONS</h1>
                <div className="ask-q">
                    <button className="close-btn">asdas</button>


                </div>
            </div>
        </div>
    </>
}