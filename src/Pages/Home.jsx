import Paginator from "../Components/Paginator/Paginator";
import en from "../DB/manifiest.en.json"
import es from "../DB/manifiest.es.json"
import Card_Desk from "../Components/Card/Card_Desk";
import { useLang } from "../Context/lang_context";
import { useDevice } from "../Context/is_mobile";
import Card_Mobile from "../Components/Card/Card_Mobile";
import Title from "../Components/Title/Title";


import en_page from "../Lang/en/home.json"
import es_page from "../Lang/es/home.json"

import en_chat_model from "../Lang/en/chat.json"
import es_chat_model from "../Lang/es/chat.json"

import PageContentProviver from "../Context/page_content";
import LangSelector from "../Components/LangSelector/LangSelector";
import SearchBar from "../Components/Filter/Filter";
import { useState } from "react";
import "../Styles/Home/manifiest.css";
import Background from "../Components/Background";
import Chat from "../Components/Chat/Chat";
import GirlsProvider from "../Context/girls_context";




const langs = {
    es: {...es_page, ...es_chat_model},
    en: {...en_page, ...en_chat_model},
};


const girls = { en, es };





export default function Home() {

    const { lang } = useLang();
    // const girls_data = girls[lang];
    const { device } = useDevice();

    const [girls_data, setGirlsData] = useState(girls[lang]);

    const [actual_page, setActualPage] = useState(0);

    const ppage = 5;



    const getAllTags = () => {
        let final = [];
        girls[lang].map(g => final = final.concat(g.tags))
        return [...new Set(final)]
        // const fullTags = girls[lang].map(g => {
        //     return  {}
        // }); 
    }



    return <>
        <PageContentProviver pc={{...langs[lang]}} girls={girls[lang]}>
            <LangSelector />
            <Title />
            <Chat />
            {/* <Filter /> */}
            <SearchBar items={getAllTags()} action={(filter) => {


                const newGirls = girls[lang].filter(gl => gl.tags.indexOf(filter) != -1);

                setGirlsData(newGirls)
            }} />
            <Background />
            {
                (device == 'desk') ? (girls_data.slice(ppage * actual_page, ppage * (actual_page + 1)).map(gl => <Card_Desk data={gl} />)) : (girls_data.slice(ppage * actual_page, ppage * (actual_page + 1)).map(gl => <Card_Mobile data={gl} />))
            }
            <Paginator currentPage={actual_page} setCurrentPage={setActualPage} totalPages={Math.ceil(girls_data.length / ppage)} />
        </PageContentProviver>
    </>
}