import { useSprite } from "../Context/Sprite.context";
import { useBackground } from "../Context/Background";
import { useDevice } from "../../../Context/is_mobile";

export default function BackgroundModal() {

    // const [allowed, setAllowed] = useState([0, 0]);
    const { device } = useDevice();


    const { dbBackground, setActualBackground, setDBBackground } = useBackground();

    const handleImageUpload = () => {

        const input = document.createElement("input");
        input.type = 'file';
        input.accept = '.jpg, .jpeg, .png, .gif, .svg, .webp';
        input.style.display = "none";
        document.body.append(input)
        input.click()



        input.onchange = (e) => {
            const file = e.target.files[0];
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

    }





    const create_backg_btns = () => {
        const btns = [];
        for (let i = 0; i < dbBackground.length; i++) {
            btns.push(
                <td>
                    <button
                        onClick={() => {
                            setActualBackground(dbBackground[i])
                        }}
                        style={{
                            backgroundSize: "200% 100%",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundImage: `url("${dbBackground[i].url}")`
                        }}></button>
                </td>
            )
        }

        const style_searcher =
            (device == "mob")
                ? ({ fontSize: "1.2rem", marginLeft: "-6%", marginTop: "-2vh" })
                : ({ fontSize: ".8rem", marginLeft: "-1vw", marginTop: "-1vh" });

        btns.push(
            <button

                onMouseEnter={(e) => {

                    if (document.getElementById("svg-sel")) {
                        document.getElementById("svg-sel").style.fill = "black";
                    }

                }}

                onMouseLeave={(e) => {
                    if (document.getElementById("svg-sel")) {
                        document.getElementById("svg-sel").style.fill = "white";
                    }
                }}
                onClick={(e) => {
                    // setActualBackground(dbBackground[i])
                    handleImageUpload(e)
                    if (document.getElementById("svg-sel")) {
                        document.getElementById("svg-sel").style.fill = "white";
                    }
                }}
                style={{
                    border: "2px dashed red",
                }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id="svg-sel" fill="white"><path d="M240-280h480L597-444q-11-2-22.5-5t-22.5-7L450-320l-90-120-120 160Zm-40 160q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h200v80H200v560h560v-213l80 80v133q0 33-23.5 56.5T760-120H200Zm280-360Zm382 56L738-548q-21 14-45 21t-51 7q-74 0-126-52.5T464-700q0-75 52.5-127.5T644-880q75 0 127.5 52.5T824-700q0 27-8 52t-20 46l122 122-56 56ZM644-600q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z" /></svg></button>
        )

        return btns
    }



    // useEffect(() => {
    //     setTimeout(() => {
    //         document.getElementsByClassName("r-b-modal")[0].style.opacity = 1;
    //     }, 300);


    // }, [])
    return <div className="r-b-modal r-spri-modal">
        {/* <div className="r-skins-list">
            {create_backg_btns()}
        </div> */}
        <div className="r-skins-list">
            <table  >
                <tbody>
                    <tr>
                        {create_backg_btns()}
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="sep">


            {/* <div className="r-clts-selectors"><button className="r-btn-off"><img src={top} alt="" /></button>{create_top_btns()}</div>
            <div className="r-clts-selectors"><button className="r-btn-off"><img src={bot} alt="" /></button>{create_bot_btns()}</div> */}
        </div>
    </div>
}