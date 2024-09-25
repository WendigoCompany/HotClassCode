export default function Subtitle({stitle , img}){
    return <>

        <div className="st-prof">
     
            <div className="tr1 page-title">{stitle[0]}</div>
            <div className="tr2"><img src={img} alt="" /></div>
            <div className="tr3 page-title">{stitle[1]}</div>
        </div>
    </>
}

// <table className="st-prof">
// <tbody>
  
//         {/* <tr className="page-title"><div className="tr1">{stitle[0]}</div></tr> */}
//         {/* <tr><div><img src={img} alt="" /></div></tr>
//         <tr className="page-title "><h3 className="tr2">{stitle[1]}</h3></tr> */}
 
// </tbody>
// </table>