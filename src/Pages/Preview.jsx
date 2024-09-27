import { useDevice } from "../Context/is_mobile";

export default function PreviewProfile({ preview ,setter}) {


    const {device} = useDevice();
    const obtenerTimestamp = () => {
        const timestamp = new Date().getTime();
        return timestamp;
        
      };
      

    	console.log(preview);
        
    const downloadImage = () => {
        const link = document.createElement('a');
        link.href = preview;
        link.target = '_blank'; // Esto abre el enlace en otra pestaña
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      
    return <>
        <div className="pr-cont w-100">
            <div>
                <div className="t-left ">
                    <button className={`pr-btn t-0 ${device == "mob" ? "" :"l-0"}`} onClick={()=>{setter(null)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" fill="black"><path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"/></svg>
                    </button>
                </div>
         {
                   (device == "mob")?(
                    <div className="t-right " onClick={downloadImage}>
                    <button className={`pr-btn t-0 ${device == "mob" ? "r-10" :"r-0"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" fill="black"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
                    </button>
                </div>
                ):( "")
         }
            </div>
            <img src={preview} onLoad={(e)=>{
            
            }} className="pr-img" alt="" />
        </div>

    </>
}

