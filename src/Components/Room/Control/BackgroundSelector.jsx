import { useBackground } from "../Context/Background";

export default function BackgroundSelector({img }) {

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
        <div
            style={{
                backgroundColor: "red",
                width: "100px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `url("${img}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer"
            }}
            onClick={() => {
                document.getElementById("input-file").click();
            }}
        >
            <input
                id="input-file"
                style={{ display: 'none' }}
                type="file"
                accept="image/*"
                onClick={(e) => e.stopPropagation()}
                onChange={handleImageUpload}
            />
        </div>
    </>


}