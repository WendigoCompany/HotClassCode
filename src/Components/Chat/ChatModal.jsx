import { createContext, useContext, useState } from "react";
import { usePageContent } from "../../Context/page_content";
import AskChat from "./AskChat";
import ChatMsj from "./ChatMsj";
// import { useGirl } from "../../Pages/Profile";
import { useGirls } from "../../Context/girls_context";
import GirlProvider, { useGirl } from "../../Context/girl_context";






export const MsjContext = createContext();
export const useMsj = () => useContext(MsjContext);



const MsjProvider = ({ children, ...params }) => {
    return <MsjContext.Provider value={{ ...params }}>{children}</MsjContext.Provider>
}






export default function ChatModal({ setter }) {
    const { girls } = usePageContent()

    // const { girls } = useGirls();
    // const { girl, setGirl } = useGirl();

    const [girl, setGirl] = useState(null);



    const [msj, setMsj] = useState(-1);
    const HandleChat = (e, g) => {
        setGirl(g)
    }


    document.body.style["overflow-x"] = "hidden";
    document.body.style["overflow-y"] = "hidden";
    return <>
        <GirlProvider girl={girl} setGirl={setGirl}>
            <div className="modal-bg">
                <div className="modal ch-modal">
                    <div>
                        <button className="close-btn" onClick={() => {
                            setter(null)
                            setGirl(null)
                            document.body.style["overflow-x"] = "auto";
                            document.body.style["overflow-y"] = "auto";


                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                        </button>
                    </div>

                    <div className="ch-dial-box">
                        <MsjProvider msj={msj} setMsj={setMsj}>
                            <AskChat />
                            {
                                girl
                                    ? <ChatMsj />
                                    : ""
                            }
                        </MsjProvider>
                    </div>

                    <div className="ch-list">


                        {girls.map((g) => {
                            return <div onClick={(e) => {
                                HandleChat(e, g)
                            }} className="item chat-list-g" style={{ backgroundImage: `url("${g["gallery"][g["main_img"]]}")` }}></div>
                        })}

                    </div>

                </div>
            </div>
        </GirlProvider>
    </>
}