import { createContext, useContext, useState } from "react";
import db from "../../../DB/background.db.json"
import Sprite from "../Components/Sprite";


export const ScreenContext = createContext();
export const useScreen = () => useContext(ScreenContext);

const load_sprite = (sprites) => {    
    return sprites.map(sp => <Sprite sp={sp} />)

}

const load_content = (content, params) => {
    
    switch (content) {
        case "sp":
           return load_sprite(params.sprites)
        case "an":

            break;
    }
}

const ScreenProvider = ({ children, ...params }) => {
    
    const [visualContent, setVSContent] = useState({id : "sp", content : load_content('sp',{sprites: params.sprites})});

    return <ScreenContext.Provider value={{visualContent: visualContent.id, setVSContent}}>{children}{visualContent.content}</ScreenContext.Provider>
}

export default ScreenProvider