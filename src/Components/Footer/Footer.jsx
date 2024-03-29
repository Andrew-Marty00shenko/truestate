import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import PrivacyPolicyDoc from "../../assets/pdfs/Privacy_Policy_for_TRUESTATE.PDF";
import WhitePapperEn from "../../assets/pdfs/white_papper_en.pdf";
import WhitePapperRu from "../../assets/pdfs/white_papper_ru.pdf";
import WhitePapperUa from "../../assets/pdfs/white_papper_ua.pdf";
import FooterLogo from "../../assets/images/footer-logo.svg";

import { opened } from "../../Redux/slices/callMeBack";

import "./Footer.scss";

const Footer = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const dispatch = useDispatch();
    const [openWidnowContacts, setOpenWindowContacts] = useState(false);

    const handleOpenWindowContacts = () => {
        setOpenWindowContacts(true);
    };

    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        dispatch(opened());
        setOpenWindowContacts(false);
    };

    return <footer className="footer">
        <div className="footer__block">
            <div className="footer__block-logo">
                <img src={FooterLogo} alt="footer-logo" />
                <p>ⓒ Truestate 2022</p>
            </div>
            <ul className="footer__block-info">
                <li>
                    <a target="_blank" href={PrivacyPolicyDoc}>
                        Privacy Policy
                    </a>
                </li>
                <li>
                    <a target="_blank" href={
                        i18n.language === 'EN'
                            ? `${WhitePapperEn}#page=1`
                            : i18n.language === 'RU'
                                ? `${WhitePapperRu}#page=1`
                                : `${WhitePapperUa}#page=1`
                    } >
                        White paper
                    </a>
                </li>
                <li className="footer__block-info__contacts">
                    <a onClick={handleOpenWindowContacts}>
                        {t('footer:FOOTER_CONTACTS')}
                    </a>

                    {openWidnowContacts && <div className="footer__block-info__contacts-window"
                        style={i18n.language === 'RU' ? { width: 370 } : i18n.language === 'EN' ? { width: 250 } : { width: 370 }}
                    >
                        <svg className="close-btn" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                            onClick={() => setOpenWindowContacts(false)}
                        >
                            <path d="M1 1.47607L26 26.4761" stroke="#9b9b9b" strokeWidth="2" strokeLinecap="round" />
                            <path d="M1 26.4761L26 1.47609" stroke="#9b9b9b" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <h3>
                            {t('footer:FOOTER_WINDOW_CONTACTS_TITLE')}
                        </h3>
                        <div>
                            <p>
                                {t('footer:FOOTER_WINDOW_CONTACTS_TEXT_1')}
                                <span>question@tru.estate</span>
                            </p>
                            <p>
                                {t('footer:FOOTER_WINDOW_CONTACTS_TEXT_2')}
                                <a href={
                                    i18n.language === 'RU'
                                        ? "https://t.me/truestate_ru"
                                        : i18n.language === 'UA'
                                            ? "https://t.me/truestate_ua"
                                            : "https://t.me/truestate_eng"
                                }
                                    target="_blank"
                                >Telegram</a>
                            </p>
                            <p>
                                {t('footer:FOOTER_WINDOW_CONTACTS_TEXT_3')}
                                <span onClick={scrollToTop}>{t('footer:FOOTER_WINDOW_CONTACTS_TEXT_4')}</span>
                                {t('footer:FOOTER_WINDOW_CONTACTS_TEXT_5')}
                            </p>
                        </div>
                    </div>}
                </li>
            </ul>
            <div className="footer__block-links">
                <div className="footer__block-links-socials">
                    <a
                        href={
                            i18n.language === 'RU'
                                ? "https://www.facebook.com/profile.php?id=100086652493278"
                                : i18n.language === 'UA'
                                    ? "https://www.facebook.com/profile.php?id=100086503100446"
                                    : "https://www.facebook.com/profile.php?id=100086686511713"
                        }
                        target="_blank"
                    >
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26 12.5078C26 5.60411 20.1799 0.0078125 13 0.0078125C5.82015 0.0078125 0 5.60411 0 12.5078C0 18.7467 4.75319 23.9189 10.9681 24.856V16.1208H7.66711V12.5078H10.9681V9.75411C10.9681 6.62078 12.9095 4.89115 15.8793 4.89115C17.3025 4.89115 18.7893 5.13559 18.7893 5.13559V8.21152H17.1504C15.5345 8.21152 15.0319 9.17448 15.0319 10.1634V12.5078H18.6372L18.0613 16.1208H15.0319V24.856C21.2468 23.9189 26 18.7467 26 12.5078Z" fill="#010201" />
                            <path d="M18.0603 16.1207L18.6361 12.5078H15.0327V10.1633C15.0327 9.17445 15.5354 8.21148 17.1512 8.21148H18.7902V5.13556C18.7902 5.13556 17.3034 4.89111 15.8801 4.89111C12.9103 4.89111 10.969 6.62074 10.969 9.75408V12.5078H7.66797V16.1207H10.969V24.8559C11.6315 24.9559 12.3095 25.0078 13.0009 25.0078C13.6923 25.0078 14.3702 24.9559 15.0327 24.8559V16.1207H18.0603Z" fill="white" />
                        </svg>
                    </a>
                    <a
                        href={
                            i18n.language === 'RU'
                                ? "https://www.instagram.com/truestate_ru/"
                                : i18n.language === 'UA'
                                    ? "https://www.instagram.com/truestate_ua/"
                                    : "https://www.instagram.com/truestate_eng/"
                        }
                        target="_blank"
                    >
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 25.0078C19.9036 25.0078 25.5 19.4114 25.5 12.5078C25.5 5.60425 19.9036 0.0078125 13 0.0078125C6.09644 0.0078125 0.5 5.60425 0.5 12.5078C0.5 19.4114 6.09644 25.0078 13 25.0078Z" fill="#010201" />
                            <path d="M12.9993 6.05573C15.1011 6.05573 15.3493 6.06313 16.1789 6.10202C16.9456 6.13721 17.3622 6.26498 17.64 6.37239C18.0067 6.51498 18.2696 6.68535 18.5456 6.96128C18.8215 7.23721 18.9919 7.49832 19.1345 7.86684C19.2419 8.14461 19.3696 8.56128 19.4048 9.32795C19.4419 10.1576 19.4511 10.4076 19.4511 12.5076C19.4511 14.6076 19.4437 14.8576 19.4048 15.6872C19.3696 16.4539 19.2419 16.8705 19.1345 17.1483C18.9919 17.515 18.8215 17.7779 18.5456 18.0539C18.2696 18.3298 18.0085 18.5002 17.64 18.6428C17.3622 18.7502 16.9456 18.8779 16.1789 18.9131C15.3493 18.9502 15.1011 18.9594 12.9993 18.9594C10.8974 18.9594 10.6493 18.952 9.81965 18.9131C9.05298 18.8779 8.63631 18.7502 8.35854 18.6428C7.99187 18.5002 7.72891 18.3298 7.45298 18.0539C7.17705 17.7779 7.00668 17.5168 6.86409 17.1483C6.75668 16.8705 6.62891 16.4539 6.59372 15.6872C6.55668 14.8576 6.54742 14.6076 6.54742 12.5076C6.54742 10.4076 6.55483 10.1576 6.59372 9.32795C6.62891 8.56128 6.75668 8.14461 6.86409 7.86684C7.00668 7.50017 7.17705 7.23721 7.45298 6.96128C7.72891 6.68535 7.99002 6.51498 8.35854 6.37239C8.63631 6.26498 9.05298 6.13721 9.81965 6.10202C10.6493 6.06313 10.8974 6.05573 12.9993 6.05573ZM12.9993 4.63721C10.8622 4.63721 10.5937 4.64647 9.75483 4.68536C8.91779 4.72424 8.34557 4.85573 7.84372 5.05202C7.32705 5.25387 6.88817 5.52239 6.44928 5.95943C6.01224 6.39647 5.74187 6.83535 5.54187 7.35387C5.34742 7.85387 5.21409 8.4261 5.1752 9.26499C5.13817 10.102 5.12891 10.3705 5.12891 12.5076C5.12891 14.6446 5.13817 14.9131 5.17705 15.752C5.21594 16.5891 5.34742 17.1613 5.54372 17.6631C5.74557 18.1798 6.01409 18.6187 6.45113 19.0576C6.88817 19.4946 7.32705 19.765 7.84557 19.965C8.34557 20.1594 8.9178 20.2928 9.75668 20.3317C10.5956 20.3705 10.8641 20.3798 13.0011 20.3798C15.1382 20.3798 15.4067 20.3705 16.2456 20.3317C17.0826 20.2928 17.6548 20.1613 18.1567 19.965C18.6734 19.7631 19.1122 19.4946 19.5511 19.0576C19.9882 18.6205 20.2585 18.1817 20.4585 17.6631C20.653 17.1631 20.7863 16.5909 20.8252 15.752C20.8641 14.9131 20.8733 14.6446 20.8733 12.5076C20.8733 10.3705 20.8641 10.102 20.8252 9.26313C20.7863 8.4261 20.6548 7.85387 20.4585 7.35202C20.2567 6.83536 19.9882 6.39647 19.5511 5.95758C19.1141 5.52054 18.6752 5.25017 18.1567 5.05017C17.6567 4.85573 17.0845 4.72239 16.2456 4.6835C15.4048 4.64647 15.1363 4.63721 12.9993 4.63721Z" fill="white" />
                            <path d="M12.9978 8.4668C10.7663 8.4668 8.95703 10.2761 8.95703 12.5075C8.95703 14.739 10.7663 16.5483 12.9978 16.5483C15.2293 16.5483 17.0385 14.739 17.0385 12.5075C17.0385 10.2761 15.2293 8.4668 12.9978 8.4668ZM12.9978 15.1316C11.5496 15.1316 10.3737 13.9575 10.3737 12.5075C10.3737 11.0575 11.5478 9.88346 12.9978 9.88346C14.4478 9.88346 15.6218 11.0575 15.6218 12.5075C15.6218 13.9575 14.4459 15.1316 12.9978 15.1316Z" fill="white" />
                            <path d="M17.2023 9.25022C17.7239 9.25022 18.1467 8.82738 18.1467 8.30577C18.1467 7.78417 17.7239 7.36133 17.2023 7.36133C16.6807 7.36133 16.2578 7.78417 16.2578 8.30577C16.2578 8.82738 16.6807 9.25022 17.2023 9.25022Z" fill="white" />
                        </svg>
                    </a>
                    <a
                        href={
                            i18n.language === 'RU'
                                ? "https://t.me/truestate_ru"
                                : i18n.language === 'UA'
                                    ? "https://t.me/truestate_ua"
                                    : "https://t.me/truestate_eng"
                        }
                        target="_blank"
                    >
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 25.0078C19.4036 25.0078 25 19.4114 25 12.5078C25 5.60425 19.4036 0.0078125 12.5 0.0078125C5.59644 0.0078125 0 5.60425 0 12.5078C0 19.4114 5.59644 25.0078 12.5 25.0078Z" fill="#010201" />
                            <path d="M18.5833 7.42993C18.5352 7.29105 18.4778 7.25216 18.3889 7.21882C18.1944 7.14475 17.8648 7.25586 17.8648 7.25586C17.8648 7.25586 6.18146 11.454 5.5148 11.9207C5.37035 12.0207 5.3222 12.0781 5.29998 12.1466C5.18517 12.4781 5.54443 12.6244 5.54443 12.6244L8.55554 13.6059C8.55554 13.6059 8.6685 13.6225 8.70739 13.5966C9.39257 13.1633 15.6 9.24475 15.9574 9.11327C16.0148 9.0966 16.0555 9.11512 16.0444 9.15401C15.9018 9.65771 10.5111 14.4485 10.5111 14.4485C10.5111 14.4485 10.4907 14.4744 10.4778 14.504L10.4704 14.5003L10.1889 17.4873C10.1889 17.4873 10.0704 18.4022 10.987 17.4873C11.6333 16.841 12.2574 16.3022 12.5704 16.0392C13.6055 16.754 14.7204 17.5447 15.2 17.9577C15.4407 18.1651 15.6444 18.1985 15.8092 18.1929C16.2648 18.1762 16.3926 17.6744 16.3926 17.6744C16.3926 17.6744 18.5222 9.10586 18.5926 7.95771C18.6 7.84475 18.6092 7.77438 18.6092 7.6966C18.6111 7.58919 18.6 7.47993 18.5833 7.42993Z" fill="white" />
                        </svg>
                    </a>
                </div>
                {!location.pathname.includes('/dashboard') && <p>
                    {t('footer:FOOTER_TEXT')}
                </p>}
            </div>
        </div>
        <div className="footer__block-mobile">
            <div className="footer__block-mobile-logo">
                <div>
                    <img src={FooterLogo} alt="footer-logo" />

                    <div className="footer__block-mobile-logo-socials">
                        <a
                            href={
                                i18n.language === 'RU'
                                    ? "https://www.facebook.com/profile.php?id=100086652493278"
                                    : i18n.language === 'UA'
                                        ? "https://www.facebook.com/profile.php?id=100086503100446"
                                        : "https://www.facebook.com/profile.php?id=100086686511713"
                            }
                            target="_blank"
                        >
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26 12.5078C26 5.60411 20.1799 0.0078125 13 0.0078125C5.82015 0.0078125 0 5.60411 0 12.5078C0 18.7467 4.75319 23.9189 10.9681 24.856V16.1208H7.66711V12.5078H10.9681V9.75411C10.9681 6.62078 12.9095 4.89115 15.8793 4.89115C17.3025 4.89115 18.7893 5.13559 18.7893 5.13559V8.21152H17.1504C15.5345 8.21152 15.0319 9.17448 15.0319 10.1634V12.5078H18.6372L18.0613 16.1208H15.0319V24.856C21.2468 23.9189 26 18.7467 26 12.5078Z" fill="#010201" />
                                <path d="M18.0603 16.1207L18.6361 12.5078H15.0327V10.1633C15.0327 9.17445 15.5354 8.21148 17.1512 8.21148H18.7902V5.13556C18.7902 5.13556 17.3034 4.89111 15.8801 4.89111C12.9103 4.89111 10.969 6.62074 10.969 9.75408V12.5078H7.66797V16.1207H10.969V24.8559C11.6315 24.9559 12.3095 25.0078 13.0009 25.0078C13.6923 25.0078 14.3702 24.9559 15.0327 24.8559V16.1207H18.0603Z" fill="white" />
                            </svg>
                        </a>
                        <a
                            href={
                                i18n.language === 'RU'
                                    ? "https://www.instagram.com/truestate_ru/"
                                    : i18n.language === 'UA'
                                        ? "https://www.instagram.com/truestate_ua/"
                                        : "https://www.instagram.com/truestate_eng/"
                            }
                            target="_blank"
                        >
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 25.0078C19.9036 25.0078 25.5 19.4114 25.5 12.5078C25.5 5.60425 19.9036 0.0078125 13 0.0078125C6.09644 0.0078125 0.5 5.60425 0.5 12.5078C0.5 19.4114 6.09644 25.0078 13 25.0078Z" fill="#010201" />
                                <path d="M12.9993 6.05573C15.1011 6.05573 15.3493 6.06313 16.1789 6.10202C16.9456 6.13721 17.3622 6.26498 17.64 6.37239C18.0067 6.51498 18.2696 6.68535 18.5456 6.96128C18.8215 7.23721 18.9919 7.49832 19.1345 7.86684C19.2419 8.14461 19.3696 8.56128 19.4048 9.32795C19.4419 10.1576 19.4511 10.4076 19.4511 12.5076C19.4511 14.6076 19.4437 14.8576 19.4048 15.6872C19.3696 16.4539 19.2419 16.8705 19.1345 17.1483C18.9919 17.515 18.8215 17.7779 18.5456 18.0539C18.2696 18.3298 18.0085 18.5002 17.64 18.6428C17.3622 18.7502 16.9456 18.8779 16.1789 18.9131C15.3493 18.9502 15.1011 18.9594 12.9993 18.9594C10.8974 18.9594 10.6493 18.952 9.81965 18.9131C9.05298 18.8779 8.63631 18.7502 8.35854 18.6428C7.99187 18.5002 7.72891 18.3298 7.45298 18.0539C7.17705 17.7779 7.00668 17.5168 6.86409 17.1483C6.75668 16.8705 6.62891 16.4539 6.59372 15.6872C6.55668 14.8576 6.54742 14.6076 6.54742 12.5076C6.54742 10.4076 6.55483 10.1576 6.59372 9.32795C6.62891 8.56128 6.75668 8.14461 6.86409 7.86684C7.00668 7.50017 7.17705 7.23721 7.45298 6.96128C7.72891 6.68535 7.99002 6.51498 8.35854 6.37239C8.63631 6.26498 9.05298 6.13721 9.81965 6.10202C10.6493 6.06313 10.8974 6.05573 12.9993 6.05573ZM12.9993 4.63721C10.8622 4.63721 10.5937 4.64647 9.75483 4.68536C8.91779 4.72424 8.34557 4.85573 7.84372 5.05202C7.32705 5.25387 6.88817 5.52239 6.44928 5.95943C6.01224 6.39647 5.74187 6.83535 5.54187 7.35387C5.34742 7.85387 5.21409 8.4261 5.1752 9.26499C5.13817 10.102 5.12891 10.3705 5.12891 12.5076C5.12891 14.6446 5.13817 14.9131 5.17705 15.752C5.21594 16.5891 5.34742 17.1613 5.54372 17.6631C5.74557 18.1798 6.01409 18.6187 6.45113 19.0576C6.88817 19.4946 7.32705 19.765 7.84557 19.965C8.34557 20.1594 8.9178 20.2928 9.75668 20.3317C10.5956 20.3705 10.8641 20.3798 13.0011 20.3798C15.1382 20.3798 15.4067 20.3705 16.2456 20.3317C17.0826 20.2928 17.6548 20.1613 18.1567 19.965C18.6734 19.7631 19.1122 19.4946 19.5511 19.0576C19.9882 18.6205 20.2585 18.1817 20.4585 17.6631C20.653 17.1631 20.7863 16.5909 20.8252 15.752C20.8641 14.9131 20.8733 14.6446 20.8733 12.5076C20.8733 10.3705 20.8641 10.102 20.8252 9.26313C20.7863 8.4261 20.6548 7.85387 20.4585 7.35202C20.2567 6.83536 19.9882 6.39647 19.5511 5.95758C19.1141 5.52054 18.6752 5.25017 18.1567 5.05017C17.6567 4.85573 17.0845 4.72239 16.2456 4.6835C15.4048 4.64647 15.1363 4.63721 12.9993 4.63721Z" fill="white" />
                                <path d="M12.9978 8.4668C10.7663 8.4668 8.95703 10.2761 8.95703 12.5075C8.95703 14.739 10.7663 16.5483 12.9978 16.5483C15.2293 16.5483 17.0385 14.739 17.0385 12.5075C17.0385 10.2761 15.2293 8.4668 12.9978 8.4668ZM12.9978 15.1316C11.5496 15.1316 10.3737 13.9575 10.3737 12.5075C10.3737 11.0575 11.5478 9.88346 12.9978 9.88346C14.4478 9.88346 15.6218 11.0575 15.6218 12.5075C15.6218 13.9575 14.4459 15.1316 12.9978 15.1316Z" fill="white" />
                                <path d="M17.2023 9.25022C17.7239 9.25022 18.1467 8.82738 18.1467 8.30577C18.1467 7.78417 17.7239 7.36133 17.2023 7.36133C16.6807 7.36133 16.2578 7.78417 16.2578 8.30577C16.2578 8.82738 16.6807 9.25022 17.2023 9.25022Z" fill="white" />
                            </svg>
                        </a>
                        <a
                            href={
                                i18n.language === 'RU'
                                    ? "https://t.me/truestate_ru"
                                    : i18n.language === 'UA'
                                        ? "https://t.me/truestate_ua"
                                        : "https://t.me/truestate_eng"
                            }
                            target="_blank"
                        >
                            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 25.0078C19.4036 25.0078 25 19.4114 25 12.5078C25 5.60425 19.4036 0.0078125 12.5 0.0078125C5.59644 0.0078125 0 5.60425 0 12.5078C0 19.4114 5.59644 25.0078 12.5 25.0078Z" fill="#010201" />
                                <path d="M18.5833 7.42993C18.5352 7.29105 18.4778 7.25216 18.3889 7.21882C18.1944 7.14475 17.8648 7.25586 17.8648 7.25586C17.8648 7.25586 6.18146 11.454 5.5148 11.9207C5.37035 12.0207 5.3222 12.0781 5.29998 12.1466C5.18517 12.4781 5.54443 12.6244 5.54443 12.6244L8.55554 13.6059C8.55554 13.6059 8.6685 13.6225 8.70739 13.5966C9.39257 13.1633 15.6 9.24475 15.9574 9.11327C16.0148 9.0966 16.0555 9.11512 16.0444 9.15401C15.9018 9.65771 10.5111 14.4485 10.5111 14.4485C10.5111 14.4485 10.4907 14.4744 10.4778 14.504L10.4704 14.5003L10.1889 17.4873C10.1889 17.4873 10.0704 18.4022 10.987 17.4873C11.6333 16.841 12.2574 16.3022 12.5704 16.0392C13.6055 16.754 14.7204 17.5447 15.2 17.9577C15.4407 18.1651 15.6444 18.1985 15.8092 18.1929C16.2648 18.1762 16.3926 17.6744 16.3926 17.6744C16.3926 17.6744 18.5222 9.10586 18.5926 7.95771C18.6 7.84475 18.6092 7.77438 18.6092 7.6966C18.6111 7.58919 18.6 7.47993 18.5833 7.42993Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>

                <ul className="footer__block-mobile-logo-info">
                    <li>
                        <a target="_blank" href={PrivacyPolicyDoc}>
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href={
                            i18n.language === 'EN'
                                ? `${WhitePapperEn}#page=1`
                                : i18n.language === 'RU'
                                    ? `${WhitePapperRu}#page=1`
                                    : `${WhitePapperUa}#page=1`
                        } >
                            White paper
                        </a>
                    </li>
                    <li className="footer__block-mobile-logo-info__contacts">
                        <a onClick={handleOpenWindowContacts}>
                            {t('footer:FOOTER_CONTACTS')}
                        </a>

                        {openWidnowContacts && <div className="footer__block-mobile-logo-info__contacts-window"
                            style={i18n.language === 'RU' ? { width: 370 } : i18n.language === 'EN' ? { width: 250 } : { width: 370 }}
                        >
                            <svg className="close-btn" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                                onClick={() => setOpenWindowContacts(false)}
                            >
                                <path d="M1 1.47607L26 26.4761" stroke="#9b9b9b" strokeWidth="2" strokeLinecap="round" />
                                <path d="M1 26.4761L26 1.47609" stroke="#9b9b9b" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <h3>
                                {t('footer:FOOTER_WINDOW_CONTACTS_TITLE')}
                            </h3>
                            <div>
                                <p>
                                    {t('footer:FOOTER_WINDOW_CONTACTS_TEXT_1')}
                                    <span>question@tru.estate</span>
                                </p>
                                <p>
                                    {t('footer:FOOTER_WINDOW_CONTACTS_TEXT_2')}
                                    <a href={
                                        i18n.language === 'RU'
                                            ? "https://t.me/truestate_ru"
                                            : i18n.language === 'UA'
                                                ? "https://t.me/truestate_ua"
                                                : "https://t.me/truestate_eng"
                                    }
                                        target="_blank"
                                    >
                                        Telegram
                                    </a>
                                </p>
                                <p>
                                    {t('footer:FOOTER_WINDOW_CONTACTS_TEXT_3')}
                                    <span onClick={scrollToTop}>{t('footer:FOOTER_WINDOW_CONTACTS_TEXT_4')}</span>
                                    {t('footer:FOOTER_WINDOW_CONTACTS_TEXT_5')}
                                </p>
                            </div>
                        </div>}
                    </li>
                </ul>
            </div>
            <div className="footer__block-mobile-text">
                ⓒ Truestate 2022
            </div>
            <div className="footer__block-mobile-desc">
                {!location.pathname.includes('/dashboard') && <p>
                    {t('footer:FOOTER_TEXT')}
                </p>}
            </div>
        </div>
    </footer>
}

export default Footer;