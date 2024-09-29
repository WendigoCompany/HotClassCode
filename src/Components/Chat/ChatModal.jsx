import { usePageContent } from "../../Context/page_content";

export default function ChatModal({ setter }) {

    const { girls } = usePageContent();

    const HandleChat=(e, girl)=>{
        console.log(girl);
    }
    return <>
        <div className="modal-bg">
            <div className="modal ch-modal">
                <div>
                    <button className="close-btn" onClick={() => { setter(null) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                    </button>
                </div>

                <div className="ch-dial-box">

                </div>

                <div className="ch-list">

                    {/* <img  className="item chat-list-g" src="https://1drv.ms/i/s!Ak22M1uRqSwpgheuXzBmLnP3hhtA?embed=1" alt="" /> */}

                    {girls.map((g) => {
                        return <div onClick={(e)=>{
                            HandleChat(e, g)
                        }} className="item chat-list-g" style={{ backgroundImage: `url("${g["gallery"][g["main_img"]]}")` }}></div>
                    })}

                </div>

            </div>
        </div>
    </>
}