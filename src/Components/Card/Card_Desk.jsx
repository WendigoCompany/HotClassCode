
import { usePageContent } from "../../Context/page_content";
import { config } from "../../Router/Routes";





export default function Card_Desk({ data , extra}) {


  const { lang }= usePageContent()
    const { gallery,main_img , title, prev , id } = data;
    let url = '';
    if(process.env.REACT_APP_STADE == "gh"){
        url += "#" +config.gh_repo 
    }

    return <div className="card-container br-sp2">
        <table>
            <tbody>
                <tr>
                <td style={{width: '35%'}}>
                
           
                <img style={{width: "90%", marginLeft: "2.5%"}} className="br-sp1   " src={gallery[main_img]} alt="" />
        
                    </td>
                    <td style={{width: '65%'}}>
                        <div className="ta-c">
                        <h3 className="btxt btxt-t">{title}</h3>
                        <p className="btxt btxt-p">{prev}</p>
                        </div>
                        <div className="ta-c">
                        {/* <a href={ url+`/profile/${id}`} className="card-a">{lang.more}</a> */}
                        <button onClick={()=>{
                            window.location.href =`profile/${id}` ;
                            // window.location.reload()
                        }}>{lang.more}</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
}