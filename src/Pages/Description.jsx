import { useEffect } from "react";
import Gallery_Img from "./GalleryImg";

export default function Description_Profile({ txt , gallery , setter}) {
    console.log(txt);
    
    useEffect(()=>{
        
        document.getElementById("de-p").innerHTML = txt;
    },[])
    return <>
        <div className="gallery">
            {
                gallery.map(gl => <Gallery_Img setter={setter} img={gl}/>)
            }
                
        </div>
        <div className="de-cont">
            <p  id="de-p"></p>
        </div>
    </>
}