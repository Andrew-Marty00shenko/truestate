import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import headerRu from "../../Translations/ru/headerRu.json";
import headerEn from "../../Translations/en/headerEn.json";

const resources = {
    RU: {
        header: headerRu,
    },
    EN: {
        header: headerEn,
    },
};

i18n.use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem("language") || "RU",
        interpolation: { escapeValue: false }
    });

export default i18n;