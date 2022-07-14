import { Container, Row, Col } from "react-bootstrap";

import "./SectionSix.scss";

const SectionSix = () => {
    return <section className="section-six">
        <h2>
            Как Это Работает?
        </h2>
        <Container fluid>
            <Row className="justify-content-between">
                <Col lg={6} className="section-six__item">
                    <h3>
                        Шаг 1.
                    </h3>
                    <p>
                        Выбери объект на сайте, отправь сумму в ETH со своего кошелька Metamask на указанный под ним адрес.
                    </p>
                </Col>
                <Col lg={6} className="section-six__item">
                    <h3>
                        Шаг 2.
                    </h3>
                    <p>
                        Получи токены TRUESTATE и добавь их в свой кошелёк Metamask (инструкция - <span>здесь</span>).
                    </p>
                </Col>
                <Col lg={6} className="section-six__item">
                    <h3>
                        Шаг 3.
                    </h3>
                    <p>
                        После окончания проекта получи уведомление через email и / или смс.
                    </p>
                </Col>
                <Col lg={6} className="section-six__item">
                    <h3>
                        Шаг 4.
                    </h3>
                    <p>
                        Зайди в личный кабинет на сайте и получи возврат инвестиций и прибыль (инструкция - <span>здесь</span>).
                    </p>
                </Col>
            </Row>
        </Container>
    </section>
}

export default SectionSix;