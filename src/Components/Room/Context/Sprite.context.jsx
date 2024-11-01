import { createContext, useContext, useState } from "react";


export const SpriteContext = createContext();
export const useSprite = () => useContext(SpriteContext);



const SpriteProvider = ({ children, ...params }) => {
    const [spriteID, setSpriteID] = useState({skin : 0, clt : 0});
    const getSprite = (id) => {
        const sprite_data = params.sprites.filter(sp => sp.spid == id)[0];
        return sprite_data
    }


    const getAnimations = (id) => {
        console.log(params.sprites[0].poses);
        
    }


    return <SpriteContext.Provider value={{
        ...params, getSprite, spriteID,setSpriteID ,getAnimations
    }}>{children}</SpriteContext.Provider>
}

export default SpriteProvider