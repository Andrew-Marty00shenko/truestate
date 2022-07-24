import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import "./SectionSix.scss";

const SectionSix = () => {
    const { t } = useTranslation();

    return <section className="section-six">
        <h2>
            {t('landing:SECTION_SIX_TITLE')}
        </h2>
        <Container fluid>
            <Row className="justify-content-between">
                <Col lg={6} className="section-six__item">
                    <h3>
                        {t('landing:SECTION_SIX_STEP')} 1.
                    </h3>
                    <p>
                        {t('landing:SECTION_SIX_STEP_1_TEXT')}
                    </p>
                </Col>
                <Col lg={6} className="section-six__item">
                    <h3>
                        {t('landing:SECTION_SIX_STEP')} 2.
                    </h3>
                    <p>
                        {t('landing:SECTION_SIX_STEP_2_TEXT')} <span>{t('landing:SECTION_SIX_STEP_2_HREF')}</span>).
                    </p>
                </Col>
                <Col lg={6} className="section-six__item">
                    <h3>
                        {t('landing:SECTION_SIX_STEP')} 3.
                    </h3>
                    <p>
                        {t('landing:SECTION_SIX_STEP_3_TEXT')}
                    </p>
                </Col>
                <Col lg={6} className="section-six__item">
                    <h3>
                        {t('landing:SECTION_SIX_STEP')} 4.
                    </h3>
                    <p>
                        {t('landing:SECTION_SIX_STEP_4_TEXT')} <span>{t('landing:SECTION_SIX_STEP_4_HREF')}</span>).
                    </p>
                </Col>
            </Row>
        </Container>
    </section>
}

export default SectionSix;