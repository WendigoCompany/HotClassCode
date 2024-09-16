import DeviceProvider from "./Context/is_mobile";
import LangProvider from "./Context/lang_context";
import Home from "./Pages/Home";
import RouterApi from "./Router/ApiRouter";


export default function App() {
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