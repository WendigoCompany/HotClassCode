import "../Styles/Room/manifiest.css"
import R_BackgroundCompo from "../Components/Room/Components/Background";
import BackgroundProvider from "../Components/Room/Context/Background";
import { useLang } from "../Context/lang_context";
import en from "../DB/manifiest.en.json"
import es from "../DB/manifiest.es.json"
import { useRMeta } from "../Router/MetaContext";
import R_BackgroundControl from "../Components/Room/Control/Background";
import PageContentProviver from "../Context/page_content";
import { SpriteObject } from "../Components/Room/Squemas/Sprite";
import SpriteControl from "../Components/Room/Control/Sprite";
import RModalProvider from "../Components/Room/Context/RoomModal";
import AnimationControl from "../Components/Room/Control/Animation";
import SexControl from "../Components/Room/Control/Sex";
import HomeControl from "../Components/Room/Control/Home";
import AnimationProvider from "../Components/Room/Context/AnimationContext";
import AllowedProvider from "../Components/Room/Context/SkinAllowed";
import { useState } from "react";
import ScreenProvider from "../Components/Room/Context/ScreenContext";
import AnimationCompo from "../Components/Room/Components/Animation";

const girls = { en, es };


sessionStorage.removeItem("active-modal")


const load_room_content = async (wid) => {

  switch (wid) {
    case 0:
      return (await (import('../DB/Room/tokisaki_kurumi.room.db.json'))).default
    default:
      break;
  }
}

export default function Room() {
  const { lang } = useLang();
  const [roomContent, setRoomContent] = useState('');
  const [loaded, setLoaded] = useState(false);
  let girl
  /* eslint-disable */
  try {
    (async () => {

      const { getParam } = useRMeta();
      const { id } = getParam();

      girl = girls[lang].filter(w => w.id == id)[0];
      load_room_content(girl.id).then(re => {
        console.log(re);

        const sprites = [
          new SpriteObject(girl.id)
        ];

        sprites[0].set_room_data(re)

        sprites[0].init()

        if (!loaded) {
          setRoomContent(<>
            <AnimationProvider>
              <PageContentProviver girl={girl} sprites={sprites}>
                <AllowedProvider allow={sprites[0].allowed}>
                  <BackgroundProvider>
                    <RModalProvider>
                      <ScreenProvider sprites={sprites}>
                        <HomeControl />
                        <R_BackgroundCompo />
                        <R_BackgroundControl />
                        <SexControl />
                        <AnimationControl />
                        {/* {sprites.map(sp => <Sprite sp={sp} />)} */}
                        <SpriteControl sprites={sprites[0]} />
                        <AnimationCompo />
                      </ScreenProvider>
                    </RModalProvider>
                  </BackgroundProvider>
                </AllowedProvider>
              </PageContentProviver>
            </AnimationProvider>
          </>)
          setLoaded(true)
        }


      })


      // load_room_content(girl.id).then(re => {

      //   setRoomContent(re)


      //  let int = setInterval(() => {

      //   let val = true; 
      //   sprites.map(sp => {
      //       if(sp.){

      //       }
      //     })
      //   }, 100);
      // })

      // let int = setInterval(() => {

      //   if(data){

      //     const sprites = [
      //       new SpriteObject(girl.id, roomContent)
      //     ];

      //     sprites.map(sp => {
      //       sp.init(roomContent)
      //     })

      //   }
      // })

    })()

  } catch (error) {
    console.log(error);

  }
  /* eslint-enable */







  // if(!loaded){
  //   let i = setInterval(() => {

  //     let val = true;
  //     sprites.map(sp => {
  //         val = val && sp.sprite_data != undefined
  //     })
  //     if (val){
  //       setTimeout(() => {
  //         setLoaded(val)
  //         clearInterval(i)

  //       }, 1000);
  //     }
  //   }, 1000);
  // }



  return <>
    {roomContent}
    <div id="spinner"></div>
  </>
}

