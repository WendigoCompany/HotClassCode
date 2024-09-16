import Filter from "../Components/Filter/Filter";
import Paginator from "../Components/Paginator/Paginator";
import "../Styles/Home/manifiest.css";
import en from "../DB/manifiest.en.json"
import Card_Desk from "../Components/Card/Card_Desk";
import { useLang } from "../Context/lang_context";
import { useDevice } from "../Context/is_mobile";
import Card_Mobile from "../Components/Card/Card_Mobile";
import Title from "../Components/Title/Title";


import en_page from "../Lang/en/home.json"
import es_page from "../Lang/es/home.json"
import PageContentProviver from "../Context/page_content";
import LangSelector from "../Components/LangSelector/LangSelector";

const langs = {
    es: es_page,
    en: en_page
};


const girls = { en };






export default function Home() {

    const { lang  } = useLang();
    const girls_data = girls[lang];
    const { device } = useDevice();


    // useEffect(()=>{

    //     async_load_by_id({value: girls['en'][0].description , element: 'p' , property: "innerHTML"})
    // },[])



    return <>
        <PageContentProviver lang={langs[lang]}>
            <LangSelector/>
            <Title />
            <Filter />
            <h3 id="p" style={{ color: "green" }}></h3>
            <div className="background"></div>
            {
                (device == 'desk') ? (<Card_Desk data={girls_data[0]} />) : (<Card_Mobile data={girls_data[0]} />)
            }
            <Paginator />
        </PageContentProviver>
    </>
}