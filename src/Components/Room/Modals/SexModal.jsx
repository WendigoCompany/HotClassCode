import { useSprite } from "../Context/Sprite.context";
import { useBackground } from "../Context/Background";
import { useDevice } from "../../../Context/is_mobile";
import { usePageContent } from "../../../Context/page_content";



export default function SexModal() {

    // const [allowed, setAllowed] = useState([0, 0]);
    // const { device } = useDevice();

    // const {sprites} = useSprite();
    const { sprites } = usePageContent();
    const sprite = sprites[0];

    const btns_img =  sprites[0].poses_btn;

    // const { dbBackground, setActualBackground, setDBBackground } = useBackground();




    const create_sex_btns = () => {
        const btns = [];
        for (let i = 0; i < btns_img.length; i++) {
            btns.push(
                <td>
                    <button
                        onClick={() => {
                            
                        }}
                        style={{
                            backgroundSize: "100% 100%",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundImage: `url("${btns_img[i]}")`
                        }}></button>
                </td>
            )
        }


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
                        {create_sex_btns()}
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