// import { HashRouter, Route, Routes, useParams } from 'react-router-dom';
import Router from './Router';
import RouterProvider from './RouterContext';



export default function RouterApi() {
    // const router = HashRouter;
// const routes =[
//     {
//      path : "/",
//      e : (async ()=>(await import("../Components/Home")).default),
//     }
// ];

// Mapeo de módulos

    // const LOAD_COMPONENT =()=>{
    //     const routeParams = window.location;
    //     console.log(routeParams);
        
    // }
    return <div>
                <RouterProvider>
                    <Router/>
                </RouterProvider>
    </div>
}