import { config } from "../Router/Routes";

export default function Relocate(to){
    let url = '';
    if (process.env.REACT_APP_STADE == "gh") {
        url += config.gh_repo + "#"
    }

    window.location.href = window.location.origin + url + to;

    if (process.env.REACT_APP_STADE == "gh") {
        window.location.reload()


    }
}