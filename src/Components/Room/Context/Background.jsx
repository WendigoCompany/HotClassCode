import { createContext, useContext, useState } from "react";
import db from "../../../DB/background.db.json"


export const BackgroundContext = createContext();
export const useBackground = () => useContext(BackgroundContext);




const BackgroundProvider = ({ children }) => {
    const [dbBackground, setDBBackground] = useState(db);
    const [actualBackground, setActualBackground] = useState(db[0]);

    /* eslint-enable */
    return <BackgroundContext.Provider value={{ dbBackground, setDBBackground, actualBackground, setActualBackground }}>{children}</BackgroundContext.Provider>
}

export default BackgroundProvider