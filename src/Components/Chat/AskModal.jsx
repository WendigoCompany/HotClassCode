export default function AskModal({ setter }) {
    return <>
        <div className="ask-modal">
            <div>
                <button className="close-btn" onClick={() => { setter(null) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </button>
                <div className="ask-q">
                    <button className="close-btn">asdas</button>


                </div>
            </div>
        </div>
    </>
}