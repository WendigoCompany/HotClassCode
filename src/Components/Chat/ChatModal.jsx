import { createContext, useContext, useState } from "react";
import { usePageContent } from "../../Context/page_content";
import AskChat from "./AskChat";
import ChatMsj from "./ChatMsj";
import { useGirl, useGirls } from "../../Pages/Profile";





// export const GirlContext = createContext();
// export const useGirl = () => useContext(GirlContext);



// const GirlProvider = ({ children, ...params}) => {
//     return <GirlContext.Provider value={{ ...params }}>{children}</GirlContext.Provider>
// }


export const MsjContext = createContext();
export const useMsj = () => useContext(MsjContext);



const MsjProvider = ({ children, ...params }) => {
    return <MsjContext.Provider value={{ ...params }}>{children}</MsjContext.Provider>
}






export default function ChatModal({ setter }) {

    const { girls } = useGirls();
    const { girl, setGirl } = useGirl();

    // const [girl, setGirl] = useState(null);

    
    
    
    const [msj, setMsj] = useState(-1);
    const HandleChat = (e, g) => {
        setGirl(g)
    }


    document.body.style["overflow-x"] = "hidden";
    document.body.style["overflow-y"] = "hidden";
    return <>
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
                        {/* <GirlProvider girl={girl} setGirl={setGirl}> */}
                            <AskChat />
                        {
                            girl 
                            ?     <ChatMsj />
                            : ""
                        }
                        {/* </GirlProvider> */}
                    </MsjProvider>
                </div>

                <div className="ch-list">

                    {/* <img  className="item chat-list-g" src="https://1drv.ms/i/s!Ak22M1uRqSwpgheuXzBmLnP3hhtA?embed=1" alt="" /> */}

                    {girls.map((g) => {
                        return <div onClick={(e) => {
                            HandleChat(e, g)
                        }} className="item chat-list-g" style={{ backgroundImage: `url("${g["gallery"][g["main_img"]]}")` }}></div>
                    })}

                </div>

            </div>
        </div>
    </>
}