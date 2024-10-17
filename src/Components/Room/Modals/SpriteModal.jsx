import { lazy, useEffect } from "react"
import top from "../../../Media/top.png"
import bot from "../../../Media/bot.png"
import { useSprite } from "../Context/Sprite.context";

export default function SpriteModal() {

    const { getSprite } = useSprite();
    const sprite= getSprite(0);
    const allowed = sprite.allowed;
    
    let pack = (sessionStorage.getItem("cl-pack") || "1,1").split(',');  

    const create_top_btns = () => {
        const btns = [];
        for (let i = 0; i < allowed[0]; i++) {
            btns.push(
                <>
                    <td style={{ width: "1%" }}></td>
                    <td >
                        <button
                        onClick={()=>{
                            pack[0] = i +1;
                            
                            sprite.update_body(sprite.cl_dict.findIndex(d => d == pack.join().replace(",", "")))
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
                        onClick={()=>{
                            pack[1] = i +1;
                            
                            sprite.update_body(sprite.cl_dict.findIndex(d => d == pack.join().replace(",", "")))
                        }}
                        className="r-btn-off r-btn-md">{i + 1}</button>
                    </td>
                    <td style={{ width: "1%" }}></td>

                </>
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