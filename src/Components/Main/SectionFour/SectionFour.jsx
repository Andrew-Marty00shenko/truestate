import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import "./SectionFour.scss";

const SectionFour = () => {
    const { t } = useTranslation();
    const [slider, setSlider] = useState();
    const [windowWidth, setWindowWidth] = useState(null);
    let firstClientX;
    let firstClientY;
    let clientX;
    let clientY;

    useEffect(() => {
        window.addEventListener('touchstart', touchStart);
        window.addEventListener('touchmove', preventTouch, { passive: false });
    }, []);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    const touchStart = (e) => {
        firstClientX = e.touches[0].clientX;
        firstClientY = e.touches[0].clientY;
    };

    const preventTouch = (e) => {
        const minValue = 5; // threshold

        clientX = e.touches[0].clientX - firstClientX;
        clientY = e.touches[0].clientY - firstClientY;
        // Vertical scrolling does not work when you start swiping horizontally.
        if (Math.abs(clientX) > minValue) {
            e.preventDefault();
            e.returnValue = false;
            return false;
        }
    };

    const settings = {
        className: "section-four__slider variable-width",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        variableWidth: true,
        slidesToShow: 4,
        autoplay: windowWidth < 500 ? false : true,
        pauseOnHover: true,
        autoplaySpeed: 6000,
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
            {t('landing:SECTION_FOUR_TITLE')}
        </h2>
        <div className="section-four__navigation">
            <p>
                <span></span>
            </p>
            <p>
                <button onClick={prev}>
                    <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"

                    >
                        <path d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM41 9H1V7H41V9Z" fill="black" />
                    </svg>
                </button>
                <button onClick={next}>
                    <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"

                    >
                        <path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z" fill="black" />
                    </svg>
                </button>
            </p>
        </div>
        <Slider ref={c => setSlider(c)} {...settings}>
            <div className="section-four__block" style={{ width: 386 }}>
                <h3>
                    {t('landing:SECTION_FOUR_BLOCK_TITLE_1')}
                </h3>
                <p>
                    {t('landing:SECTION_FOUR_BLOCK_TEXT_1')}
                </p>
            </div>
            <div className="section-four__block">
                <h3>
                    {t('landing:SECTION_FOUR_BLOCK_TITLE_2')}
                </h3>
                <p>
                    {t('landing:SECTION_FOUR_BLOCK_TEXT_2')}
                </p>
            </div>
            <div className="section-four__block">
                <h3>
                    {t('landing:SECTION_FOUR_BLOCK_TITLE_3')}
                </h3>
                <p>
                    {t('landing:SECTION_FOUR_BLOCK_TEXT_3')}
                </p>
            </div>
            <div className="section-four__block" style={{ width: 386, marginRight: 30 }}>
                <h3>
                    {t('landing:SECTION_FOUR_BLOCK_TITLE_4')}
                </h3>
                <p>
                    {t('landing:SECTION_FOUR_BLOCK_TEXT_4')}
                </p>
            </div>
            <div className="section-four__block">
                <h3>
                    {t('landing:SECTION_FOUR_BLOCK_TITLE_5')}
                </h3>
                <p>
                    {t('landing:SECTION_FOUR_BLOCK_TEXT_5')}
                </p>
            </div>
            <div className="section-four__block">
                <h3>
                    {t('landing:SECTION_FOUR_BLOCK_TITLE_6')}
                </h3>
                <p>
                    {t('landing:SECTION_FOUR_BLOCK_TEXT_6')}
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
    </section >
}

export default SectionFour;