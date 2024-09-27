import ChatModal from "./ChatModal"

export default function ChatBtn({setter}){
    return <>
    <div className=" chat-btn">
        <button onClick={()=>{setter(<ChatModal setter={setter}/>)}} className="lang-selector">CHAT</button>
    </div>
    </>
}