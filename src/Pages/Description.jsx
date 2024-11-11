import { useEffect } from "react";
import Gallery_Img from "./GalleryImg";
import ChatBtnProfile from "../Components/Profile/ChatBtn";
import RoomBtnProfile from "../Components/Profile/Room";

export default function Description_Profile({ txt , gallery , setter , id}) {

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
            <ChatBtnProfile/>
            <RoomBtnProfile id={id}/>
        </div>
    </>
}