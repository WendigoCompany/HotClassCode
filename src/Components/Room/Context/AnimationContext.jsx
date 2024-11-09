import { createContext, useContext, useState } from "react";


export const AnimationContext = createContext();
export const useAnimation = () => useContext(AnimationContext);




const AnimationProvider = ({ children }) => {
    const [isAnimation, setIsAnimation] = useState(false);
    const [animation, setAnimation] = useState(null);
    
    return <AnimationContext.Provider value={{isAnimation, setIsAnimation, animation, setAnimation  }}>{children}</AnimationContext.Provider>
}

export default AnimationProvider