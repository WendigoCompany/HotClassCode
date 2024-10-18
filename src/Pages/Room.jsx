import "../Styles/Room/manifiest.css"
import R_BackgroundCompo from "../Components/Room/Components/Background";
import BackgroundProvider from "../Components/Room/Context/Background";
import { useLang } from "../Context/lang_context";
import en from "../DB/manifiest.en.json"
import es from "../DB/manifiest.es.json"
import { useRMeta } from "../Router/MetaContext";
import R_BackgroundControl from "../Components/Room/Control/Background";
import SpriteProvider from "../Components/Room/Context/Sprite.context";
import Sprite from "../Components/Room/Components/Sprite";
import PageContentProviver from "../Context/page_content";
import { SpriteObject } from "../Components/Room/Squemas/Sprite";
import SpriteControl from "../Components/Room/Control/Sprite";
import RModalProvider from "../Components/Room/Context/RoomModal";
import AnimationControl from "../Components/Room/Control/Animation";
import SexControl from "../Components/Room/Control/Sex";
import HomeControl from "../Components/Room/Control/Home";
const girls = { en, es };


sessionStorage.removeItem("active-modal")

export default function Room() {
  const { lang } = useLang();
  let girl
  /* eslint-disable */
  try {
    const { getParam } = useRMeta();
    const { id } = getParam();
    girl = girls[lang].filter(w => w.id == id)[0];



  } catch (error) {
    console.log(error);

  }
  /* eslint-enable */



  const sprites = [
    new SpriteObject(0)
  ];


  return <>
    {
      girl
        ? <>
          <PageContentProviver girl={girl}>

            <BackgroundProvider>
              <SpriteProvider sprites={sprites}>
                <RModalProvider>
                  <HomeControl/>
                  <R_BackgroundCompo />
                  <R_BackgroundControl />
                  {sprites.map(sp => <Sprite sp={sp} />)}
                  <SpriteControl sprites={sprites[0]} />

                  <SexControl/>
                  <AnimationControl/>

                </RModalProvider>
              </SpriteProvider>
            </BackgroundProvider>
          </PageContentProviver>

          <div id="spinner"></div>
        </>
        : ""

    }
  </>
}