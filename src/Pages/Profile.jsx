

import Background from "../Components/Background";
import LangSelector from "../Components/LangSelector/LangSelector";
import Subtitle_M from "../Components/Profile/Subtitle_M";
import Subtitle from "../Components/Profile/Subtitle";
import Title from "../Components/Title/Title";
import { useDevice } from "../Context/is_mobile";
import { useLang } from "../Context/lang_context";
import en from "../DB/manifiest.en.json"
import es from "../DB/manifiest.es.json"
import { useRMeta } from "../Router/MetaContext";


import "../Styles/Profile/manifiest.css";

const girls = { en, es };



export default function Profile() {
    const { lang } = useLang();
    const { device } = useDevice();
    
    let girl_data
    /* eslint-disable */
    try {
        const { getParam } = useRMeta();
        const { id } = getParam();
        girl_data = girls[lang][id];
        console.log(girl_data);
        

    } catch (error) {
        console.log(error);

    }
    /* eslint-enable */

    return <>
        {
            (girl_data) ? (
                <>
                    <LangSelector />
                    <Title />
                    <Background />
                    {
                        // device == 'mob'
                        // ?<Subtitle_M stitle={[girl_data["fname"],girl_data["title"]]} img={girl_data["gallery"][girl_data["main_img"]]}/>
                        // :<Subtitle_D stitle={[girl_data["fname"],girl_data["title"]]} img={girl_data["gallery"][girl_data["main_img"]]}/>
                    }
                    <Subtitle stitle={[girl_data["fname"],girl_data["title"]]} img={girl_data["gallery"][girl_data["main_img"]]}/>
                {/* <Subtitle stitle={`${girl_data["fname"]}~~~~${girl_data["title"]}`}/> */}
                </>


            ) : ("")
        }
    </>
}
