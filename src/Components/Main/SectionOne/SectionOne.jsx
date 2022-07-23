import { useState } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import ModalOne from "./ModalOne/ModalOne";

import Logo from "../../../assets/images/logo.svg";
import "./SectionOne.scss";

const SectionOne = () => {
    const { t } = useTranslation();
    const [modalShow, setModalShow] = useState(false);

    return <section className="section-one">
        <img src={Logo} alt="logo" />
        <h1>
            {t('landing:SECTION_ONE_TITLE_WORD_1')} <br />
            {t('landing:SECTION_ONE_TITLE_WORD_2')} <br />
            {t('landing:SECTION_ONE_TITLE_WORD_3')}
        </h1>
        <div className="section-one__block">
            <p>
                {t('landing:SECTION_ONE_TEXT_WORD_1')} <br />
                {t('landing:SECTION_ONE_TEXT_WORD_2')}
            </p>
            <Button onClick={() => setModalShow(true)}
                className="button-pulse"
            >
                {t('landing:SECTION_ONE_BUTTON')}
            </Button>
        </div>


        <ModalOne
            show={modalShow}
            setModalShow={setModalShow}
        />
    </section>
}

export default SectionOne;