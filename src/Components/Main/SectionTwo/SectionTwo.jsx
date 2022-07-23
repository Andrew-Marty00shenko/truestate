import { Container, Row, Col } from "react-bootstrap";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

import Button from "../../Button/Button";

import SectionTwoImage from "../../../assets/images/section-two-image.png";
import ListStyle from "../../../assets/images/list-style.png";
import "./SectionTwo.scss";

const SectionTwo = () => {
    const { t } = useTranslation();

    return <section className="section-two">
        <Element name="about" />
        <h2>
            {t('landing:SECTION_TWO_TITLE')}
        </h2>
        <Container fluid className="section-two__container-top">
            <Row className="section-two__top">
                <Col lg={5} className="section-two__top-left-block">
                    <h3>
                        {t('landing:SECTION_TWO_TEXT_1')}
                    </h3>
                    <p>
                        {t('landing:SECTION_TWO_TEXT_2')}
                    </p>
                </Col>
                <Col lg={7} className="section-two__top-right-block">
                    <Row>
                        <Col sm={6} >
                            <div className="block">
                                <p>
                                    01
                                </p>
                                <span>
                                    {t('landing:SECTION_TWO_BLOCK_1_TEXT')}
                                </span>
                            </div>
                        </Col>
                        <Col sm={6} >
                            <div className="block">
                                <p>
                                    02
                                </p>
                                <span>
                                    {t('landing:SECTION_TWO_BLOCK_2_TEXT')}
                                </span>
                            </div>
                        </Col>
                        <Col sm={6} >
                            <div className="block">
                                <p>
                                    03
                                </p>
                                <span>
                                    {t('landing:SECTION_TWO_BLOCK_3_TEXT')}
                                </span>
                            </div>
                        </Col>
                        <Col sm={6} >
                            <div className="block">
                                <p>
                                    04
                                </p>
                                <span>
                                    {t('landing:SECTION_TWO_BLOCK_4_TEXT')}
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <p className="section-two__top-subtext">
                {t('landing:SECTION_TWO_SUBTEXT')}
            </p>
        </Container>
        <Container fluid className="section-two__container-bottom">
            <Row className="section-two__bottom">
                <Col lg={5} className="section-two__bottom-left-block">
                    <h3>
                        {t('landing:SECTION_TWO_TITLE_2')}
                    </h3>
                    <ul>
                        <li>
                            <img src={ListStyle} alt="list-style" />
                            {t('landing:SECTION_TWO_BENEFIT_1')}
                        </li>
                        <li>
                            <img src={ListStyle} alt="list-style" />
                            {t('landing:SECTION_TWO_BENEFIT_2')}
                        </li>
                        <li>
                            <img src={ListStyle} alt="list-style" />
                            {t('landing:SECTION_TWO_BENEFIT_3')}
                        </li>
                        <li>
                            <img src={ListStyle} alt="list-style" />
                            {t('landing:SECTION_TWO_BENEFIT_4')}
                        </li>
                    </ul>
                    <Button text={t('landing:SECTION_TWO_BUTTON')} showIcon />
                </Col>
                <Col lg={7} className="section-two__bottom-right-block">
                    <img src={SectionTwoImage} alt="section-two" />
                </Col>
            </Row>
        </Container>
    </section >
}

export default SectionTwo;