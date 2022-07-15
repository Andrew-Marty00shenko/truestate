import { Accordion } from "react-bootstrap";

import Modal from "../Modal/Modal";

import SectionEightImage from "../../../assets/images/section-eight-image.png";
import "./SectionEight.scss";

const SectionEight = ({ openModalAddress, setOpenModalAddress }) => {
    return <section className="section-eight">
        <div className="section-eight__faq">
            <div className="section-eight__faq-image">
                <img src={SectionEightImage} alt="section-eight" />
            </div>
            <div className="section-eight__faq-info">
                <h3>
                    FAQ
                </h3>
                <span>
                    Остались вопросы?
                </span>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Вопрос написан здесь?</Accordion.Header>
                        <Accordion.Body>
                            Здесь будет развернутый ответ, ответ на вопрос будет написан здесь, ответ на вопрос, тут будет развернутый ответ.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Вопрос написан здесь?</Accordion.Header>
                        <Accordion.Body>
                            Здесь будет развернутый ответ, ответ на вопрос будет написан здесь, ответ на вопрос, тут будет развернутый ответ.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Вопрос написан здесь?</Accordion.Header>
                        <Accordion.Body>
                            Здесь будет развернутый ответ, ответ на вопрос будет написан здесь, ответ на вопрос, тут будет развернутый ответ.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Вопрос написан здесь?</Accordion.Header>
                        <Accordion.Body>
                            Здесь будет развернутый ответ, ответ на вопрос будет написан здесь, ответ на вопрос, тут будет развернутый ответ.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Вопрос написан здесь?</Accordion.Header>
                        <Accordion.Body>
                            Здесь будет развернутый ответ, ответ на вопрос будет написан здесь, ответ на вопрос, тут будет развернутый ответ.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Вопрос написан здесь?</Accordion.Header>
                        <Accordion.Body>
                            Здесь будет развернутый ответ, ответ на вопрос будет написан здесь, ответ на вопрос, тут будет развернутый ответ.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Вопрос написан здесь?</Accordion.Header>
                        <Accordion.Body>
                            Здесь будет развернутый ответ, ответ на вопрос будет написан здесь, ответ на вопрос, тут будет развернутый ответ.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>Вопрос написан здесь?</Accordion.Header>
                        <Accordion.Body>
                            Здесь будет развернутый ответ, ответ на вопрос будет написан здесь, ответ на вопрос, тут будет развернутый ответ.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>Вопрос написан здесь?</Accordion.Header>
                        <Accordion.Body>
                            Здесь будет развернутый ответ, ответ на вопрос будет написан здесь, ответ на вопрос, тут будет развернутый ответ.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header>Вопрос написан здесь?</Accordion.Header>
                        <Accordion.Body>
                            Здесь будет развернутый ответ, ответ на вопрос будет написан здесь, ответ на вопрос, тут будет развернутый ответ.
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>
        </div>

        <Modal
            openModalAddress={openModalAddress}
            setOpenModalAddress={setOpenModalAddress}
        />
    </section>
}

export default SectionEight;