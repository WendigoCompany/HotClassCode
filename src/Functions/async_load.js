export const async_load_by_id =({element ="" , value , property = "textContent"  })=>{
    let breaker = -1;
    const limit = 999;
    let int = setInterval(() => {
        try {
            breaker ++

            if(typeof element == "string"){
                document.getElementById(element)[property] = value
                clearInterval(int)
            }
        
        } catch (error) {
            if(breaker >= limit ){
                clearInterval(int)
            }
        }
    }, 20);
}   