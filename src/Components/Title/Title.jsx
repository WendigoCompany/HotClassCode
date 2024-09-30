import "../../Styles/Title/manifiest.css"

export default function Title(){
    return <>

                <h1 className={`page-title`} style={{cursor: "pointer"}} onClick={()=>{
                    window.location.href= "/";
                    
                }}>   {process.env.REACT_APP_NAME.toUpperCase()}</h1>
      
    </>
}