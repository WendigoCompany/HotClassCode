

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

import "../Styles/Profile/manifiest.css";
import Description_Profile from "./Description";
import { createContext, useContext, useState } from "react";
import PreviewProfile from "./Preview";
import Chat from "../Components/Chat/Chat";
import PageContentProviver from "../Context/page_content";

const girls = { en, es };


const pageContent = {
    en: en_p,
    es: es_p,
};


export const GirlContext = createContext();
export const useGirl = () => useContext(GirlContext);



const GirlProvider = ({ children, ...params }) => {
    return <GirlContext.Provider value={{ ...params }}>{children}</GirlContext.Provider>
}



export const GirlsContext = createContext();
export const useGirls = () => useContext(GirlsContext);



const GirlsProvider = ({ children, ...params }) => {
    return <GirlsContext.Provider value={{ ...params }}>{children}</GirlsContext.Provider>
}


export default function Profile() {
    const { lang } = useLang();
    const { device } = useDevice();
    const [preview, setPreview] = useState(null);
    const [girl, setGirl] = useState(null);

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
        <PageContentProviver pg={pageContent[lang]} >
            <GirlsProvider girls={girls[lang]}>
                {
                    (girl_data) ? (
                        <>
                            <GirlProvider girl={girl} setGirl={setGirl}>
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


                            </GirlProvider>

                        </>


                    ) : ("")
                }
            </GirlsProvider>
        </PageContentProviver>
    </>
}
