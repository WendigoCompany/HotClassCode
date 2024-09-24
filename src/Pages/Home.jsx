import Paginator from "../Components/Paginator/Paginator";
import "../Styles/Home/manifiest.css";
import en from "../DB/manifiest.en.json"
import es from "../DB/manifiest.es.json"
import Card_Desk from "../Components/Card/Card_Desk";
import { useLang } from "../Context/lang_context";
import { useDevice } from "../Context/is_mobile";
import Card_Mobile from "../Components/Card/Card_Mobile";
import Title from "../Components/Title/Title";


import en_page from "../Lang/en/home.json"
import es_page from "../Lang/es/home.json"
import PageContentProviver from "../Context/page_content";
import LangSelector from "../Components/LangSelector/LangSelector";
import SearchBar from "../Components/Filter/Filter";
import { useState } from "react";

const langs = {
    es: es_page,
    en: en_page
};


const girls = { en , es};






export default function Home() {

    const { lang  } = useLang();
    // const girls_data = girls[lang];
    const { device } = useDevice();
  
    const [girls_data, setGirlsData] = useState(girls[lang]);


    

    return <>
        <PageContentProviver lang={langs[lang]}>
            <LangSelector/>
            <Title />
            {/* <Filter /> */}
            <SearchBar items={girls[lang][0].tags} action={(filter)=>{
                console.log(filter);
                
                const newGirls = girls[lang].filter(gl => gl.tags.indexOf(filter) != -1);
           
                setGirlsData(newGirls)
            }}/>
            <h3 id="p" style={{ color: "green" }}></h3>
            <div className="background"></div>
            {
                (device == 'desk') ? (girls_data.map(gl => <Card_Desk data={gl} />)) : (girls_data.map(gl => <Card_Mobile data={gl} />))
            }
            <Paginator />
        </PageContentProviver>
    </>
}