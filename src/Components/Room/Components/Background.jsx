import ReloadImage from "../../../Utils/reload_image";
import { useBackground } from "../Context/Background"

export default function R_BackgroundCompo({ }) {
    const { actualBackground , dbBackground } = useBackground();
    console.log(dbBackground);
    
    return <>
        <div
            className="r-background"
        >
            <img
                src={actualBackground.url}
                onError={(e) => { ReloadImage(e, actualBackground.url) }}
                 alt="" />
        </div>
    </>
}

