import { config } from "../Router/Routes";

export function IS_GITHUB (){
    let head = '';
    if (process.env.REACT_APP_STADE == "gh") {
        head += config.gh_repo + "#"
    }

    return head
    
    

    // window.location.href = window.location.origin + head + to;

    // return to 
}