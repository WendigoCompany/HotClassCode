import { createContext, useContext, useState } from "react";


export const SpriteContext = createContext();
export const useSprite = () => useContext(SpriteContext);



const SpriteProvider = ({ children, ...params }) => {

    const getSprite = (id) => params.sprites.filter(sp => sp.spid == id)[0]





    return <SpriteContext.Provider value={{
        ...params, getSprite
    }}>{children}</SpriteContext.Provider>
}

export default SpriteProvider