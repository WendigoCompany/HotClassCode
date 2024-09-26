export default function PreviewProfile({ preview ,setter}) {
    const obtenerTimestamp = () => {
        const timestamp = new Date().getTime();
        return timestamp;
        
      };
      

    	
    const downloadImage = () => {
        const link = document.createElement('a');
        link.href = preview;
        link.download = `${obtenerTimestamp()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    return <>
        <div className="pr-cont w-100">
            <div>
                <div className="t-left ">
                    <button className="pr-btn t-0 l-0" onClick={()=>{setter(null)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" fill="black"><path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"/></svg>
                    </button>
                </div>
                <div className="t-right " onClick={downloadImage}>
                    <button className="pr-btn t-0 r-0">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" fill="black"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
                    </button>
                </div>
            </div>
            <img src={preview} className="pr-img" alt="" />
        </div>

    </>
}

