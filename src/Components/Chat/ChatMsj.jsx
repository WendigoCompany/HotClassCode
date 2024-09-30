import { useDevice } from "../../Context/is_mobile";
import { useLang } from "../../Context/lang_context";
import { useGirl, useMsj } from "./ChatModal";

export default function ChatMsj({ }) {
    const { girl } = useGirl();
    const { lang } = useLang();
    const { setMsj } = useMsj();
    const { device } = useDevice();
    return <>
     <div>
                        <div className="t-center">
                            <div  className="chat-img chat-list-g" style={{ backgroundImage: `url("${girl["gallery"][girl["main_img"]]}")` }}></div>
                        </div>
                        <div className={device == "mob" ?"t-center" :"" }>
                        <label htmlFor="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod optio quisquam sed, odio ad, labore explicabo quidem eligendi excepturi libero rem? Voluptatibus vel blanditiis praesentium est delectus magnam iusto!</label>
                        </div>
                    </div>
    </>
}