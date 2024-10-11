import { useBackground } from "../Context/Background";
import BackgroundOption from "./BackgroundOption";

export default function R_BackgroundControl() {
    const { setActualBackground, dbBackground, setDBBackground, actualBackground } = useBackground();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setActualBackground({ url: reader.result });
            dbBackground.push({ url: reader.result, name: "UserUp", id: dbBackground[dbBackground.length - 1].id + 1 })
            setDBBackground(dbBackground)
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }
    
    return <>
     <BackgroundOption img={actualBackground.url} handle={handleImageUpload}/>
    </>
}


