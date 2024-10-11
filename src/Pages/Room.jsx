import "../Styles/Room/manifiest.css"
import R_BackgroundCompo from "../Components/Room/Components/Background";
import BackgroundProvider from "../Components/Room/Context/Background";
import { useLang } from "../Context/lang_context";
import en from "../DB/manifiest.en.json"
import es from "../DB/manifiest.es.json"
import { useRMeta } from "../Router/MetaContext";
import R_BackgroundControl from "../Components/Room/Control/Background";
const girls = { en, es };



export default function Room() {
  const { lang } = useLang();
  let girl
  /* eslint-disable */
  try {
    const { getParam } = useRMeta();
    const { id } = getParam();
    girl = girls[lang].filter(w => w.id == id)[0];



  } catch (error) {
    console.log(error);

  }
  /* eslint-enable */






  return <>
    {
      girl
      ? <>
      <BackgroundProvider>
      <R_BackgroundControl/>
      <R_BackgroundCompo/>
      </BackgroundProvider>
      </>
      : ""

    }
  </>
}