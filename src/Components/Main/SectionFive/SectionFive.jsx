import { useState, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";

import SliderOne from "./SliderOne/SliderOne";
import SliderTwo from "./SliderTwo/SliderTwo";

import SectionFiveImage from "../../../assets/images/section-five-image.png";
import SectionFiveImageBig from "../../../assets/images/section-five-image-big.png";
import "./SectionFive.scss";
import { useEffect } from "react";
import completedObjectsAPI from "../../../API/completedObjectsAPI";

const SectionFive = ({ objects, total, skip, setSkip, limit }) => {
    const { t } = useTranslation();
    const [windowWidth, setWindowWidth] = useState(null);
    const [showFirstSlider, setShowFirstSlider] = useState(true);
    const [showSecondSlider, setShowSecondSlider] = useState(false);
    const [activeSlide, setActiveSlide] = useState(1);
    const sliderOneRef = useRef();
    const sliderTwoRef = useRef();

    const settingsSliderFirst = {
        className: "section-five__slider-one variable-width",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        variableWidth: true,
        slidesToShow: total === 0 ? 0 : total === 1 ? 1 : total === 2 ? 2 : total === 3 ? 3 : total === 4 ? 4 : 4,
        beforeChange: (current, next) => setActiveSlide(next + 1),
        autoplay: windowWidth < 500 ? false : true,
        autoplaySpeed: 3000,
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
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        variableWidth: true,
        slidesToShow: 1,
        beforeChange: (current, next) => setActiveSlide(next + 1),
    };

    const next = () => {
        if (showFirstSlider) {
            if ((activeSlide === limit - 1) && (total > skip)) {
                setSkip(skip + 10);
            };
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

    return <section className="section-five">
        <h2>
            <Element name="copmpleted-objects" />
            {t('landing:SECTION_FIVE_TITLE')}
        </h2>
        <div className="section-five__navigation">
            <p>
                {`0${activeSlide}`}&nbsp;
                <span> – {total < 10
                    ? `0${total}`
                    : total
                }</span>
            </p>
            <p>
                <div onClick={prev}>
                    <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM41 9H1V7H41V9Z" fill="white" />
                    </svg>
                </div>
                <div onClick={next}>
                    <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                        <path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z" fill="white" />
                    </svg>
                </div>
            </p>
        </div>
        <div style={showFirstSlider ? { display: 'block' } : { display: 'none' }}>
            <div>
                <Slider ref={sliderOneRef} {...settingsSliderFirst}>
                    {objects?.map((object, index) => {
                        return <Fade delay={100}>
                            <SliderOne
                                sliderTwoRef={sliderTwoRef}
                                key={object.id}
                                index={index}
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
                {objects.map((object) => {
                    return <Fade delay={100}>
                        <SliderTwo
                            key={object.id}
                            setShowFirstSlider={setShowFirstSlider}
                            setShowSecondSlider={setShowSecondSlider}
                            {...object}
                        />
                    </Fade>
                })}
            </Slider >
        </div>
        <div className="section-five__navigation-mobile">
            <p>
                <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                    onClick={prev}
                >
                    <path d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM41 9H1V7H41V9Z" fill="white" />
                </svg>
                <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                    onClick={next}
                >
                    <path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z" fill="white" />
                </svg>
            </p>
        </div>
    </section >
}

export default SectionFive;