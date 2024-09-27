import { useState } from "react";
import ChatBtn from "./ChatBtn";



export default function Chat() {
    const [modal, setModal] = useState(null);

    return <>
        <ChatBtn setter={setModal} />
        {modal}
    </>
}