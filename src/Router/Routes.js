import Disclaim from "../Pages/Disclaim";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Room from "../Pages/Room";



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


export const config = new Config({ gh_repo: '/HotClass/' });
export default [
    {
        path: `/`,
        e: <Home />,
    },
    {
        path: `/profile/:id<int>`,
        e: <Profile />,
    },
    {
        path: `/disclaim`,
        e: <Disclaim />,
    },
    {
        path: `/room/:id<int>`,
        e: <Room/>,
    },
]

