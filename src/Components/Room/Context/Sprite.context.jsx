import { createContext, useContext, useState } from "react";


export const SpriteContext = createContext();
export const useSprite = () => useContext(SpriteContext);




const SpriteProvider = ({ children }) => {

    const [sp_head, useHead] = useState("");
    const [sp_body, useBody] = useState("");

    return <SpriteContext.Provider value={{
        sp_head,
        useHead,
        sp_body,
        useBody,

    }}>{children}</SpriteContext.Provider>
}

export default SpriteProvider