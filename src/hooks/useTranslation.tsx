import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { LangStrings } from '../intl'

export const defaultLocale = "pt";
export const locales = ["pt", "en"];

interface providerProps {
    children: ReactNode
}

interface contextProps {
    locale: string;
    setLocale: Dispatch<SetStateAction<string>>;
}

const LanguageContext = createContext<contextProps>({ } as contextProps);

export function LenguageProvider({ children }: providerProps) {
    const [locale, setLocale] = useState("pt");


    return (
        <LanguageContext.Provider value={{locale, setLocale}}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
   const { locale, setLocale } = useContext(LanguageContext);

    function t(key: string) {
        if (LangStrings[locale][key] === undefined){
            return LangStrings[defaultLocale][key];

        } else{
            return LangStrings[locale][key];
        }
    }

  return { t, locale, setLocale };
}
