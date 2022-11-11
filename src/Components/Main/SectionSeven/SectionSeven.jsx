import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

import PrivacyPolicy from "../../../assets/pdfs/Privacy_Policy_for_TRUESTATE.PDF";
import WhitePapperEn from "../../../assets/pdfs/white_papper_en.pdf";
import WhitePapperRu from "../../../assets/pdfs/white_papper_ru.pdf";
import WhitePapperUa from "../../../assets/pdfs/white_papper_ua.pdf";

import SliderOne from "./SliderOne/SliderOne";
import SliderTwo from "./SliderTwo/SliderTwo";

import "./SectionSeven.scss";

const SectionSeven = ({
    objects,
    total,
    skip,
    setSkip,
    limit,
    setOpenModalAddress,
    setActiveObjectEstate
}) => {
    const { t, i18n } = useTranslation();
    const [windowWidth, setWindowWidth] = useState(null);
    const [showFirstSlider, setShowFirstSlider] = useState(true);
    const [showSecondSlider, setShowSecondSlider] = useState(false);
    const [activeSlide, setActiveSlide] = useState(1);
    const sliderOneRef = useRef();
    const sliderTwoRef = useRef();

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    const settingsSliderFirst = {
        className: "section-seven__slider variable-width",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        variableWidth: true,
        slidesToShow: total === 0 ? 0 : total === 1 ? 1 : total === 2 ? 2 : total === 3 ? 3 : total === 4 ? 4 : 4,
        beforeChange: (current, next) => {
            setActiveSlide(next + 1);
            if ((activeSlide === objects.length - (limit - 1)) && (objects.length < total)) {
                setSkip(skip + limit);
            };
        },
        autoplay: windowWidth < 500 || showSecondSlider || total < 5 ? false : true,
        pauseOnHover: true,
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 1661,
                settings: {
                    slidesToShow: total === 0 ? 0 : total === 1 ? 1 : total === 2 ? 2 : total === 3 ? 3 : 3,
                }
            },
            {
                breakpoint: 1247,
                settings: {
                    slidesToShow: total === 0 ? 0 : total === 1 ? 1 : total === 2 ? 2 : 2,
                }
            },
            {
                breakpoint: 833,
                settings: {
                    slidesToShow: total === 0 ? 0 : total === 1 ? 1 : 1,
                }
            }
        ]
    };

    const settingsSliderSecond = {
        className: "section-five__slider-two variable-width",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        variableWidth: true,
        slidesToShow: 1,
        beforeChange: (current, next) => setActiveSlide(next + 1),
    };

    const next = () => {
        if (showFirstSlider) {
            sliderOneRef.current.slickNext();
        }
        if (showSecondSlider) {
            sliderTwoRef.current.slickNext();
        }
    };

    const prev = () => {
        if (showFirstSlider) {
            sliderOneRef.current.slickPrev();
        }
        if (showSecondSlider) {
            sliderTwoRef.current.slickPrev();
        }
    };

    return <section className="section-seven">
        <h2>
            <Element name="estates" />
            {t('landing:SECTION_SEVEN_TITLE')}
        </h2>
        <div className="section-seven__navigation">
            <p>
                <span></span>
            </p>
            <p>
                <div onClick={prev}>
                    <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM41 9H1V7H41V9Z" fill="black" />
                    </svg>
                </div>
                <div onClick={next}>
                    <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                        <path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z" fill="black" />
                    </svg>
                </div>
            </p>
        </div>

        <div style={showFirstSlider ? { display: 'block' } : { display: 'none' }}>
            <div>
                <Slider ref={sliderOneRef} {...settingsSliderFirst}>
                    {objects.map((object, index) => {
                        return <Fade key={object.id} triggerOnce delay={100}>
                            <SliderOne
                                sliderTwoRef={sliderTwoRef}
                                key={object.id}
                                index={index}
                                setOpenModalAddress={setOpenModalAddress}
                                setActiveObjectEstate={setActiveObjectEstate}
                                setShowFirstSlider={setShowFirstSlider}
                                setShowSecondSlider={setShowSecondSlider}
                                {...object}
                            />
                        </Fade>
                    })}
                </Slider>
            </div>
        </div>
        <div style={showSecondSlider ? { display: 'block' } : { display: 'none' }}>
            <Slider ref={sliderTwoRef} {...settingsSliderSecond}>
                {objects.map(object => {
                    return <Fade key={object.id} triggerOnce delay={100}>
                        <SliderTwo
                            key={object.id}
                            setOpenModalAddress={setOpenModalAddress}
                            setActiveObjectEstate={setActiveObjectEstate}
                            setShowFirstSlider={setShowFirstSlider}
                            setShowSecondSlider={setShowSecondSlider}
                            {...object}
                        />
                    </Fade>
                })}
            </Slider>
        </div>

        <div className="section-seven__navigation-mobile">
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

        <p className="section-seven__policy">
            {t('landing:SECTION_SEVEN_BOTTOM_TEXT_1')} <br />
            {t('landing:SECTION_SEVEN_BOTTOM_TEXT_2')} <a target="_blank" href={PrivacyPolicy}>{t('landing:SECTION_SEVEN_BOTTOM_TEXT_HREF')}</a> {t('landing:SECTION_SEVEN_BOTTOM_TEXT_AND')} <a target="_blank"
                href={
                    i18n.language === 'EN'
                        ? `${WhitePapperEn}#page=1`
                        : i18n.language === 'RU'
                            ? `${WhitePapperRu}#page=1`
                            : `${WhitePapperUa}#page=1`
                }> {t('landing:SECTION_SEVEN_BOTTOM_TEXT_HREF_2')}</a> {t('landing:SECTION_SEVEN_BOTTOM_TEXT_NEXT')}
        </p>
    </section>
}

export default SectionSeven;