const { createContext, useContext, useState, useEffect } = require("react");




export const MetaContext = createContext();

export const useRMeta = () => useContext(MetaContext);

export let useQuery
export let useParam
export let useData
export let useRaw


const MetaProvider = ({ children, metadata }) => {
    // if (metadata != undefined) {
    // }
    // useQuery = () => {
    //     return metadata.data.query
    // }
    // useParam = () => {
    //     return metadata.data.param
    // }
    // useData = () => {
    //     return { query: metadata.data.query, param: metadata.data.param }
    // }
    // useRaw = () => {
    //     return metadata

    // }


    const getMetadata = () => {
        return metadata
    }

    const getQuery = () => {
        return metadata.data.query
    }


    const getParam = () => {
        return metadata.data.param
    }
    const getData = () => {
        return { query: metadata.data.query, param: metadata.data.param }
    }


    return <MetaContext.Provider value={{
        getMetadata, getQuery,
        getParam,
        getData,
        
    }}>{children}</MetaContext.Provider>
}

export default MetaProvider