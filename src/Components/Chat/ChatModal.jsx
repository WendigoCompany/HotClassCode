export default function ChatModal({setter}) {
    return <>
        <div className="modal-bg">
            <div className="modal ch-modal">
                <div>
                    <button className="close-btn" onClick={()=>{setter(null)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"  fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                    </button>
                </div>

                <div className="ch-dial-box">

                </div>

                <div className="ch-list">
                    
                </div>
            </div>
        </div>
    </>
}