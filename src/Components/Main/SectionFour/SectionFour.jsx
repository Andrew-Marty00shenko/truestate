import { useState } from "react";
import Slider from "react-slick";

import "./SectionFour.scss";

const SectionFour = () => {
    const [slider, setSlider] = useState();

    const settings = {
        className: "section-four__slider variable-width",
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        variableWidth: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1661,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1247,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 833,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const next = () => {
        slider.slickNext();
    };

    const prev = () => {
        slider.slickPrev();
    };

    return <section className="section-four">
        <h2>
            Почему TRUESTATE
        </h2>
        <div className="section-four__navigation">
            <p>
                01
                <span> – 06</span>
            </p>
            <p>
                <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                    onClick={prev}
                >
                    <path d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM41 9H1V7H41V9Z" fill="black" />
                </svg>
                <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                    onClick={next}
                >
                    <path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z" fill="black" />
                </svg>
            </p>
        </div>
        <Slider ref={c => setSlider(c)} {...settings}>
            <div className="section-four__block" style={{ width: 386 }}>
                <h3>
                    Лицензия Центрального банка Литвы.
                </h3>
                <p>
                    Процесс выпуска и оборота токенов TRUESTATE регулируется и контролируется Центробанком Литвы, государством-членом Евросоюза.
                </p>
            </div>
            <div className="section-four__block">
                <h3>
                    Никакой волатильности.
                </h3>
                <p>
                    TRUESTATE — это security token, который обеспечен реальным активом: он не падает в цене
                    и не подвержен волатильности на криптовалютном рынке.
                </p>
            </div>
            <div className="section-four__block">
                <h3>
                    Инвестиции
                    в пару кликов.
                </h3>
                <p>
                    Забудьте о бумажной волоките, длительном поиске объекта недвижимости и неразберихе
                    с налогами — TRUESTATE сделает все за вас, а вы лишь получите пассивный доход.
                </p>
            </div>
            <div className="section-four__block" style={{ width: 386, marginRight: 30 }}>
                <h3>
                    Лицензия Центрального банка Литвы.
                </h3>
                <p>
                    Процесс выпуска и оборота токенов TRUESTATE регулируется и контролируется Центробанком Литвы, государством-членом Евросоюза.
                </p>
            </div>
            <div className="section-four__block">
                <h3>
                    Никакой волатильности.
                </h3>
                <p>
                    TRUESTATE — это security token, который обеспечен реальным активом: он не падает в цене
                    и не подвержен волатильности на криптовалютном рынке.
                </p>
            </div>
            <div className="section-four__block">
                <h3>
                    Инвестиции
                    в пару кликов.
                </h3>
                <p>
                    Забудьте о бумажной волоките, длительном поиске объекта недвижимости и неразберихе
                    с налогами — TRUESTATE сделает все за вас, а вы лишь получите пассивный доход.
                </p>
            </div>
        </Slider>
        <div className="section-four__navigation-mobile">
            <p>
                <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                    onClick={prev}
                >
                    <path d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM41 9H1V7H41V9Z" fill="black" />
                </svg>
                <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                    onClick={next}
                >
                    <path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z" fill="black" />
                </svg>
            </p>
        </div>
    </section>
}

export default SectionFour;