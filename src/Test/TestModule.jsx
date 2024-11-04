/* eslint-disable */

import tt from "./tt.json"

export default function TestModule() {

   const build =()=>{
    const e = [];
    tt.map(im => {
        e.push(<>
        <img style={{width: "20vh"}} src={im} alt="" />
        </>)
    })


    return e
   }

    return <>
    {build()}
    </>
}
/* eslint-enable */
