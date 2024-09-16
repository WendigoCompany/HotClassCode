import { createContext, useContext, useState } from "react";

export const DeviceContext = createContext();
export const useDevice = () => useContext(DeviceContext);



const GetDevice =()=> (window.innerWidth <= 769) ?  ('mob') : ('desk')

const DeviceProvider = ({ children }) => {
    const [device, useDevice] = useState(GetDevice());


/* eslint-disable */    
    window.onresize=()=>{
        useDevice(GetDevice())
    }
/* eslint-enable */
    return <DeviceContext.Provider value={{device , useDevice}}>{children}</DeviceContext.Provider>
}

export default DeviceProvider