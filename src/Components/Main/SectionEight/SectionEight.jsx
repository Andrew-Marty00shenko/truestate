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
                <h2>
                    FAQ
                </h2>
                <span>
                    Остались вопросы?
                </span>
            </div>
        </div>

        <Modal
            openModalAddress={openModalAddress}
            setOpenModalAddress={setOpenModalAddress}
        />
    </section>
}

export default SectionEight;