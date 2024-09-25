export default function Subtitle_M({stitle, img}){
    return <>
    {/* <h1 className="s-title">{stitle}</h1> */}
    <table className="st-prof">
        <tbody>
          
                <tr className="page-title"><label htmlFor="">{stitle[0]}</label></tr>
                <tr><div><img src={img} alt="" /></div></tr>
                <tr className="page-title "><h3 className="tr2">{stitle[1]}</h3></tr>
         
        </tbody>
    </table>
    </>
}