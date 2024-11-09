import { usePageContent } from "../../../Context/page_content";
import { useAnimation } from "../Context/AnimationContext"

export default function AnimationCompo (){

    const {isAnimation, setIsAnimation, animation, setAnimation} = useAnimation()
    const {sprites} = usePageContent();
    const sprite =sprites[0];
    if(isAnimation){
        let intert = setInterval(() => {
          try {
            sprite.init_pose(animation)
            clearInterval(intert)
          } catch (error) {
            
          }
            
        }, 30);;
        document.getElementById("spray-container").style.opacity  = 0;
    }else{
        try {
            document.getElementById("spray-container").style.opacity  = 1;
        } catch (error) {
            
        }
    }
    return <>
    {
        (isAnimation) ? (      <div id="animation-cont" style={{transition: "opacity .5s"}}>

            </div> ) : (<>
  
        </>)
    }
    </>
}