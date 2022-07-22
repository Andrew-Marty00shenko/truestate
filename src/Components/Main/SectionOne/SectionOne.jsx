import { useState } from "react";
import { Button } from "react-bootstrap";

import ModalOne from "./ModalOne/ModalOne";

import Logo from "../../../assets/images/logo.svg";
import "./SectionOne.scss";

const SectionOne = () => {
    const [modalShow, setModalShow] = useState(false);

    return <section className="section-one">
        <img src={Logo} alt="logo" />
        <h1>
            Инвестиции <br />
            в европейскую
            недвижимость <br />
            в криптовалюте
        </h1>
        <div className="section-one__block">
            <p>
                В несколько кликов. <br />
                Просто. Прибыльно. Безопасно.
            </p>
            <Button onClick={() => setModalShow(true)}
                className="button-pulse"
            >
                Рассчитай твою прибыль
            </Button>
        </div>


        <ModalOne
            show={modalShow}
            setModalShow={setModalShow}
        />
    </section>
}

export default SectionOne;