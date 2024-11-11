

import Background from "../Components/Background";
import LangSelector from "../Components/LangSelector/LangSelector";
import Subtitle from "../Components/Profile/Subtitle";
import Title from "../Components/Title/Title";
import { useDevice } from "../Context/is_mobile";
import { useLang } from "../Context/lang_context";
import en from "../DB/manifiest.en.json"
import es from "../DB/manifiest.es.json"
import { useRMeta } from "../Router/MetaContext";

import en_p from "../Lang/en/profile.json"
import es_p from "../Lang/es/profile.json"

import en_chat_model from "../Lang/en/chat.json"
import es_chat_model from "../Lang/es/chat.json"

import "../Styles/Profile/manifiest.css";
import Description_Profile from "./Description";
import { createContext, useContext, useState } from "react";
import PreviewProfile from "./Preview";
import Chat from "../Components/Chat/Chat";
import PageContentProviver from "../Context/page_content";
import GirlsProvider from "../Context/girls_context";
import GirlProvider from "../Context/girl_context";

const girls = { en, es };


const pageContent = {
    en: {...en_p, ...en_chat_model},
    es: {...es_p, ...es_chat_model},

};



// export const GirlContext = createContext();
// export const useGirl = () => useContext(GirlContext);



// const GirlProvider = ({ children, ...params }) => {
//     return <GirlContext.Provider value={{ ...params }}>{children}</GirlContext.Provider>
// }



// export const GirlsContext = createContext();
// export const useGirls = () => useContext(GirlsContext);



// const GirlsProvider = ({ children, ...params }) => {
//     return <GirlsContext.Provider value={{ ...params }}>{children}</GirlsContext.Provider>
// }


export default function Profile() {
    const { lang } = useLang();
    const { device } = useDevice();
    const [preview, setPreview] = useState(null);
    // const [girl, setGirl] = useState(null);
    const [girls_data, setGirlsData] = useState(girls[lang]);

    
    let girl_data
    /* eslint-disable */
    try {
        const { getParam } = useRMeta();
        const { id } = getParam();
        girl_data = girls[lang][id];


    } catch (error) {
        console.log(error);

    }
    /* eslint-enable */




    return <>
        <PageContentProviver pc={pageContent[lang]}  girls={girls[lang]} >
            {/* <GirlsProvider girls={girls[lang]}> */}
                {
                    (girl_data) ? (
                        <>
                            {/* <GirlProvider girl={girl} setGirl={setGirl}> */}
                                <LangSelector />
                                <Chat />


                                <Title />
                                <Background />
                                <Subtitle stitle={[girl_data["fname"], girl_data["title"]]} img={girl_data["gallery"][girl_data["main_img"]]} />
                                <Description_Profile setter={setPreview} txt={girl_data["description"]} gallery={girl_data["gallery"]} id={girl_data["id"]}/>
                                {
                                    preview
                                        ? <>
                                            <PreviewProfile setter={setPreview} preview={preview} />
                                        </>
                                        : ""
                                }


                            {/* </GirlProvider> */}

                        </>


                    ) : ("")
                }
            {/* </GirlsProvider> */}
        </PageContentProviver>
    </>
}
