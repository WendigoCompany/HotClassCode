import { useAnimation } from "../Context/AnimationContext";
import { useRModal } from "../Context/RoomModal";

export default function SexControl() {
    const { setModal } = useRModal();
    const { setIsAnimation } = useAnimation();

    return <div>
        <button onClick={() => {
            setModal(3)
        }} className="r-sex-clt r-backgroundCTL-btn">
        </button>
    </div>
}