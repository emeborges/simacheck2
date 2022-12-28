import { useRouter } from "next/router";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { LangStrings } from '../intl'
import { setCookie, parseCookies, destroyCookie } from "nookies";

export const defaultLocale = "en";
export const locales = ["pt", "en"];


const LanguageContext = createContext({});

export function LenguageProvider({ children }) {
    const route = useRouter()
    const [locale, setLocale] = useState('en');
    const pathRoute = route.pathname

    useEffect(() => {
        const { "simacheck.lenguage": lenguageCookie } = parseCookies();

        if( lenguageCookie === undefined ) {
            const lenguageBrowser = window.navigator.language;

            setLocale(lenguageBrowser !== "pt-BR" ? "en" : "pt");

            setCookie(undefined, "simacheck.lenguage", lenguageBrowser, {
                maxAge: 60 * 60 * 24 * 30, // 30days
                path: "/",
            });
        } else {
            setLocale(lenguageCookie)
        }

    }, []);

    useEffect(() => {
        setCookie(undefined, "simacheck.lenguage", locale, {
            maxAge: 60 * 60 * 24 * 30, // 30days
            path: "/",
        });
    }, [locale])

    return (
        <LanguageContext.Provider value={{locale, setLocale}}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    const { locale, setLocale } = useContext(LanguageContext);
    const { "simacheck.lenguage": lenguageCookie } = parseCookies();

    function t(key) {
        if (LangStrings[locale][key] === undefined){
            return LangStrings[
                lenguageCookie
                    ? lenguageCookie
                    : 'en'
            ][key];

        } else{
            return LangStrings[locale][key];
        }
    }

  return { t, locale, setLocale };
}
