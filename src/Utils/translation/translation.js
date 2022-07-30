import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import headerRu from "../../Translations/ru/headerRu.json";
import headerEn from "../../Translations/en/headerEn.json";
import headerUa from "../../Translations/ua/headerUa.json";

import landingRu from "../../Translations/ru/landingRu.json";
import landingEn from "../../Translations/en/landingEn.json";
import landingUa from "../../Translations/ua/landingUa.json";

import footerRu from "../../Translations/ru/footerRu.json";
import footerEn from "../../Translations/en/footerEn.json";
import footerUa from "../../Translations/ua/footerUa.json";

import buttonUpRu from "../../Translations/ru/buttonUpRu.json";
import buttonUpEn from "../../Translations/en/buttonUpEn.json";
import buttonUpUa from "../../Translations/ua/buttonUpUa.json";

import callMeBackRu from "../../Translations/ru/callMeBackRu.json";
import callMeBackEn from "../../Translations/en/callMeBackEn.json";
import callMeBackUa from "../../Translations/ua/callMeBackUa.json";

const resources = {
    RU: {
        header: headerRu,
        landing: landingRu,
        footer: footerRu,
        buttonUp: buttonUpRu,
        callMeBack: callMeBackRu
    },
    EN: {
        header: headerEn,
        landing: landingEn,
        footer: footerEn,
        buttonUp: buttonUpEn,
        callMeBack: callMeBackEn
    },
    UA: {
        header: headerUa,
        landing: landingUa,
        footer: footerUa,
        buttonUp: buttonUpUa,
        callMeBack: callMeBackUa
    }
};

i18n.use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem("language") || "RU",
        interpolation: { escapeValue: false }
    });

export default i18n;