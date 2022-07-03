import React, {useState} from "react";
import {LanguageContext} from "../context/LanguageContext";


const WithLanguage=({children})=>{
    const [language,setLanguage]=useState("en-US")
    return <LanguageContext.Provider value={{
        language,setLanguage
    }}>
        {children}
    </LanguageContext.Provider>
}
export default WithLanguage