import { Button } from "react-bootstrap";

import Logo from "../../../assets/images/logo.svg";
import "./SectionOne.scss";

const SectionOne = () => {
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
            <Button>
                Рассчитай твою прибыль
            </Button>
        </div>
    </section>
}

export default SectionOne;