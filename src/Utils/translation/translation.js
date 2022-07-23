import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import headerRu from "../../Translations/ru/headerRu.json";
import headerEn from "../../Translations/en/headerEn.json";
import headerUa from "../../Translations/ua/headerUa.json";

import landingRu from "../../Translations/ru/landingRu.json";
import landingEn from "../../Translations/en/landingEn.json";
import landingUa from "../../Translations/ua/landingUa.json";

const resources = {
    RU: {
        header: headerRu,
        landing: landingRu
    },
    EN: {
        header: headerEn,
        landing: landingEn
    },
    UA: {
        header: headerUa,
        landing: landingUa
    }
};

i18n.use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem("language") || "RU",
        interpolation: { escapeValue: false }
    });

export default i18n;