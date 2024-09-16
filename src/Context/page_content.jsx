import { createContext, useContext, useState } from "react";

export const PageContext = createContext();
export const usePageContent = () => useContext(PageContext);



const PageContentProviver = ({ children, ...content }) => {


    return <PageContext.Provider value={content}>{children}</PageContext.Provider>
}

export default PageContentProviver