export default function Gallery_Img({ img, setter }) {
    return <>
        <div className="gal-img" onClick={()=>{
            setter(img)
        }}>
            <img src={img} alt="" />
        </div>
    </>
}