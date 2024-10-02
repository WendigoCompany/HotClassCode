import { usePageContent } from "../../Context/page_content";
import Relocate from "../../Utils/relocate";


export default function Card_Mobile({ data , extra }) {
    
    const { lang }= usePageContent()
    const { gallery, main_img, title, prev , id } = data;

    return <div className="card-container br-sp2">
        <table>
            <tbody>

                <tr style={{ width: "100%" }}>
                    <td>
                        <img style={{ width: "95%", marginLeft: "2.5%" }} className="br-sp1   " src={gallery[main_img]} alt="" />
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
                                 Relocate(`/profile/${id}`)
                            // window.location.href =`profile/${id}` ;
                            // window.location.reload()
                        }}>{lang.more}</button>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
}