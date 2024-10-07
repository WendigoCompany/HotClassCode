import { useRMeta } from "../../Router/MetaContext";
import { usePrev } from "../../Router/Redirect";
import Relocate from "../../Utils/relocate";

export default function LangRedirect({ to }) {
    /* eslint-disable */
    
    try {
        const { getParam } = useRMeta();
        const params = getParam();

        if (params && params["lang"]) {

        } else {
            if (sessionStorage.getItem("d")) {
                let destiny = sessionStorage.getItem("d");
                if (params) {
                    Object.keys(params).map(k => {
                        if (destiny.includes(`:${k}<`)) {
                            const toReplace = destiny.substring(destiny.indexOf(`:${k}<`), destiny.indexOf(">") + 1);
                            destiny = destiny.replace(toReplace, params[k]);


                        }


                    })
                }

                Relocate(destiny);
            } else {
                const { setCompo } = usePrev();
                setCompo(<>404 Page not Found</>)

            }
        }



    } catch (error) {
        console.log(error);

    }
    /* eslint-enable */
    return <>
    </>
}