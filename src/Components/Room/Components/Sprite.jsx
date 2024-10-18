import { useEffect } from "react";
import { usePageContent } from "../../../Context/page_content"

import { useDevice } from "../../../Context/is_mobile";


// /* eslint-disable */
// class spect {
//     constructor(sp.spid) {
//         this.skin = 0;
//         this.conj = 0;
//         this.head = 0;
//         this.body = 0;
//         this.actual_head = 0;
//         this.actual_body = 0;
//         this.loaded = { b: false, h: false }
//         // GET GILRS SPRITES 
//         this.sprite_data = undefined;
//         // GET SPRITE SKINS
//         this.skin_data = undefined;
//         // GET SKIN CONJUNTO
//         this.conj_data = undefined;
//         // GET CONJUNTO STYLEs
//         this.conj_style = undefined;
//         this.style_head_actual = undefined;
//         this.style_head_hidden = undefined;
//         this.style_body_actual = undefined;
//         this.style_body_hidden = undefined;
//         this.sp.spid = sp.spid;
//     }

//     road_spiner() {

//     }

//     pre_load(gID, device) {
//         this.sprite_data = SpriteData.filter(w => w.wid == gID)[0];
//         this.skin_data = this.sprite_data.skins.filter(s => s.sid == this.skin)[0];
//         this.conj_data = this.skin_data.conj.filter(c => c.conjid == this.conj)[0];
//         this.conj_style = this.skin_data.conj_stl.filter(cjstl => cjstl.conjs.indexOf(this.conj) != -1)[0].st[device];
//         this.style_head_actual = { position: "absolute", bottom: this.conj_style.bot_h, width: this.conj_style.w_h, height: this.conj_style.h_h };
//         this.style_head_hidden = { position: "absolute", bottom: "0px", left: "0px", width: "0px", height: "0px" };
//         this.style_body_actual = { position: "absolute", bottom: this.conj_style.bot_b, width: this.conj_style.w_b, height: this.conj_style.h_b };
//         this.style_body_hidden = { position: "absolute", bottom: "0px", left: "0px", width: "0px", height: "0px" };

//     }

//     update_skin(new_skin_id) {
//         this.skin = new_skin_id;
//         this.pre_load()
//     }

//     update_body(new_body_id) {
//         const newb = (this.actual_body == 0) ? (1) : (0);
//         const oldb = (newb == 0) ? (1) : (0);
//         this.body = new_body_id;
//         const testImg = new Image();
//         testImg.src = this.conj_data.b[this.body];

//         testImg.onload = () => {
//             this.swap_body(newb, oldb)


//         };
//         testImg.onerror = () => {
//             console.log("ERRI");
//             setTimeout(() => {
//                 this.update_body(new_body_id)
//             }, 1000);
//         };

//     }

//     update_head(new_head_id) {
//         const newh = (this.actual_head == 0) ? (1) : (0);
//         const oldh = (newh == 0) ? (1) : (0);
//         this.head = new_head_id;
//         const testImg = new Image();
//         testImg.src = this.conj_data.h[this.head];
//         testImg.onload = () => {
//             this.swap_head(newh, oldh)


//         };
//         testImg.onerror = () => {
//             console.log("ERRI");
//             setTimeout(() => {
//                 // firstLoad(comp, url, spcompo)
//                 this.update_head(new_head_id)
//             }, 1000);
//         };

//     }
//     update_both(new_head_id, new_body_id) {
//         const newh = (this.actual_head == 0) ? (1) : (0);
//         const oldh = (newh == 0) ? (1) : (0);
//         this.head = new_head_id;

//         const newb = (this.actual_body == 0) ? (1) : (0);
//         const oldb = (newb == 0) ? (1) : (0);
//         this.body = new_body_id;

//         this.loaded.b = false;
//         this.loaded.h = false;


//         const testImg = new Image();
//         testImg.src = this.conj_data.h[this.head];


//         testImg.onload = () => {
//             testImg.src = this.conj_data.b[this.body];
//             testImg.onload = () => {
//                 this.swap_head(newh, oldh)
//                 this.swap_body(newb, oldb)
//             }


//         };

//         testImg.onerror = () => {
//             console.log("ERRI");
//             setTimeout(() => {
//                 this.update_both(new_head_id, new_body_id)
//             }, 1000);
//         };
//     }
//     swap_head(newh, oldh) {
//         this.actual_head = newh;
//         document.getElementById(`sp-head-${this.sp.spid}-${newh}`).src = this.conj_data.h[this.head];
//         Object.keys(this.style_head_actual).map(st => document.getElementById(`sp-head-ctn-${this.sp.spid}-${newh}`).style[st] = this.style_head_actual[st])
//         document.getElementById(`sp-head-${this.sp.spid}-${newh}`).onload = () => {
//             document.getElementById(`sp-head-${this.sp.spid}-${newh}`).style.opacity = 1;
//             setTimeout(() => {
//                 document.getElementById(`sp-head-${this.sp.spid}-${oldh}`).style.opacity = 0;
//                 Object.keys(this.style_head_hidden).map(st => document.getElementById(`sp-head-ctn-${this.sp.spid}-${oldh}`).style[st] = this.style_head_hidden[st])
//             }, 0);
//         }

//     }
//     swap_body(newb, oldb) {
//         this.actual_body = newb;
//         document.getElementById(`sp-body-${this.sp.spid}-${newb}`).src = this.conj_data.b[this.body];
//         Object.keys(this.style_body_actual).map(st => document.getElementById(`sp-body-ctn-${this.sp.spid}-${newb}`).style[st] = this.style_body_actual[st])

//         document.getElementById(`sp-body-${this.sp.spid}-${newb}`).onload = () => {
//             document.getElementById(`sp-body-${this.sp.spid}-${newb}`).style.opacity = 1;
//             setTimeout(() => {
//                 document.getElementById(`sp-body-${this.sp.spid}-${oldb}`).style.opacity = 0;
//                 Object.keys(this.style_body_hidden).map(st => document.getElementById(`sp-body-ctn-${this.sp.spid}-${oldb}`).style[st] = this.style_body_hidden[st])

//             }, 0);
//         }

//     }

// }
// /* eslint-enable */

export default function Sprite({ sp }) {
    const { girl } = usePageContent()
    const { device } = useDevice();



    // const sp = new spect(sp.spid);
    sp.set_girl(girl.id)
    sp.set_device(device)
    sp.pre_load()


    // let skin = 0;
    // let conj = 0;
    // let head = 0;
    // let body = 0;
    // let actual_head = 0;
    // let actual_body = 0;
    // const loaded = { b: false, h: false };








    // const firstLoad = (comp, url, spcompo) => {
    //     const testImg = new Image();
    //     testImg.src = url;
    //     if (!loaded[spcompo]) {
    //         testImg.onload = () => {
    //             document.getElementById(comp).src = url;
    //             loaded[spcompo] = true;

    //             console.log(loaded);

    //             if (loaded["b"] && loaded["h"]) {
    //                 document.getElementById(`sp-body-${sp.spid}-0`).style.opacity = 1;
    //                 document.getElementById(`sp-head-${sp.spid}-0`).style.opacity = 1;
    //             }


    //         };
    //         testImg.onerror = () => {
    //             console.log("ERRI");
    //             setTimeout(() => {
    //                 firstLoad(comp, url, spcompo)
    //             }, 1000);
    //         };
    //     }

    // }



    // const update_body = (new_body_id) => {
    //     const newb = (actual_body == 0) ? (1) : (0);
    //     const oldb = (newb == 0) ? (1) : (0);
    //     body = new_body_id;
    //     const testImg = new Image();
    //     testImg.src = conj_data.b[body];

    //     testImg.onload = () => {
    //         swap_body(newb, oldb)


    //     };
    //     testImg.onerror = () => {
    //         console.log("ERRI");
    //         setTimeout(() => {
    //             update_body(new_body_id)
    //         }, 1000);
    //     };


    // }

    // const swap_head = (newh, oldh) => {
    //     actual_head = newh;
    //     document.getElementById(`sp-head-${sp.spid}-${newh}`).src = conj_data.h[head];
    //     Object.keys(style_head_actual).map(st => document.getElementById(`sp-head-ctn-${sp.spid}-${newh}`).style[st] = style_head_actual[st])
    //     document.getElementById(`sp-head-${sp.spid}-${newh}`).onload = () => {
    //         document.getElementById(`sp-head-${sp.spid}-${newh}`).style.opacity = 1;
    //         setTimeout(() => {
    //             document.getElementById(`sp-head-${sp.spid}-${oldh}`).style.opacity = 0;
    //             Object.keys(style_head_hidden).map(st => document.getElementById(`sp-head-ctn-${sp.spid}-${oldh}`).style[st] = style_head_hidden[st])
    //         }, 300);
    //     }


    // }


    // const swap_body = (newb, oldb) => {
    //     actual_body = newb;
    //     document.getElementById(`sp-body-${sp.spid}-${newb}`).src = conj_data.b[body];
    //     Object.keys(style_body_actual).map(st => document.getElementById(`sp-body-ctn-${sp.spid}-${newb}`).style[st] = style_body_actual[st])

    //     document.getElementById(`sp-body-${sp.spid}-${newb}`).onload = () => {
    //         document.getElementById(`sp-body-${sp.spid}-${newb}`).style.opacity = 1;
    //         setTimeout(() => {
    //             document.getElementById(`sp-body-${sp.spid}-${oldb}`).style.opacity = 0;
    //             Object.keys(style_body_hidden).map(st => document.getElementById(`sp-body-ctn-${sp.spid}-${oldb}`).style[st] = style_body_hidden[st])

    //         }, 300);
    //     }


    // }



    // const update_both = (new_head_id, new_body_id) => {
    //     const newh = (actual_head == 0) ? (1) : (0);
    //     const oldh = (newh == 0) ? (1) : (0);
    //     head = new_head_id;

    //     const newb = (actual_body == 0) ? (1) : (0);
    //     const oldb = (newb == 0) ? (1) : (0);
    //     body = new_body_id;

    //     loaded.b = false;
    //     loaded.h = false;


    //     const testImg = new Image();
    //     testImg.src = conj_data.h[head];


    //     testImg.onload = () => {
    //         testImg.src = conj_data.b[body];
    //         testImg.onload = () => {
    //             swap_head(newh, oldh)
    //             swap_body(newb, oldb)
    //         }


    //     };

    //     testImg.onerror = () => {
    //         console.log("ERRI");
    //         setTimeout(() => {
    //             update_both(new_head_id, new_body_id)
    //         }, 1000);
    //     };

    // }

    // const update_head = (new_head_id) => {
    //     const newh = (actual_head == 0) ? (1) : (0);
    //     const oldh = (newh == 0) ? (1) : (0);
    //     head = new_head_id;
    //     const testImg = new Image();
    //     testImg.src = conj_data.h[head];
    //     testImg.onload = () => {
    //         swap_head(newh, oldh)


    //     };
    //     testImg.onerror = () => {
    //         console.log("ERRI");
    //         setTimeout(() => {
    //             // firstLoad(comp, url, spcompo)
    //             update_head(new_head_id)
    //         }, 1000);
    //     };






    // }




    // // GET GILRS SPRITES 
    // let sprite_data = SpriteData.filter(w => w.wid == girl.id)[0];
    // // GET SPRITE SKINS
    // let skin_data = sprite_data.skins.filter(s => s.sid == skin)[0];
    // // GET SKIN CONJUNTO
    // let conj_data = skin_data.conj.filter(c => c.conjid == conj)[0];
    // // GET CONJUNTO STYLEs
    // let conj_style = skin_data.conj_stl.filter(cjstl => cjstl.conjs.indexOf(conj) != -1)[0].st[device];



    // const style_head_actual = { position: "absolute", bottom: conj_style.bot_h, width: conj_style.w_h, height: conj_style.h_h };
    // const style_head_hidden = { position: "absolute", bottom: "0px", left: "0px", width: "0px", height: "0px" };


    // const style_body_actual = { position: "absolute", bottom: conj_style.bot_b, width: conj_style.w_b, height: conj_style.h_b };
    // const style_body_hidden = { position: "absolute", bottom: "0px", left: "0px", width: "0px", height: "0px" };

    useEffect(() => {
        // update_both(head, body)
        sp.update_both(sp.head, sp.body)
    }, [])


    

    return <div style={{ position: "fixed", bottom: sp.conj_style.bot_ctn, left: sp.conj_style.lf_ctn, textAlign: "center" }}>
        {/* HEAD 1 */}
        <div style={(sp.actual_head != 0) ? (sp.style_head_hidden) : (sp.style_head_actual)} id={`sp-head-ctn-${sp.spid}-0`}>
            <img className="w-100 h-100" id={`sp-head-${sp.spid}-0`} style={{ opacity: 0, transition: "opacity .3s" }} alt="" /></div>
        {/* HEAD 2*/}
        <div style={(sp.actual_head != 1) ? (sp.style_head_hidden) : (sp.style_head_actual)} id={`sp-head-ctn-${sp.spid}-1`} >
            <img className="w-100 h-100" id={`sp-head-${sp.spid}-1`} style={{ opacity: 0, transition: "opacity .3s" }} alt="" /></div>



        {/* BODY */}
        <div id={`sp-body-ctn-${sp.spid}-0`} style={(sp.actual_body != 0) ? (sp.style_body_hidden) : (sp.style_body_actual)} >
            <img className="w-100 h-100" id={`sp-body-${sp.spid}-0`} style={{ opacity: 0, transition: "opacity .3s" }} alt="" /></div>


        <div id={`sp-body-ctn-${sp.spid}-1`} style={(sp.actual_body != 1) ? (sp.style_body_hidden) : (sp.style_body_actual)}>
            <img className="w-100 h-100" id={`sp-body-${sp.spid}-1`} style={{ opacity: 0, transition: "opacity .3s" }} alt="" /></div>
    </div>
}


