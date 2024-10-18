import SpriteData from "../../../DB/room.sprites.db.json"
import spinnerGIF from "../../../Media/spinner-8565_256.gif"

/* eslint-disable */
export class SpriteObject {
    constructor(spid) {
        this.skins;
        this.girlID;
        this.skin = 0;
        this.conj = 0;
        this.head = 0;
        this.body = 0;
        this.actual_head = 0;
        this.actual_body = 0;
        this.loaded = { b: false, h: false }
        // GET GILRS SPRITES 
        this.sprite_data = undefined;
        // GET SPRITE SKINS
        this.skin_data = undefined;
        // GET SKIN CONJUNTO
        this.conj_data = undefined;
        // GET CONJUNTO STYLEs
        this.conj_style = undefined;
        this.style_head_actual = undefined;
        this.style_head_hidden = undefined;
        this.style_body_actual = undefined;
        this.style_body_hidden = undefined;
        this.spid = spid;
        this.allowed = 0;
        this.device;
        this.cl_dict;
    }

    set_girl(girlID) {
        this.girlID = girlID;
    }

    set_device(device) {
        this.device = device;
    }

    kill_spinner() {
        try {
            document.getElementById("spinner-img").remove()
        } catch (error) {

        }
    }

    roll_spiner() {
        // document.getElementById("spinner").append()
        const spinner = document.createElement("img");
        spinner.id = "spinner-img";
        spinner.src = spinnerGIF;
        spinner.className = "w-100 h-100";
        document.getElementById("spinner").append(spinner)
    }

    pre_load() {
        this.sprite_data = SpriteData.filter(w => w.wid == this.girlID)[0];
        this.skins = this.sprite_data.skins.length;
        this.skin_data = this.sprite_data.skins.filter(s => s.sid == this.skin)[0];
        this.conj_data = this.skin_data.conj.filter(c => c.conjid == this.conj)[0];
        this.conj_style = this.skin_data.conj_stl.filter(cjstl => cjstl.conjs.indexOf(this.conj) != -1)[0].st[this.device];
        this.style_head_actual = { position: "absolute", bottom: this.conj_style.bot_h, width: this.conj_style.w_h, height: this.conj_style.h_h };
        this.style_head_hidden = { position: "absolute", bottom: "0px", left: "0px", width: "0px", height: "0px" };
        this.style_body_actual = { position: "absolute", bottom: this.conj_style.bot_b, width: this.conj_style.w_b, height: this.conj_style.h_b };
        this.style_body_hidden = { position: "absolute", bottom: "0px", left: "0px", width: "0px", height: "0px" };
        this.allowed = this.skin_data.skin_allowed;
        this.cl_dict = this.skin_data.skin_dict;
        
        try {
            setTimeout(() => {
                               
        document.getElementById("r-sp-ctn").style.bottom = this.conj_style.bot_ctn;
        document.getElementById("r-sp-ctn").style.left = this.conj_style.lf_ctn;
            }, 100);
        } catch (error) {
            
        }

        
    }

    get_skins_preview() {
        return this.sprite_data.skins.map(ski => ski.conj[0].b[0])

    }

    update_skin(new_skin_id) {
        this.kill_spinner()
        this.roll_spiner()
        this.conj = 0;
        this.head = 0;
        this.body = 0;
        this.skin = new_skin_id;
        this.update_both(0, 0)
        this.pre_load()

    }

    update_body(new_body_id) {
        this.kill_spinner()
        this.roll_spiner()
        const newb = (this.actual_body == 0) ? (1) : (0);
        const oldb = (newb == 0) ? (1) : (0);
        this.body = new_body_id;
        const testImg = new Image();
        testImg.src = this.conj_data.b[this.body];

        testImg.onload = () => {
            this.swap_body(newb, oldb)
            this.kill_spinner()


        };
        testImg.onerror = () => {
            console.log("ERRI");
            setTimeout(() => {
                this.update_body(new_body_id)
            }, 1000);
        };

    }

    update_head(new_head_id) {
        this.kill_spinner()
        this.roll_spiner()
        const newh = (this.actual_head == 0) ? (1) : (0);
        const oldh = (newh == 0) ? (1) : (0);
        this.head = new_head_id;
        const testImg = new Image();
        testImg.src = this.conj_data.h[this.head];
        testImg.onload = () => {
            this.swap_head(newh, oldh)
            this.kill_spinner()

        };
        testImg.onerror = () => {
            console.log("ERRI");
            setTimeout(() => {
                // firstLoad(comp, url, spcompo)
                this.update_head(new_head_id)
            }, 1000);
        };

    }
    update_both(new_head_id, new_body_id) {
        this.kill_spinner()
        this.roll_spiner()


        document.getElementById(`sp-head-${this.spid}-${0}`).style.opacity = 0;
        document.getElementById(`sp-head-${this.spid}-${1}`).style.opacity = 0;
        document.getElementById(`sp-body-${this.spid}-${0}`).style.opacity = 0;
        document.getElementById(`sp-body-${this.spid}-${1}`).style.opacity = 0;
        
        const newh = (this.actual_head == 0) ? (1) : (0);
        const oldh = (newh == 0) ? (1) : (0);
        this.head = new_head_id;

        const newb = (this.actual_body == 0) ? (1) : (0);
        const oldb = (newb == 0) ? (1) : (0);
        this.body = new_body_id;

        this.loaded.b = false;
        this.loaded.h = false;


        const testImg = new Image();
        testImg.src = this.conj_data.h[this.head];


        testImg.onload = () => {
            testImg.src = this.conj_data.b[this.body];
            testImg.onload = () => {
                this.swap_head(newh, oldh)
                this.swap_body(newb, oldb)
                this.kill_spinner()
            }


        };

        testImg.onerror = () => {
            console.log("ERRI");
            setTimeout(() => {
                this.update_both(new_head_id, new_body_id)
            }, 1000);
        };
    }
    swap_head(newh, oldh) {
        this.actual_head = newh;
        document.getElementById(`sp-head-${this.spid}-${newh}`).src = this.conj_data.h[this.head];
        Object.keys(this.style_head_actual).map(st => document.getElementById(`sp-head-ctn-${this.spid}-${newh}`).style[st] = this.style_head_actual[st])
        document.getElementById(`sp-head-${this.spid}-${newh}`).onload = () => {
            document.getElementById(`sp-head-${this.spid}-${newh}`).style.opacity = 1;
            setTimeout(() => {
                document.getElementById(`sp-head-${this.spid}-${oldh}`).style.opacity = 0;
                Object.keys(this.style_head_hidden).map(st => document.getElementById(`sp-head-ctn-${this.spid}-${oldh}`).style[st] = this.style_head_hidden[st])
            }, 0);
        }

    }
    swap_body(newb, oldb) {
        this.actual_body = newb;
        document.getElementById(`sp-body-${this.spid}-${newb}`).src = this.conj_data.b[this.body];
        Object.keys(this.style_body_actual).map(st => document.getElementById(`sp-body-ctn-${this.spid}-${newb}`).style[st] = this.style_body_actual[st])

        document.getElementById(`sp-body-${this.spid}-${newb}`).onload = () => {
            document.getElementById(`sp-body-${this.spid}-${newb}`).style.opacity = 1;
            setTimeout(() => {
                document.getElementById(`sp-body-${this.spid}-${oldb}`).style.opacity = 0;
                Object.keys(this.style_body_hidden).map(st => document.getElementById(`sp-body-ctn-${this.spid}-${oldb}`).style[st] = this.style_body_hidden[st])

            }, 0);
        }

    }

}
/* eslint-enable */