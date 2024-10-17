import { useRModal } from "../Context/RoomModal";
import DestroyModal from "../destroyModal";

export default function SpriteControl({sprites}){

    const {setModal} = useRModal();
    return <div>
        <button
        onClick={()=>{
            setModal(1)
            // let active = ;
            // sessionStorage.setItem("active-modal" ,1 )
            // setModal(1)
        }}
        className="r-spr-clt r-backgroundCTL-btn"
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="rm-svg"  fill="black"><path d="m240-522-40 22q-14 8-30 4t-24-18L66-654q-8-14-4-30t18-24l230-132h70q9 0 14.5 5.5T400-820v20q0 33 23.5 56.5T480-720q33 0 56.5-23.5T560-800v-20q0-9 5.5-14.5T580-840h70l230 132q14 8 18 24t-4 30l-80 140q-8 14-23.5 17.5T760-501l-40-20v361q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160v-362Zm80-134v456h320v-456l124 68 42-70-172-100q-15 51-56.5 84.5T480-640q-56 0-97.5-33.5T326-758L154-658l42 70 124-68Zm160 177Z"/></svg></button>
    </div>
}