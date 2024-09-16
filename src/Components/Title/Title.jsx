import "../../Styles/Title/manifiest.css"

export default function Title(){
    return <>

                <h1 className={`page-title`}>   {process.env.REACT_APP_NAME.toUpperCase()}</h1>
      
    </>
}