/* eslint-disable */
import { createContext, useContext, useState } from "react";
import SpriteModal from "../Modals/SpriteModal";
import BackgroundModal from "../Modals/BackgroundModal";
import SexModal from "../Modals/SexModal";
import AnimationModal from "../Modals/AnimationModal";


export const RModalContext = createContext();
export const useRModal = () => useContext(RModalContext);


let active_modal = -1 ;
const modal_dict =[
    {
        id: 1,
        compo : <SpriteModal/>
    },
    {
        id: 2,
        compo : <BackgroundModal/>
    },
    {
        id: 3,
        compo : <SexModal/>
    },
    {
        id: 4,
        compo : <AnimationModal/>
    },
];



const RModalProvider = ({ children }) => {


    const [modal, useSetterModal] = useState("");

    const setModal = (modalID) => {
  
        document.getElementById("r-modal-ctn").style.opacity =0;
        if(modalID != active_modal){
            active_modal = modalID
            setTimeout(() => {
                useSetterModal(modal_dict.filter(md => md.id == modalID)[0].compo)
                document.getElementById("r-modal-ctn").style.opacity =1;
            }, 300);
        }else{
            active_modal = -1 
        }
        // useSetterModal(modal_dict.filter(md => md.id == modalID)[0].compo)
    }


    return <RModalContext.Provider value={{
        setModal
    }}>{children}<div id="r-modal-ctn">
    {modal}
    </div></RModalContext.Provider>
}

export default RModalProvider
/* eslint-enable */