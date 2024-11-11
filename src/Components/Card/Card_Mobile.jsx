import { useLang } from "../../Context/lang_context";
import { usePageContent } from "../../Context/page_content";
import ReloadImage from "../../Utils/reload_image";
import Relocate from "../../Utils/relocate";


export default function Card_Mobile({ data , extra }) {
    
    const { pc }= usePageContent()
    const { gallery, main_img, title, prev , id } = data;
    const langPROV = useLang();
    return <div className="card-container br-sp2">
        <table>
            <tbody>

                <tr style={{ width: "100%" }}>
                    <td>
                        <img 
                        onError={(e) => { ReloadImage(e, gallery[main_img]) }} 
                        style={{ width: "95%", marginLeft: "2.5%" }} className="br-sp1   " src={gallery[main_img]} alt="" />
                    </td>
                </tr>
                <tr style={{ width: "100%" }}>

                    <td>
                        <h3 className="btxt btxt-t ta-c">{title}</h3>
                    </td>
                </tr>
                <tr style={{ width: "100%" }}>
                    <td>
                        <p className="btxt btxt-p ta-c">{prev}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="ta-c">
                        <button onClick={()=>{
                                 Relocate(`/${langPROV.lang}/profile/${id}`)
                            // window.location.href =`profile/${id}` ;
                            // window.location.reload()
                        }}>{pc.more}</button>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
}