import { createContext, useContext, useState } from "react";
import db from "../../../DB/background.db.json"


export const AllowedContext = createContext();
export const useAllowed = () => useContext(AllowedContext);




const AllowedProvider = ({ children, allow=[0,0] }) => {
    const [allowed, setAllowed] = useState(allow);

    return <AllowedContext.Provider value={{allowed, setAllowed }}>{children}</AllowedContext.Provider>
}

export default AllowedProvider