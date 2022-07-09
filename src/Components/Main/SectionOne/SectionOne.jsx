import Button from "../../Button/Button";

import "./SectionOne.scss";

const SectionOne = () => {
    return <section className="section-one">
        <h1>
            Инвестиции
            в европейскую
            недвижимость
            в криптовалюте
        </h1>
        <div className="d-flex justify-content-between align-items-center section-one__block">
            <p>
                В несколько кликов. <br />
                Просто. Прибыльно. Безопасно.
            </p>
            <Button text={'Инвестировать'} showIcon={true} />
        </div>
    </section>
}

export default SectionOne;