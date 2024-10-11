import ReloadImage from "../Utils/reload_image"

export default function Gallery_Img({ img, setter }) {
    return <>
        <div className="gal-img" onClick={()=>{
            setter(img)
        }}>
            <img src={img} onError={(e) => { ReloadImage(e, img) }}  alt="" />
        </div>
    </>
}