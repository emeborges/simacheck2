import { useRouter } from "next/router";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { LangStrings } from '../intl'

export const defaultLocale = "pt";
export const locales = ["pt", "en"];


const LanguageContext = createContext({});

export function LenguageProvider({ children }) {
    const route = useRouter()
    const [locale, setLocale] = useState("pt");
    console.log('rota', route)


    return (
        <LanguageContext.Provider value={{locale, setLocale}}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
   const { locale, setLocale } = useContext(LanguageContext);

    function t(key) {
        if (LangStrings[locale][key] === undefined){
            return LangStrings[defaultLocale][key];

        } else{
            return LangStrings[locale][key];
        }
    }

  return { t, locale, setLocale };
}
