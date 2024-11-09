import { usePageContent } from "../../../Context/page_content";
import var_img from "../../../Media/var.png";


export default function AnimationModal() {
    const { sprites } = usePageContent();
    const sprite = sprites[0];

    const create_var_btns= () => {
        const vars = sprite.animation_get_var();
        
        const btns = [];
        for (let i = 0; i < vars.length; i++) {
            btns.push(
                <>
                    <td style={{ width: "1%" }}></td>
                    <td >
                        <button
                            onClick={() => {
                                sprite.animation_var = i;
                                sprite.animate()
                            }}
                            className="r-btn-off r-btn-md">{i + 1}</button>
                    </td>
                    <td style={{ width: "1%" }}></td>

                </>
            )
        }
        return btns
    }

    const create_speed_btns= () => {

        
        const btns = [];
        for (let i = 0; i < sprite.animation_speeds.length; i++) {
            btns.push(
                <>
                    <td style={{ width: "1%" }}></td>
                    <td >
                        <button
                            onClick={() => {
                                sprite.animation_speed = i;
                                sprite.stop_animation()
                                sprite.start_animation()
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
        <div>

            <table>
                <tbody>
                    <tr className="r-clts-selectors">
                        <td><button className="r-btn-off"><img src={var_img} alt="" /></button></td>
                      {create_var_btns()}
                    </tr>
                    <tr className="r-clts-selectors">
                        <td>
                            <button className="r-btn-off">


                                <svg xmlns="http://www.w3.org/2000/svg"

                                    height="24px" viewBox="0 -960 960 960" style={{width: "100%"}} fill="black">
                                    <path d="M100-240v-480l360 240-360 240Zm400 0v-480l360 240-360 240ZM180-480Zm400 0Zm-400 90 136-90-136-90v180Zm400 0 136-90-136-90v180Z" /></svg></button>
                        </td>
                    {create_speed_btns()}
                    </tr>
                </tbody>
            </table>
            {/* <div className="r-clts-selectors"><button className="r-btn-off"><img src={top} alt="" /></button>{create_top_btns()}</div>
            <div className="r-clts-selectors"><button className="r-btn-off"><img src={bot} alt="" /></button>{create_bot_btns()}</div> */}
        </div>
    </div>



}


