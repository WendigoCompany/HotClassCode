import { useEffect } from "react";
import { useDevice } from "../../Context/is_mobile";
import { useLang } from "../../Context/lang_context";
import { useMsj } from "./ChatModal";
import { useGirl } from "../../Context/girl_context";
// import { useGirl } from "../../Pages/Profile";
import andswers from "../../DB/answers.json"
import random from "../../Utils/random";
const textAnimation = (text) => {
    let index = [0, text.length];
    document.getElementById("ask-btn").disabled = true;
    let int = setInterval(() => {
        document.getElementById("chat-label").innerHTML = text.substring(0, index[0]);
        index[0]++
        if (index[0] == index[1] + 1) {
            clearInterval(int)
            document.getElementById("ask-btn").disabled = false;
        }
    }, 30);

}



export default function ChatMsj({ }) {
    const { girl } = useGirl();
    const { lang } = useLang();
    const { msj, setMsj } = useMsj();
    const { device } = useDevice();



    useEffect(() => {
        const question = andswers.filter(a => a.qid == msj)[0];
        const ans = question.ans[girl.id][lang];
        if(Array.isArray(ans)){
 
            textAnimation(ans[random(ans.length)])
        }else{
            textAnimation(ans)
        }
        
        // const text = girl.chat[girl.chat.findIndex(ch => ch.id == msj)].t;

        // textAnimation(text)
    }, [msj])


    return <>
        <div>
            <div className="t-center">
                <div className="chat-img chat-list-g" style={{ backgroundImage: `url("${girl["gallery"][girl["main_img"]]}")` }}></div>
            </div>
            <br />
            <div className={device == "mob" ? "t-center" : ""}>
                <label htmlFor="" id="chat-label"></label>

            </div>
        </div>
    </>
}