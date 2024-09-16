export default function Card_Mobile({ data }) {
    console.log(data);

    const { gallery, main_img, title, prev } = data;

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
                {/* <tr>
                <td style={{width: '35%'}}>
                
           
                <img style={{width: "90%", marginLeft: "2.5%"}} className="br-sp1   " src={gallery[main_img]} alt="" />
        
                    </td>
                    <td style={{width: '65%'}}>
                        <div className="ta-c">
                        <h3 className="btxt btxt-t">{title}</h3>
                        <p className="btxt btxt-p">{prev}</p>
                        </div>
                    </td>
                </tr> */}
            </tbody>
        </table>
    </div>
}