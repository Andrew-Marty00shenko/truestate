import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import countries from "i18n-iso-countries";

import "./Documents.scss";
import kycDataAPI from "../../../API/kycDataAPI";
import { toast } from "react-toastify";
import { getBase64 } from "../../../Utils/helpers/getBase64";

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
countries.registerLocale(require('i18n-iso-countries/langs/ru.json'));
countries.registerLocale(require('i18n-iso-countries/langs/uk.json'));

const Documents = () => {
    const { t, i18n } = useTranslation();
    const { register, watch, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const allFields = watch();
    const url = 'https://topmail.net.ua:8443';

    const [passportValue, setPassportValue] = useState('');
    const [idValue, setIdValue] = useState('');
    const [poaValue, setPoaValue] = useState('');
    const [activeCountries, setActiveCountries] = useState(null);
    const [kycData, setKycData] = useState(null);
    const [passportFiles, setPassportFiles] = useState([]);
    const [idFiles, setIdFiles] = useState([]);
    const [poaFiles, setPoaFiles] = useState([]);
    const [updated, setUpdated] = useState(false);
    const [loading, setLoading] = useState(false);
    const isAuth = useSelector(state => state.user.isAuth);

    useEffect(() => {
        setActiveCountries(countries.getNames(i18n.language === 'UA' ?
            'uk' :
            i18n.language.toLocaleLowerCase())
        );
    }, [t]);

    useEffect(() => {
        if (!isAuth) {
            navigate('/dashboard/login')
        };

        kycDataAPI.getKycData()
            .then(({ data }) => {
                reset({
                    passport: data.data.filter(d => d.doctype === 'passport')[0]?.doctype,
                    countryPassport: data.data.filter(d => d.doctype === 'passport' && d.country)[0]?.country,
                    id: data.data.filter(d => d.doctype === 'id')[0]?.doctype,
                    countryId: data.data.filter(d => d.doctype === 'id' && d.country)[0]?.country,
                    poa: data.data.filter(d => d.doctype === 'poa')[0]?.doctype,
                    countryPoa: data.data.filter(d => d.doctype === 'poa' && d.country)[0]?.country,
                });
                setKycData({
                    passportFiles: data.data.filter(d => d.doctype === 'passport')[0]?.urls,
                    passportCountry: data.data.filter(d => d.doctype === 'passport' && d.country)[0]?.country,
                    idFiles: data.data.filter(d => d.doctype === 'id')[0]?.urls,
                    poaFiles: data.data.filter(d => d.doctype === 'poa')[0]?.urls,
                    poaCountry: data.data.filter(d => d.doctype === 'poa' && d.country)[0]?.country,
                    reason: data.reason,
                    status: data.status
                });
                setUpdated(false);
            })
    }, [updated]);

    useEffect(() => {
        if (allFields) {
            setPassportValue(allFields.passport);
            setPoaValue(allFields.poa);
            setIdValue(allFields.id);
        }
    }, [allFields]);

    const handleRemoveDoc = doc => {
        if (window.confirm(t('documents:DOCUMENT_REMOVE_CONFIRMATION'))) {
            if (kycData?.status === 2) {
                toast.error(t('documents:ERROR_REMOVE_DOCS'));
            } else {
                kycDataAPI.deleteDocument(doc)
                    .then(({ data }) => {
                        if (data.success) {
                            toast.success(t('documents:DOCUMENT_REMOVED'));
                            setUpdated(true);
                        };
                    }).catch(err => toast.error(err));
            }
        };
    };

    const handleChangeDoc = (e, doc) => {
        let file = e.target.files[0];

        getBase64(file)
            .then(result => {
                file["base64"] = result;

                if (doc === 'passport') {
                    setPassportFiles([
                        {
                            filename: file.name,
                            contents: result.split(',')[1]
                        }
                    ]);
                };

                if (doc === 'id') {
                    setIdFiles([
                        {
                            filename: file.name,
                            contents: result.split(',')[1]
                        }
                    ]);
                };

                if (doc === 'poa') {
                    setPoaFiles([
                        {
                            filename: file.name,
                            contents: result.split(',')[1]
                        }
                    ]);
                };
            });
    };

    const onSubmit = data => {
        setLoading(true);
        kycDataAPI.sendKycData({
            doctype: 'passport',
            country: data.countryPassport,
            files: passportFiles
        }).then(({ data }) => {
            toast.success(t('documents:SUCCESS_SEND'));
            setUpdated(true);
            setLoading(false);
        });

        kycDataAPI.sendKycData({
            doctype: 'id',
            country: data.countryId,
            files: idFiles
        }).then(({ data }) => {
            toast.success(t('documents:SUCCESS_SEND'));
            setUpdated(true);
            setLoading(false);
        });

        kycDataAPI.sendKycData({
            doctype: 'poa',
            country: data.countryPoa,
            files: poaFiles
        }).then(({ data }) => {
            toast.success(t('documents:SUCCESS_SEND'));
            setUpdated(true);
            setLoading(false);
        });
    };

    return <form className="documents"
        onSubmit={handleSubmit(onSubmit)}
    >
        <div className="documents-width">
            <div className="documents__block">
                <div className={classNames("documents__block-file", {
                    "error": errors?.passport
                })} >
                    {!kycData?.passportFiles
                        ? (
                            <>
                                <label htmlFor="passport">
                                    <input
                                        {...register("passport", {
                                            required: true,
                                            onChange: e => handleChangeDoc(e, 'passport')
                                        })}

                                        type="file"
                                        id="passport"
                                    />
                                    <svg width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.82669 8.93828C5.8256 7.20813 6.80585 5.46653 7.8284 3.75069C9.12038 1.582 11.0528 0.557362 13.5788 0.725936C16.2655 0.905061 18.5873 3.12795 18.9472 5.79321C19.1363 7.19619 18.8745 8.50401 18.1735 9.72279C16.3732 12.8526 14.5706 15.9805 12.7573 19.1028C11.5716 21.145 9.16794 21.8193 7.10369 20.7072C5.12314 19.64 4.39759 17.0808 5.54792 15.0446C7.03291 12.4161 8.56057 9.81155 10.0718 7.19752C10.1157 7.12139 10.1724 7.04732 10.2387 6.99006C10.4076 6.84272 10.596 6.83409 10.782 6.95872C10.9695 7.08421 11.0271 7.26542 10.9538 7.47523C10.9157 7.58391 10.8507 7.68375 10.7927 7.78426C9.3283 10.3218 7.86121 12.8571 6.3998 15.3964C5.56837 16.8411 5.82592 18.4826 7.03749 19.5437C8.41769 20.7526 10.5919 20.5217 11.6877 19.0485C11.7892 18.912 11.8867 18.7719 11.9717 18.6246C13.7693 15.5145 15.5807 12.4116 17.3559 9.28855C18.4214 7.41436 18.3685 5.53807 17.1473 3.7383C15.453 1.24144 11.6976 0.881154 9.55913 3.01098C9.20133 3.36702 8.87816 3.77823 8.62422 4.21347C6.65216 7.59577 4.69685 10.9871 2.74524 14.3812C1.20633 17.0582 1.53046 20.2137 3.56707 22.524C5.58938 24.8188 9.1763 25.4527 11.8654 24.0064C13.0829 23.3519 14.0221 22.4265 14.7094 21.2336C16.3246 18.4315 17.9432 15.6314 19.5601 12.8309C19.8049 12.4069 20.036 12.2922 20.3135 12.4564C20.5875 12.6186 20.598 12.8675 20.3486 13.2994C18.7404 16.085 17.1314 18.8694 15.5247 21.6559C14.3001 23.7792 12.4961 25.1156 10.0816 25.5693C8.09563 25.9427 6.21825 25.58 4.51473 24.489C2.36236 23.1103 1.15912 21.1205 0.901005 18.583C0.731973 16.9183 1.11663 15.3643 1.95042 13.919C2.90911 12.2585 3.86751 10.5985 4.82669 8.93828Z" fill="black" stroke="black" strokeWidth="0.744038" />
                                    </svg>
                                    <span>
                                        {passportValue?.length === 0 && t('documents:Passport')}
                                        {passportValue?.length > 0 && passportValue[0].name}
                                    </span>
                                </label>
                                <div>
                                    {errors?.passport && <p style={{ color: "#ff0000", marginTop: 18 }}>
                                        {t('dataInput:INPUT_ERROR')}
                                    </p>}
                                </div>
                            </>
                        ) : (
                            <div>
                                <img src={`${url}${kycData.passportFiles[0]}`} alt="" />
                                <svg
                                    onClick={() => handleRemoveDoc("passport")}
                                    width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.61694 0.0916104C7.29836 0.20163 7.00209 0.475629 6.84622 0.804321C6.73727 1.03408 6.73044 1.10249 6.73 1.96409L6.72951 2.8797H4.29677C1.62661 2.8797 1.56713 2.88527 1.17076 3.1724C0.816284 3.42921 0.700209 3.65013 0.328008 4.7766C0.0239768 5.69675 -0.0173843 5.86425 0.00517629 6.08321C0.0380406 6.40145 0.178629 6.67804 0.411463 6.8825C0.673498 7.11255 0.886163 7.18634 1.36814 7.21437L1.79342 7.23912L1.82023 7.43997C1.83498 7.55048 2.12211 11.0689 2.45837 15.2587C2.79459 19.4486 3.0908 22.9975 3.11659 23.1452C3.26909 24.0184 4.03156 24.783 4.91738 24.951C5.0859 24.9829 7.03017 25.0005 10.3375 25C14.6395 24.9993 15.55 24.9874 15.8271 24.9287C16.2211 24.8452 16.6566 24.5953 16.9668 24.2745C17.1942 24.0394 17.4869 23.4892 17.5417 23.194C17.5705 23.0388 18.8396 7.51127 18.8399 7.31125C18.84 7.24308 18.8826 7.22579 19.0508 7.22579C19.4489 7.22579 19.7696 7.09331 20.0374 6.81833C20.5033 6.33987 20.5093 6.07305 20.0828 4.78055C19.7373 3.73349 19.5881 3.45133 19.2407 3.18779C18.842 2.88532 18.7851 2.8797 16.1209 2.8797H13.7126V2.1562C13.7126 1.75826 13.6891 1.30227 13.6603 1.14293C13.5719 0.652842 13.253 0.26648 12.7954 0.0952729C12.5508 0.0037608 12.4119 -0.00131779 10.207 0.000196018C8.07401 0.00166099 7.8551 0.00937653 7.61694 0.0916104ZM12.2476 2.17163V2.8797H10.221H8.19448V2.17163V1.46356H10.221H12.2476V2.17163ZM18.6162 5.01617C18.7393 5.38549 18.84 5.70412 18.84 5.72424C18.84 5.74436 14.9505 5.76082 10.1966 5.76082C5.44277 5.76082 1.55326 5.75442 1.55326 5.74656C1.55326 5.71052 1.98831 4.44024 2.016 4.39536C2.03749 4.36064 4.62248 4.34468 10.2199 4.34468H18.3924L18.6162 5.01617ZM17.3747 7.28683C17.3746 7.32043 17.0904 10.8566 16.7432 15.145C16.2767 20.9074 16.0931 22.9781 16.04 23.0802C15.9468 23.2595 15.7742 23.4184 15.6016 23.4837C15.5074 23.5194 13.8468 23.5358 10.3259 23.5358H5.18757L4.96968 23.426C4.53532 23.207 4.61545 23.8357 3.92574 15.2343C3.5887 11.0311 3.30132 7.50966 3.28711 7.40891L3.26123 7.22579H10.3181C15.9312 7.22579 17.3749 7.23829 17.3747 7.28683ZM5.50371 8.21616C5.41245 8.2774 5.2952 8.40642 5.24314 8.50281L5.14846 8.67807L5.51719 15.4439C5.92201 22.8723 5.8745 22.3787 6.20812 22.6273C6.39955 22.77 6.81531 22.77 7.00673 22.6273C7.23585 22.4565 7.32634 22.2514 7.32268 21.9109C7.32082 21.7437 7.16226 18.7063 6.97025 15.1611C6.58579 8.06205 6.62037 8.41076 6.28113 8.20391C6.05635 8.06688 5.71814 8.07221 5.50371 8.21616ZM9.81484 8.20391C9.71723 8.26343 9.61502 8.3881 9.55779 8.51751C9.46496 8.72744 9.46305 8.88649 9.47565 15.4957C9.48849 22.2405 9.48884 22.2594 9.58924 22.3939C9.77348 22.6406 9.93927 22.7301 10.2124 22.7301C10.5152 22.7301 10.7577 22.582 10.8614 22.3337C10.918 22.1982 10.9291 21.0628 10.9289 15.3946C10.9288 8.71826 10.9273 8.61517 10.8317 8.45837C10.6237 8.11728 10.151 7.99896 9.81484 8.20391ZM14.1136 8.2063C13.9 8.34699 13.8018 8.55106 13.7761 8.90832C13.7644 9.07068 13.6047 12.1001 13.4211 15.6404C13.1928 20.0443 13.1017 22.129 13.1326 22.241C13.222 22.5649 13.6591 22.8153 13.99 22.7323C14.1804 22.6844 14.3863 22.5246 14.4727 22.3576C14.5333 22.2404 14.6132 20.9663 14.8896 15.708C15.0777 12.1306 15.2245 9.04412 15.2158 8.84933C15.2009 8.51536 15.1898 8.48489 15.0203 8.31549C14.8617 8.15678 14.8076 8.13373 14.5574 8.11821C14.3294 8.10404 14.2428 8.12123 14.1136 8.2063Z" fill="black" />
                                </svg>
                            </div>
                        )}
                </div>
                <div>
                    <Form.Select
                        {...register("countryPassport", {
                            validate: value => value !== ''
                        })}
                        className={classNames("documents__block-select", { "error": errors?.countryPassport })}
                    >
                        <option value="" disabled selected>{t('documents:CHOOSE_COUNTRY')}</option>
                        <option value={kycData?.passportCountry}>{kycData?.passportCountry}</option>
                        {activeCountries && Object.keys(activeCountries).map(countryId => {
                            return <option
                                key={countryId}
                                value={activeCountries[countryId]}
                            >
                                {activeCountries[countryId]}
                            </option>
                        })}
                    </Form.Select>
                    {errors?.countryPassport && <p style={{ color: "#ff0000", marginTop: 5 }}>
                        {t('dataInput:INPUT_ERROR')}
                    </p>}
                </div>
            </div>
            <div className="documents__block">
                <div className={classNames("documents__block-file", {
                    "error": errors?.id
                })} >
                    {!kycData?.idFiles
                        ? (
                            <>
                                <label htmlFor="id">
                                    <input type="file"
                                        id="id"
                                        {...register("id", {
                                            onChange: e => handleChangeDoc(e, 'id')
                                        })}
                                    />
                                    <svg width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.82669 8.93828C5.8256 7.20813 6.80585 5.46653 7.8284 3.75069C9.12038 1.582 11.0528 0.557362 13.5788 0.725936C16.2655 0.905061 18.5873 3.12795 18.9472 5.79321C19.1363 7.19619 18.8745 8.50401 18.1735 9.72279C16.3732 12.8526 14.5706 15.9805 12.7573 19.1028C11.5716 21.145 9.16794 21.8193 7.10369 20.7072C5.12314 19.64 4.39759 17.0808 5.54792 15.0446C7.03291 12.4161 8.56057 9.81155 10.0718 7.19752C10.1157 7.12139 10.1724 7.04732 10.2387 6.99006C10.4076 6.84272 10.596 6.83409 10.782 6.95872C10.9695 7.08421 11.0271 7.26542 10.9538 7.47523C10.9157 7.58391 10.8507 7.68375 10.7927 7.78426C9.3283 10.3218 7.86121 12.8571 6.3998 15.3964C5.56837 16.8411 5.82592 18.4826 7.03749 19.5437C8.41769 20.7526 10.5919 20.5217 11.6877 19.0485C11.7892 18.912 11.8867 18.7719 11.9717 18.6246C13.7693 15.5145 15.5807 12.4116 17.3559 9.28855C18.4214 7.41436 18.3685 5.53807 17.1473 3.7383C15.453 1.24144 11.6976 0.881154 9.55913 3.01098C9.20133 3.36702 8.87816 3.77823 8.62422 4.21347C6.65216 7.59577 4.69685 10.9871 2.74524 14.3812C1.20633 17.0582 1.53046 20.2137 3.56707 22.524C5.58938 24.8188 9.1763 25.4527 11.8654 24.0064C13.0829 23.3519 14.0221 22.4265 14.7094 21.2336C16.3246 18.4315 17.9432 15.6314 19.5601 12.8309C19.8049 12.4069 20.036 12.2922 20.3135 12.4564C20.5875 12.6186 20.598 12.8675 20.3486 13.2994C18.7404 16.085 17.1314 18.8694 15.5247 21.6559C14.3001 23.7792 12.4961 25.1156 10.0816 25.5693C8.09563 25.9427 6.21825 25.58 4.51473 24.489C2.36236 23.1103 1.15912 21.1205 0.901005 18.583C0.731973 16.9183 1.11663 15.3643 1.95042 13.919C2.90911 12.2585 3.86751 10.5985 4.82669 8.93828Z" fill="black" stroke="black" strokeWidth="0.744038" />
                                    </svg>
                                    <span>
                                        {idValue?.length === 0 && t('documents:ID')}
                                        {idValue?.length > 0 && idValue[0].name}
                                    </span>
                                </label>
                                <div>
                                    {errors?.id && <p style={{ color: "#ff0000", marginTop: 18 }}>
                                        {t('dataInput:INPUT_ERROR')}
                                    </p>}
                                </div>
                            </>
                        ) : (
                            <div>
                                <img src={`${url}${kycData.idFiles[0]}`} alt="" />
                                <svg
                                    onClick={() => handleRemoveDoc("id")}
                                    width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.61694 0.0916104C7.29836 0.20163 7.00209 0.475629 6.84622 0.804321C6.73727 1.03408 6.73044 1.10249 6.73 1.96409L6.72951 2.8797H4.29677C1.62661 2.8797 1.56713 2.88527 1.17076 3.1724C0.816284 3.42921 0.700209 3.65013 0.328008 4.7766C0.0239768 5.69675 -0.0173843 5.86425 0.00517629 6.08321C0.0380406 6.40145 0.178629 6.67804 0.411463 6.8825C0.673498 7.11255 0.886163 7.18634 1.36814 7.21437L1.79342 7.23912L1.82023 7.43997C1.83498 7.55048 2.12211 11.0689 2.45837 15.2587C2.79459 19.4486 3.0908 22.9975 3.11659 23.1452C3.26909 24.0184 4.03156 24.783 4.91738 24.951C5.0859 24.9829 7.03017 25.0005 10.3375 25C14.6395 24.9993 15.55 24.9874 15.8271 24.9287C16.2211 24.8452 16.6566 24.5953 16.9668 24.2745C17.1942 24.0394 17.4869 23.4892 17.5417 23.194C17.5705 23.0388 18.8396 7.51127 18.8399 7.31125C18.84 7.24308 18.8826 7.22579 19.0508 7.22579C19.4489 7.22579 19.7696 7.09331 20.0374 6.81833C20.5033 6.33987 20.5093 6.07305 20.0828 4.78055C19.7373 3.73349 19.5881 3.45133 19.2407 3.18779C18.842 2.88532 18.7851 2.8797 16.1209 2.8797H13.7126V2.1562C13.7126 1.75826 13.6891 1.30227 13.6603 1.14293C13.5719 0.652842 13.253 0.26648 12.7954 0.0952729C12.5508 0.0037608 12.4119 -0.00131779 10.207 0.000196018C8.07401 0.00166099 7.8551 0.00937653 7.61694 0.0916104ZM12.2476 2.17163V2.8797H10.221H8.19448V2.17163V1.46356H10.221H12.2476V2.17163ZM18.6162 5.01617C18.7393 5.38549 18.84 5.70412 18.84 5.72424C18.84 5.74436 14.9505 5.76082 10.1966 5.76082C5.44277 5.76082 1.55326 5.75442 1.55326 5.74656C1.55326 5.71052 1.98831 4.44024 2.016 4.39536C2.03749 4.36064 4.62248 4.34468 10.2199 4.34468H18.3924L18.6162 5.01617ZM17.3747 7.28683C17.3746 7.32043 17.0904 10.8566 16.7432 15.145C16.2767 20.9074 16.0931 22.9781 16.04 23.0802C15.9468 23.2595 15.7742 23.4184 15.6016 23.4837C15.5074 23.5194 13.8468 23.5358 10.3259 23.5358H5.18757L4.96968 23.426C4.53532 23.207 4.61545 23.8357 3.92574 15.2343C3.5887 11.0311 3.30132 7.50966 3.28711 7.40891L3.26123 7.22579H10.3181C15.9312 7.22579 17.3749 7.23829 17.3747 7.28683ZM5.50371 8.21616C5.41245 8.2774 5.2952 8.40642 5.24314 8.50281L5.14846 8.67807L5.51719 15.4439C5.92201 22.8723 5.8745 22.3787 6.20812 22.6273C6.39955 22.77 6.81531 22.77 7.00673 22.6273C7.23585 22.4565 7.32634 22.2514 7.32268 21.9109C7.32082 21.7437 7.16226 18.7063 6.97025 15.1611C6.58579 8.06205 6.62037 8.41076 6.28113 8.20391C6.05635 8.06688 5.71814 8.07221 5.50371 8.21616ZM9.81484 8.20391C9.71723 8.26343 9.61502 8.3881 9.55779 8.51751C9.46496 8.72744 9.46305 8.88649 9.47565 15.4957C9.48849 22.2405 9.48884 22.2594 9.58924 22.3939C9.77348 22.6406 9.93927 22.7301 10.2124 22.7301C10.5152 22.7301 10.7577 22.582 10.8614 22.3337C10.918 22.1982 10.9291 21.0628 10.9289 15.3946C10.9288 8.71826 10.9273 8.61517 10.8317 8.45837C10.6237 8.11728 10.151 7.99896 9.81484 8.20391ZM14.1136 8.2063C13.9 8.34699 13.8018 8.55106 13.7761 8.90832C13.7644 9.07068 13.6047 12.1001 13.4211 15.6404C13.1928 20.0443 13.1017 22.129 13.1326 22.241C13.222 22.5649 13.6591 22.8153 13.99 22.7323C14.1804 22.6844 14.3863 22.5246 14.4727 22.3576C14.5333 22.2404 14.6132 20.9663 14.8896 15.708C15.0777 12.1306 15.2245 9.04412 15.2158 8.84933C15.2009 8.51536 15.1898 8.48489 15.0203 8.31549C14.8617 8.15678 14.8076 8.13373 14.5574 8.11821C14.3294 8.10404 14.2428 8.12123 14.1136 8.2063Z" fill="black" />
                                </svg>
                            </div>
                        )}
                </div>
                <div>
                    <Form.Select
                        {...register("countryId")}
                        className={classNames("documents__block-select", { "error": errors?.idCard })}
                    >
                        <option value="" disabled selected>{t('documents:CHOOSE_COUNTRY')}</option>
                        {activeCountries && Object.keys(activeCountries).map(countryId => {
                            return <option
                                key={countryId}
                                value={activeCountries[countryId]}
                            >
                                {activeCountries[countryId]}
                            </option>
                        })}
                    </Form.Select>
                    {errors?.idCard && <p style={{ color: "#ff0000", marginTop: 5 }}>
                        {t('dataInput:INPUT_ERROR')}
                    </p>}
                </div>
            </div>
            <div className="documents__block">
                <div className={classNames("documents__block-file", {
                    "error": errors?.poa
                })} >
                    {!kycData?.poaFiles
                        ? (
                            <>
                                <label htmlFor="address">
                                    <input
                                        {...register("poa", {
                                            validate: value => value.length !== 0,
                                            onChange: e => handleChangeDoc(e, 'poa')
                                        })}
                                        type="file"
                                        id="address"
                                    />
                                    <svg width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.82669 8.93828C5.8256 7.20813 6.80585 5.46653 7.8284 3.75069C9.12038 1.582 11.0528 0.557362 13.5788 0.725936C16.2655 0.905061 18.5873 3.12795 18.9472 5.79321C19.1363 7.19619 18.8745 8.50401 18.1735 9.72279C16.3732 12.8526 14.5706 15.9805 12.7573 19.1028C11.5716 21.145 9.16794 21.8193 7.10369 20.7072C5.12314 19.64 4.39759 17.0808 5.54792 15.0446C7.03291 12.4161 8.56057 9.81155 10.0718 7.19752C10.1157 7.12139 10.1724 7.04732 10.2387 6.99006C10.4076 6.84272 10.596 6.83409 10.782 6.95872C10.9695 7.08421 11.0271 7.26542 10.9538 7.47523C10.9157 7.58391 10.8507 7.68375 10.7927 7.78426C9.3283 10.3218 7.86121 12.8571 6.3998 15.3964C5.56837 16.8411 5.82592 18.4826 7.03749 19.5437C8.41769 20.7526 10.5919 20.5217 11.6877 19.0485C11.7892 18.912 11.8867 18.7719 11.9717 18.6246C13.7693 15.5145 15.5807 12.4116 17.3559 9.28855C18.4214 7.41436 18.3685 5.53807 17.1473 3.7383C15.453 1.24144 11.6976 0.881154 9.55913 3.01098C9.20133 3.36702 8.87816 3.77823 8.62422 4.21347C6.65216 7.59577 4.69685 10.9871 2.74524 14.3812C1.20633 17.0582 1.53046 20.2137 3.56707 22.524C5.58938 24.8188 9.1763 25.4527 11.8654 24.0064C13.0829 23.3519 14.0221 22.4265 14.7094 21.2336C16.3246 18.4315 17.9432 15.6314 19.5601 12.8309C19.8049 12.4069 20.036 12.2922 20.3135 12.4564C20.5875 12.6186 20.598 12.8675 20.3486 13.2994C18.7404 16.085 17.1314 18.8694 15.5247 21.6559C14.3001 23.7792 12.4961 25.1156 10.0816 25.5693C8.09563 25.9427 6.21825 25.58 4.51473 24.489C2.36236 23.1103 1.15912 21.1205 0.901005 18.583C0.731973 16.9183 1.11663 15.3643 1.95042 13.919C2.90911 12.2585 3.86751 10.5985 4.82669 8.93828Z" fill="black" stroke="black" strokeWidth="0.744038" />
                                    </svg>
                                    <span style={i18n.language === "UA" ? {
                                        fontSize: 15
                                    } : null}>
                                        {poaValue?.length === 0 && t('documents:PROOF_OF_ADDRESS')}
                                        {poaValue?.length > 0 && poaValue[0].name}
                                    </span>
                                </label>
                                <div>
                                    {errors?.poa && <p style={{ color: "#ff0000", marginTop: 18 }}>
                                        {t('dataInput:INPUT_ERROR')}
                                    </p>}
                                </div>
                            </>
                        ) : (
                            <div>
                                <img src={`${url}${kycData.poaFiles[0]}`} alt="" />
                                <svg
                                    onClick={() => handleRemoveDoc("poa")}
                                    width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.61694 0.0916104C7.29836 0.20163 7.00209 0.475629 6.84622 0.804321C6.73727 1.03408 6.73044 1.10249 6.73 1.96409L6.72951 2.8797H4.29677C1.62661 2.8797 1.56713 2.88527 1.17076 3.1724C0.816284 3.42921 0.700209 3.65013 0.328008 4.7766C0.0239768 5.69675 -0.0173843 5.86425 0.00517629 6.08321C0.0380406 6.40145 0.178629 6.67804 0.411463 6.8825C0.673498 7.11255 0.886163 7.18634 1.36814 7.21437L1.79342 7.23912L1.82023 7.43997C1.83498 7.55048 2.12211 11.0689 2.45837 15.2587C2.79459 19.4486 3.0908 22.9975 3.11659 23.1452C3.26909 24.0184 4.03156 24.783 4.91738 24.951C5.0859 24.9829 7.03017 25.0005 10.3375 25C14.6395 24.9993 15.55 24.9874 15.8271 24.9287C16.2211 24.8452 16.6566 24.5953 16.9668 24.2745C17.1942 24.0394 17.4869 23.4892 17.5417 23.194C17.5705 23.0388 18.8396 7.51127 18.8399 7.31125C18.84 7.24308 18.8826 7.22579 19.0508 7.22579C19.4489 7.22579 19.7696 7.09331 20.0374 6.81833C20.5033 6.33987 20.5093 6.07305 20.0828 4.78055C19.7373 3.73349 19.5881 3.45133 19.2407 3.18779C18.842 2.88532 18.7851 2.8797 16.1209 2.8797H13.7126V2.1562C13.7126 1.75826 13.6891 1.30227 13.6603 1.14293C13.5719 0.652842 13.253 0.26648 12.7954 0.0952729C12.5508 0.0037608 12.4119 -0.00131779 10.207 0.000196018C8.07401 0.00166099 7.8551 0.00937653 7.61694 0.0916104ZM12.2476 2.17163V2.8797H10.221H8.19448V2.17163V1.46356H10.221H12.2476V2.17163ZM18.6162 5.01617C18.7393 5.38549 18.84 5.70412 18.84 5.72424C18.84 5.74436 14.9505 5.76082 10.1966 5.76082C5.44277 5.76082 1.55326 5.75442 1.55326 5.74656C1.55326 5.71052 1.98831 4.44024 2.016 4.39536C2.03749 4.36064 4.62248 4.34468 10.2199 4.34468H18.3924L18.6162 5.01617ZM17.3747 7.28683C17.3746 7.32043 17.0904 10.8566 16.7432 15.145C16.2767 20.9074 16.0931 22.9781 16.04 23.0802C15.9468 23.2595 15.7742 23.4184 15.6016 23.4837C15.5074 23.5194 13.8468 23.5358 10.3259 23.5358H5.18757L4.96968 23.426C4.53532 23.207 4.61545 23.8357 3.92574 15.2343C3.5887 11.0311 3.30132 7.50966 3.28711 7.40891L3.26123 7.22579H10.3181C15.9312 7.22579 17.3749 7.23829 17.3747 7.28683ZM5.50371 8.21616C5.41245 8.2774 5.2952 8.40642 5.24314 8.50281L5.14846 8.67807L5.51719 15.4439C5.92201 22.8723 5.8745 22.3787 6.20812 22.6273C6.39955 22.77 6.81531 22.77 7.00673 22.6273C7.23585 22.4565 7.32634 22.2514 7.32268 21.9109C7.32082 21.7437 7.16226 18.7063 6.97025 15.1611C6.58579 8.06205 6.62037 8.41076 6.28113 8.20391C6.05635 8.06688 5.71814 8.07221 5.50371 8.21616ZM9.81484 8.20391C9.71723 8.26343 9.61502 8.3881 9.55779 8.51751C9.46496 8.72744 9.46305 8.88649 9.47565 15.4957C9.48849 22.2405 9.48884 22.2594 9.58924 22.3939C9.77348 22.6406 9.93927 22.7301 10.2124 22.7301C10.5152 22.7301 10.7577 22.582 10.8614 22.3337C10.918 22.1982 10.9291 21.0628 10.9289 15.3946C10.9288 8.71826 10.9273 8.61517 10.8317 8.45837C10.6237 8.11728 10.151 7.99896 9.81484 8.20391ZM14.1136 8.2063C13.9 8.34699 13.8018 8.55106 13.7761 8.90832C13.7644 9.07068 13.6047 12.1001 13.4211 15.6404C13.1928 20.0443 13.1017 22.129 13.1326 22.241C13.222 22.5649 13.6591 22.8153 13.99 22.7323C14.1804 22.6844 14.3863 22.5246 14.4727 22.3576C14.5333 22.2404 14.6132 20.9663 14.8896 15.708C15.0777 12.1306 15.2245 9.04412 15.2158 8.84933C15.2009 8.51536 15.1898 8.48489 15.0203 8.31549C14.8617 8.15678 14.8076 8.13373 14.5574 8.11821C14.3294 8.10404 14.2428 8.12123 14.1136 8.2063Z" fill="black" />
                                </svg>
                            </div>
                        )}
                </div>
                <div>
                    <Form.Select
                        {...register("countryPoa", {
                            validate: value => value !== ''
                        })}
                        className={classNames("documents__block-select", { "error": errors?.countryPoa })}
                    >
                        <option value="" disabled selected>{t('documents:CHOOSE_PROOF_OF_ADDRESS')}</option>

                        {kycData?.poaCountry?.toLocaleLowerCase() === t('documents:BANK_STATEMENT').toLocaleLowerCase()
                            ? <>
                                <option value={kycData?.poaCountry}>{kycData?.poaCountry}</option>
                                <option value={t('documents:UTILITY_BILL')} >{t('documents:UTILITY_BILL')}</option>
                            </>
                            : kycData?.poaCountry?.toLocaleLowerCase() === t('documents:UTILITY_BILL').toLocaleLowerCase()
                                ? <>
                                    <option value={kycData?.poaCountry}>{kycData?.poaCountry}</option>
                                    <option value={t('documents:BANK_STATEMENT')} >{t('documents:BANK_STATEMENT')}</option>
                                </>
                                : <>
                                    <option value={t('documents:BANK_STATEMENT')} >{t('documents:BANK_STATEMENT')}</option>
                                    <option value={t('documents:UTILITY_BILL')} >{t('documents:UTILITY_BILL')}</option>
                                </>
                        }
                    </Form.Select>
                    {errors?.countryPoa && <p style={{ color: "#ff0000", marginTop: 5 }}>
                        {t('dataInput:INPUT_ERROR')}
                    </p>}
                </div>
            </div>
            <Button
                type="submit"
                disabled={kycData?.status === 2 || loading}
            >
                {t('documents:SEND')}
                <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.2492 7.60782C35.5849 7.27213 35.5849 6.72787 35.2492 6.39218L29.7788 0.921787C29.4431 0.586097 28.8989 0.586097 28.5632 0.921787C28.2275 1.25748 28.2275 1.80174 28.5632 2.13743L33.4257 7L28.5632 11.8626C28.2275 12.1983 28.2275 12.7425 28.5632 13.0782C28.8989 13.4139 29.4431 13.4139 29.7788 13.0782L35.2492 7.60782ZM0.257812 7.85959H34.6414V6.14041H0.257812V7.85959Z" fill="white" />
                </svg>
            </Button>
        </div>
        <hr />
        <div className="documents__status-block">
            <p>
                {t('documents:STATUS')}: {kycData?.reason === null && kycData?.status === 1
                    ? t('documents:NO_INFO')
                    : kycData?.reason !== null && kycData?.status === 1
                        ? t('documents:NOT_RECIEVED')
                        : kycData?.status === 2
                            ? <>
                                {t('documents:RECIEVED')}
                                <span>
                                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.25" y="7.75" width="12.5" height="12.5" stroke="black" strokeWidth="0.5" />
                                        <path d="M2 11.9908L6.44356 16.4344L16.7677 3.77681" stroke="black" />
                                    </svg>
                                </span>
                            </>
                            : null
                }
            </p>
            <p>
                {kycData?.reason !== null && <span style={{ fontWeight: 500 }}>Комментарий: </span>}
                {kycData?.reason}
            </p>
        </div>
    </form >
}

export default Documents;