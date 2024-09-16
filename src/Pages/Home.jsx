import Filter from "../Components/Filter/Filter";
import Paginator from "../Components/Paginator/Paginator";
import "../Styles/Home/manifiest.css";
import en from "../DB/manifiest.en.json"
import { useEffect } from "react";
import { async_load_by_id } from "../Functions/async_load";
import Card_Desk from "../Components/Card/Card_Desk";
import { useLang } from "../Context/lang_context";
import { useDevice } from "../Context/is_mobile";
import Card_Mobile from "../Components/Card/Card_Mobile";
import Title from "../Components/Title/Title";

const girls = { en };



export default function Home() {

    const { lang } = useLang();
    const girls_data = girls[lang];
    const { device } = useDevice();
    // useEffect(()=>{

    //     async_load_by_id({value: girls['en'][0].description , element: 'p' , property: "innerHTML"})
    // },[])
    return <>
        <Title/>
        <Filter />
        <h3 id="p" style={{ color: "green" }}></h3>
        <div className="background"></div>
        {
            (device == 'desk') ? (<Card_Desk data={girls_data[0]} />) : (<Card_Mobile data={girls_data[0]} />)
        }
        <Paginator />
    </>
}