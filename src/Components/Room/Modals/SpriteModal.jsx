import { useEffect, useState } from "react"
import top from "../../../Media/top.png"
import bot from "../../../Media/bot.png"
import { useSprite } from "../Context/Sprite.context";
import { useAllowed } from "../Context/SkinAllowed";
import { usePageContent } from "../../../Context/page_content";
import { useAnimation } from "../Context/AnimationContext";




export default function SpriteModal() {

    const { sprites } = usePageContent();
    const sprite = sprites[0];
    // const { getSprite, spriteID,setSpriteID } = useSprite();
    const { allowed, setAllowed } = useAllowed();
    const [pack, setPack] = useState([1, 1]);
    const { isAnimation , setIsAnimation } = useAnimation()

    let content___create_bot_btns


    let content___create_top_btns 

    if (isAnimation) {

        if(allowed != sprite.animation_allowed){
            setAllowed(sprite.animation_allowed)
            
        }


        content___create_bot_btns = () => {

        }


        content___create_top_btns = () => {

        }


    } else {
        content___create_bot_btns = () => {

        }


        content___create_top_btns = () => {

        }


    }


    const create_skins_btns = () => {
        const btns = [];

        const images = sprite.get_skins_preview();
        for (let i = 0; i < sprite.skins; i++) {
            btns.push(
                <button
                    onClick={() => {
                        sprite.skin = i
                        sprite.update_skin(i)
                        setIsAnimation(false)
                        setAllowed(sprite.allowed)
                    }}
                    style={{
                        backgroundSize: "50% 100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundImage: `url("${images[i]}")`
                    }}></button>
            )
        }

        return btns

    }

    const create_top_btns = () => {
        const btns = [];
        for (let i = 0; i < allowed[0]; i++) {
            btns.push(
                <>
                    <td style={{ width: "1%" }}></td>
                    <td >
                        <button
                            onClick={() => {
                                pack[0] = i + 1;
                                setPack(pack)
                                sprite.update_both(sprite.head, sprite.skin_dict.findIndex(dict => dict == pack.join(",").replace(",", "")))
                            }}
                            className="r-btn-off r-btn-md">{i + 1}</button>
                    </td>
                    <td style={{ width: "1%" }}></td>

                </>
            )
        }

        return btns
    }

    const create_bot_btns = () => {

        const btns = [];
        for (let i = 0; i < allowed[1]; i++) {
            btns.push(
                <>
                    <td style={{ width: "1%" }}></td>
                    <td >
                        <button
                            onClick={() => {
                                pack[1] = i + 1;
                                setPack(pack)
                                sprite.update_both(sprite.head, sprite.skin_dict.findIndex(dict => dict == pack.join(",").replace(",", "")))
                            }}
                            className="r-btn-off r-btn-md">{i + 1}</button>
                    </td>
                    <td style={{ width: "1%" }}></td>

                </>
            )
        }
        return btns
    }

    return <div className="r-b-modal r-spri-modal">
        <div className="r-skins-list">
            {create_skins_btns()}
        </div>
        <div className="sep">

        </div>
        <br />
        <div>

            <table>
                <tbody>
                    <tr className="r-clts-selectors">
                        <td><button className="r-btn-off"><img src={top} alt="" /></button></td>
                        {create_top_btns()}
                    </tr>
                    <tr className="r-clts-selectors">
                        <td><button className="r-btn-off"><img src={bot} alt="" /></button></td>
                        {create_bot_btns()}
                    </tr>
                </tbody>
            </table>
            {/* <div className="r-clts-selectors"><button className="r-btn-off"><img src={top} alt="" /></button>{create_top_btns()}</div>
            <div className="r-clts-selectors"><button className="r-btn-off"><img src={bot} alt="" /></button>{create_bot_btns()}</div> */}
        </div>
    </div>
}