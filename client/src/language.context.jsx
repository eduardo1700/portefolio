import { createContext, useState, useEffect } from "react";
import stringsGlobal from "./strings.json"

const LanguageContext = createContext();

// CREATE A WRAPPER COMPONENT
function LanguageProviderWrapper(props) {

    const [language, setLanguage] = useState("EN")
    const [strings, setStrings] = useState(null)

    useEffect(() => {
        setStrings(stringsGlobal[language]);
    }, [language])

    return (
        <LanguageContext.Provider value={{
            strings,
            language,
            setLanguage
        }}>
            {props.children}
        </LanguageContext.Provider>
    )
}

export { LanguageContext, LanguageProviderWrapper };