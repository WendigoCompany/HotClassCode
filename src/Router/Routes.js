import Redirect from "./Redirect";
import Disclaim from "../Pages/Disclaim";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Room from "../Pages/Room";
import DisclaimRedirect from "../Components/Control/DisclaimRedirect";
import LangRedirect from "../Components/Control/LangRedirect";



class Config {
    constructor({ gh_repo = '', hash = false }) {
        this.gh_repo = gh_repo;
    }

}

/*

EXAMPLES:

    {
        path: `/`,
        e: <><Home></Home></>,
    },
    {
        path: `:id<int>/:name<str>`,
        e: <><Home></Home></>,
    },
    {
        path: `perro`,
        e: <><Perro></Perro></>,
    },
    {
        path: `perro/:id<str>`,
        e: <><Perro></Perro></>,
    },
    {
        path: `perro/:id<str>/nombre`,
        e: <><Perro></Perro></>,
    },
    {
        path: `perro/:id<int>/registro`,
        e: <><Home></Home></>,
    },
    { 
        path: `perro/:id<int>/:name<str>`,
        e: <><Kurumi></Kurumi></>,
    },



*/


const redirecctions = [
    { f: "/", d: "/en" }, 
    { f: "/profile/:id<int>", d: "/en/profile/:id<int>" },
    { f: "/disclaim", d: "/en/disclaim" },
    { f: "/room/:id<int>", d: "/en/room/:id<int>" }

];

const build_redirections = ({ middle, func }) => {

    const red_routes = [];


    redirecctions.map(red => (

        red_routes.push({
            path: red.f,
            e: <Redirect destiny={red.d} middlewares={middle} func={func} />,
            name: "Home"
        })

    ))

    return red_routes
}

export const config = new Config({ gh_repo: '/HotClass/' });
export default [
    {


        path: `/:lang<str>`,
        e: <>
            <DisclaimRedirect />
            <Home />
        </>,
        name: "Home"
    },
    {
        path: `/:lang<str>/profile/:id<int>`,
        e: <>
            <DisclaimRedirect />
            <Profile />
        </>,
        name: "Profile"
    },
    {
        path: `/:lang<str>/disclaim`,
        e: <Disclaim />,
        name: "Disclaim"
    },
    {
        path: `/:lang<str>/room/:id<int>`,
        e: <>
            <DisclaimRedirect />
            <Room />
        </>,
        name: "Room"
    },
].concat(build_redirections({
    middle: <>

        <DisclaimRedirect />
        <LangRedirect />
    </>
}))

