import { useEffect } from "react";
import { usePageContent } from "../../../Context/page_content"

import SpriteData from "../../../DB/room.sprites.db.json"
import { useDevice } from "../../../Context/is_mobile";




export default function Sprite({ spid = 0 }) {
    const { girl } = usePageContent()
    const { device } = useDevice();
    let skin = 0;
    let conj = 0;
    let head = 0;
    let actual_head = 0;




    const firstLoad = (comp, url, spcompo) => {
        const testImg = new Image();
        testImg.src = url;
        if (!loaded[spcompo]) {
            testImg.onload = () => {
                document.getElementById(comp).src = url;
                loaded[spcompo] = true;

                console.log(loaded);

                if (loaded["b"] && loaded["h"]) {
                    document.getElementById(`sp-body-${spid}`).style.opacity = 1;
                    document.getElementById(`sp-head-${spid}-0`).style.opacity = 1;
                }


            };
            testImg.onerror = () => {
                console.log("ERRI");
                setTimeout(() => {
                    firstLoad(comp, url, spcompo)
                }, 1000);
            };
        }

    }



    const update_head = (new_head_id) => {
        const newh = (actual_head == 0) ? (1) : (0);
        const oldh = (newh == 0) ? (1) : (0);
        head = new_head_id;
        const testImg = new Image();
        testImg.src = conj_data.h[head];
        testImg.onload = () => {
            actual_head = newh;
            document.getElementById(`sp-head-${spid}-${newh}`).src = conj_data.h[head];
            Object.keys(style_head_actual).map(st => document.getElementById(`sp-head-ctn-${spid}-${newh}`).style[st] = style_head_actual[st])
            document.getElementById(`sp-head-${spid}-${newh}`).onload=()=>{
                document.getElementById(`sp-head-${spid}-${newh}`).style.opacity = 1;
                setTimeout(() => {
                    Object.keys(style_head_hidden).map(st => document.getElementById(`sp-head-ctn-${spid}-${oldh}`).style[st] = style_head_hidden[st])
                    document.getElementById(`sp-head-${spid}-${oldh}`).style.opacity = 0;
                }, 300);
            }



        };
        testImg.onerror = () => {
            console.log("ERRI");
            setTimeout(() => {
                // firstLoad(comp, url, spcompo)
                update_head(new_head_id)
            }, 1000);
        };






    }


    const loaded = { b: false, h: false };


    // GET GILRS SPRITES 
    const sprite_data = SpriteData.filter(w => w.wid == girl.id)[0];
    // GET SPRITE SKINS
    const skin_data = sprite_data.skins.filter(s => s.sid == skin)[0];
    // GET SKIN CONJUNTO
    const conj_data = skin_data.conj.filter(c => c.conjid == conj)[0];
    // GET CONJUNTO STYLEs
    const conj_style = skin_data.conj_stl.filter(cjstl => cjstl.conjs.indexOf(conj) != -1)[0].st[device];



    const style_head_actual = { position: "absolute", bottom: conj_style.bot_h, width: conj_style.w_h, height: conj_style.h_h };
    const style_head_hidden = {position: "absolute" , bottom: "0px", left: "0px", width: "0px", height: "0px" };


    setTimeout(() => {
        update_head(1)
    }, 5000);

    useEffect(() => {
        firstLoad(`sp-body-${spid}`, conj_data.b, "b")
        firstLoad(`sp-head-${spid}-0`, conj_data.h[head], "h")

    }, [])
    return <div style={{ position: "fixed", bottom: conj_style.bot_ctn, left: conj_style.lf_ctn, textAlign: "center" }}>
        {/* HEAD 1 */}
        <div style={(actual_head != 0) ? (style_head_hidden) : (style_head_actual)} id={`sp-head-ctn-${spid}-0`}>
            <img className="w-100 h-100" id={`sp-head-${spid}-0`} style={{ opacity: 0, transition: "opacity .3s" }} alt="" /></div>
        {/* HEAD 2*/}
        <div style={(actual_head != 1) ? (style_head_hidden) : (style_head_actual)} id={`sp-head-ctn-${spid}-1`} >
            <img className="w-100 h-100" id={`sp-head-${spid}-1`} style={{ opacity: 0, transition: "opacity .3s" }} alt="" /></div>
        {/* BODY */}
        <div style={{ position: "relative", bottom: conj_style.bot_b, width: conj_style.w_b, height: conj_style.h_b }}>
            <img className="w-100 h-100" id={`sp-body-${spid}`} style={{ opacity: 0, transition: "opacity .3s" }} alt="" /></div>
    </div>
}


