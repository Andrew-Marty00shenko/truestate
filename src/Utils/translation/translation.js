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

import dashboardMainRu from "../../Translations/ru/dashboardMainRu.json";
import dashboardMainEn from "../../Translations/en/dashboardMainEn.json";
import dashboardMainUa from "../../Translations/ua/dashboardMainUa.json";

import registrationRu from "../../Translations/ru/registrationRu.json";
import registrationEn from "../../Translations/en/registrationEn.json";
import registrationUa from "../../Translations/ua/registrationUa.json";

import loginRu from "../../Translations/ru/loginRu.json";
import loginEn from "../../Translations/en/loginEn.json";
import loginUa from "../../Translations/ua/loginUa.json";

import forgotPasswordRu from "../../Translations/ru/forgotPasswordRu.json";
import forgotPasswordEn from "../../Translations/en/forgotPasswordEn.json";
import forgotPasswordUa from "../../Translations/ua/forgotPasswordUa.json";

import dataInputRu from "../../Translations/ru/dataInputRu.json";
import dataInputEn from "../../Translations/en/dataInputEn.json";
import dataInputUa from "../../Translations/ua/dataInputUa.json";

import documentsRu from "../../Translations/ru/documentsRu.json";
import documentsEn from "../../Translations/en/documentsEn.json";
import documentsUa from "../../Translations/ua/documentsUa.json";

import balanceRu from "../../Translations/ru/balanceRu.json";
import balanceEn from "../../Translations/en/balanceEn.json";
import balanceUa from "../../Translations/ua/balanceUa.json";

import modalInvestRu from "../../Translations/ru/modalInvestRu.json";
import modalInvestEn from "../../Translations/en/modalInvestEn.json";
import modalInvestUa from "../../Translations/ua/modalInvestUa.json";

const resources = {
    RU: {
        header: headerRu,
        landing: landingRu,
        footer: footerRu,
        buttonUp: buttonUpRu,
        callMeBack: callMeBackRu,
        dashboardMain: dashboardMainRu,
        registration: registrationRu,
        login: loginRu,
        forgotPassword: forgotPasswordRu,
        dataInput: dataInputRu,
        documents: documentsRu,
        balance: balanceRu,
        modalInvest: modalInvestRu
    },
    EN: {
        header: headerEn,
        landing: landingEn,
        footer: footerEn,
        buttonUp: buttonUpEn,
        callMeBack: callMeBackEn,
        dashboardMain: dashboardMainEn,
        registration: registrationEn,
        login: loginEn,
        forgotPassword: forgotPasswordEn,
        dataInput: dataInputEn,
        documents: documentsEn,
        balance: balanceEn,
        modalInvest: modalInvestEn
    },
    UA: {
        header: headerUa,
        landing: landingUa,
        footer: footerUa,
        buttonUp: buttonUpUa,
        callMeBack: callMeBackUa,
        dashboardMain: dashboardMainUa,
        registration: registrationUa,
        login: loginUa,
        forgotPassword: forgotPasswordUa,
        dataInput: dataInputUa,
        documents: documentsUa,
        balance: balanceUa,
        modalInvest: modalInvestUa
    }
};

i18n.use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem("language") || "EN",
        interpolation: { escapeValue: false }
    });

export default i18n;