import { Container, Row, Col } from "react-bootstrap";
import { Element } from "react-scroll";

import Button from "../../Button/Button";

import SectionTwoImage from "../../../assets/images/section-two-image.png";
import ListStyle from "../../../assets/images/list-style.png";
import "./SectionTwo.scss";

const SectionTwo = () => {
    return <section className="section-two">
        <Element name="about" />
        <h2>
            Что такое TRUESTATE?
        </h2>
        <Container fluid className="section-two__container-top">
            <Row className="section-two__top">
                <Col lg={5} className="section-two__top-left-block">
                    <h3>
                        TRUESTATE — это криптовалютный проект, позволяющий инвестировать
                        в недвижимость в Европе не выходя из дома!
                    </h3>
                    <p>
                        Больше никаких дополнительных затрат, бумажной волокиты и огромных вложений:
                        с TRUESTATE процесс инвестирования становится быстрым и простым!
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
                                    Минимальный размер инвестиций: от €100
                                </span>
                            </div>
                        </Col>
                        <Col sm={6} >
                            <div className="block">
                                <p>
                                    02
                                </p>
                                <span>
                                    Доходность:
                                    до 48%*  **
                                </span>
                            </div>
                        </Col>
                        <Col sm={6} >
                            <div className="block">
                                <p>
                                    03
                                </p>
                                <span>
                                    Вложение средств
                                    и получение прибыли
                                    в пару кликов
                                </span>
                            </div>
                        </Col>
                        <Col sm={6} >
                            <div className="block">
                                <p>
                                    04
                                </p>
                                <span>
                                    Смартконтракт вместо «тонны бумаг»
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <p className="section-two__top-subtext">
                * за срок реализации проекта
            </p>
        </Container>
        <Container fluid className="section-two__container-bottom">
            <Row className="section-two__bottom">
                <Col lg={5} className="section-two__bottom-left-block">
                    <h3>
                        Прибыльность объектов TRUESTATE достигает 48% ** за счет:
                    </h3>
                    <ul>
                        <li>
                            <img src={ListStyle} alt="list-style" />
                            Приобретения недвижимости по низким ценам (аукционы и предложения off market);
                        </li>
                        <li>
                            <img src={ListStyle} alt="list-style" />
                            Ремонта и увеличения площади объектов, что увеличивает их конечную стоимость;
                        </li>
                        <li>
                            <img src={ListStyle} alt="list-style" />
                            Постоянного роста цен на рынке на 7-14%;
                        </li>
                        <li>
                            <img src={ListStyle} alt="list-style" />
                            Самых выгодных на рынке цен на ремонтные работы и отделочные материалы.
                        </li>
                    </ul>
                    <Button text={'Инвестировать'} showIcon />
                </Col>
                <Col lg={7} className="section-two__bottom-right-block">
                    <img src={SectionTwoImage} alt="section-two" />
                </Col>
            </Row>
        </Container>
    </section >
}

export default SectionTwo;