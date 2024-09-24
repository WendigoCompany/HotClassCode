import DeviceProvider from "./Context/is_mobile";
import LangProvider from "./Context/lang_context";
import Home from "./Pages/Home";
import RouterApi from "./Router/ApiRouter";
import "./Styles/main.css"

export default function App() {

    // alert(process.env.REACT_APP_STADE)

    return <>
        {/* <LangProvider>
            <Home></Home>
        </LangProvider> */}

        <LangProvider>
            <DeviceProvider>
                <RouterApi />
            </DeviceProvider>
        </LangProvider>
    </>
}