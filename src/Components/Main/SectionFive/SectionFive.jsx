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

const SectionFive = () => {
    const { t } = useTranslation();
    const [showFirstSlider, setShowFirstSlider] = useState(true);
    const [showSecondSlider, setShowSecondSlider] = useState(false);
    const [activeSlide, setActiveSlide] = useState('01');
    const sliderOneRef = useRef();
    const sliderTwoRef = useRef();

    const objects = [
        {
            id: 1,
            image: SectionFiveImage,
            bigImage: SectionFiveImageBig,
            location: t('landing:SECTION_FIVE_OBJECT_LOCATION'),
            locationCountry: 'Испания, Барселона',
            deadline: t('landing:SECTION_FIVE_OBJECT_DEADLINE'),
            deadlineTime: '12 месяцев',
            profitPercents: t('landing:SECTION_FIVE_OBJECT_PROFIT_PERCENTAGE'),
            profitPercentsNumber: '50%',
            subInfo: [
                {
                    id: 1,
                    image: SectionFiveImage,
                    location: t('landing:SECTION_FIVE_OBJECT_LOCATION'),
                    locationCountry: 'Испания, Барселона',
                    typeOfRealEstate: t('landing:SECTION_FIVE_OBJECT_TYPE_OF_REAL_ESTATE'),
                    square: t('landing:SECTION_FIVE_OBJECT_AREA'),
                    price: t('landing:SECTION_FIVE_OBJECT_PURCHACE_PRICE'),
                    repairAndImprovements: t('landing:SECTION_FIVE_OBJECT_REPAIR_AND_IMPROVEMENTS'),
                    repairAndImprovementsNubmer: '1234$',
                    fee: t('landing:SECTION_FIVE_OBJECT_TAXES_FEES_ETC'),
                    feeNumber: '1234$',
                    priceOfSell: t('landing:SECTION_FIVE_OBJECT_SALE_PRICE'),
                    deadline: t('landing:SECTION_FIVE_OBJECT_DEADLINE'),
                    deadlineTime: '12 месяцев',
                    profitPercents: t('landing:SECTION_FIVE_OBJECT_PROFIT_PERCENTAGE'),
                    profitPercentsNumber: '50%',
                }
            ]
        },
        {
            id: 2,
            image: SectionFiveImage,
            bigImage: SectionFiveImageBig,
            location: t('landing:SECTION_FIVE_OBJECT_LOCATION'),
            locationCountry: 'Испания, Барселона',
            deadline: t('landing:SECTION_FIVE_OBJECT_DEADLINE'),
            deadlineTime: '12 месяцев',
            profitPercents: t('landing:SECTION_FIVE_OBJECT_PROFIT_PERCENTAGE'),
            profitPercentsNumber: '50%',
            subInfo: [
                {
                    id: 2,
                    image: SectionFiveImage,
                    location: t('landing:SECTION_FIVE_OBJECT_LOCATION'),
                    locationCountry: 'Испания, Барселона',
                    typeOfRealEstate: t('landing:SECTION_FIVE_OBJECT_TYPE_OF_REAL_ESTATE'),
                    square: t('landing:SECTION_FIVE_OBJECT_AREA'),
                    price: t('landing:SECTION_FIVE_OBJECT_PURCHACE_PRICE'),
                    repairAndImprovements: t('landing:SECTION_FIVE_OBJECT_REPAIR_AND_IMPROVEMENTS'),
                    repairAndImprovementsNubmer: '1234$',
                    fee: t('landing:SECTION_FIVE_OBJECT_TAXES_FEES_ETC'),
                    feeNumber: '1234$',
                    priceOfSell: t('landing:SECTION_FIVE_OBJECT_SALE_PRICE'),
                    deadline: t('landing:SECTION_FIVE_OBJECT_DEADLINE'),
                    deadlineTime: '12 месяцев',
                    profitPercents: t('landing:SECTION_FIVE_OBJECT_PROFIT_PERCENTAGE'),
                    profitPercentsNumber: '50%',
                }
            ]
        },
        {
            id: 3,
            image: SectionFiveImage,
            bigImage: SectionFiveImageBig,
            location: t('landing:SECTION_FIVE_OBJECT_LOCATION'),
            locationCountry: 'Испания, Барселона',
            deadline: t('landing:SECTION_FIVE_OBJECT_DEADLINE'),
            deadlineTime: '12 месяцев',
            profitPercents: t('landing:SECTION_FIVE_OBJECT_PROFIT_PERCENTAGE'),
            profitPercentsNumber: '50%',
            subInfo: [
                {
                    id: 3,
                    image: SectionFiveImage,
                    location: t('landing:SECTION_FIVE_OBJECT_LOCATION'),
                    locationCountry: 'Испания, Барселона',
                    typeOfRealEstate: t('landing:SECTION_FIVE_OBJECT_TYPE_OF_REAL_ESTATE'),
                    square: t('landing:SECTION_FIVE_OBJECT_AREA'),
                    price: t('landing:SECTION_FIVE_OBJECT_PURCHACE_PRICE'),
                    repairAndImprovements: t('landing:SECTION_FIVE_OBJECT_REPAIR_AND_IMPROVEMENTS'),
                    repairAndImprovementsNubmer: '1234$',
                    fee: t('landing:SECTION_FIVE_OBJECT_TAXES_FEES_ETC'),
                    feeNumber: '1234$',
                    priceOfSell: t('landing:SECTION_FIVE_OBJECT_SALE_PRICE'),
                    deadline: t('landing:SECTION_FIVE_OBJECT_DEADLINE'),
                    deadlineTime: '12 месяцев',
                    profitPercents: t('landing:SECTION_FIVE_OBJECT_PROFIT_PERCENTAGE'),
                    profitPercentsNumber: '50%',
                }
            ]
        },
        {
            id: 4,
            image: SectionFiveImage,
            bigImage: SectionFiveImageBig,
            location: t('landing:SECTION_FIVE_OBJECT_LOCATION'),
            locationCountry: 'Испания, Барселона',
            deadline: t('landing:SECTION_FIVE_OBJECT_DEADLINE'),
            deadlineTime: '12 месяцев',
            profitPercents: t('landing:SECTION_FIVE_OBJECT_PROFIT_PERCENTAGE'),
            profitPercentsNumber: '50%',
            subInfo: [
                {
                    id: 4,
                    image: SectionFiveImage,
                    location: t('landing:SECTION_FIVE_OBJECT_LOCATION'),
                    locationCountry: 'Испания, Барселона',
                    typeOfRealEstate: t('landing:SECTION_FIVE_OBJECT_TYPE_OF_REAL_ESTATE'),
                    square: t('landing:SECTION_FIVE_OBJECT_AREA'),
                    price: t('landing:SECTION_FIVE_OBJECT_PURCHACE_PRICE'),
                    repairAndImprovements: t('landing:SECTION_FIVE_OBJECT_REPAIR_AND_IMPROVEMENTS'),
                    repairAndImprovementsNubmer: '1234$',
                    fee: t('landing:SECTION_FIVE_OBJECT_TAXES_FEES_ETC'),
                    feeNumber: '1234$',
                    priceOfSell: t('landing:SECTION_FIVE_OBJECT_SALE_PRICE'),
                    deadline: t('landing:SECTION_FIVE_OBJECT_DEADLINE'),
                    deadlineTime: '12 месяцев',
                    profitPercents: t('landing:SECTION_FIVE_OBJECT_PROFIT_PERCENTAGE'),
                    profitPercentsNumber: '50%',
                }
            ]
        },
        {
            id: 5,
            image: SectionFiveImage,
            bigImage: SectionFiveImageBig,
            location: t('landing:SECTION_FIVE_OBJECT_LOCATION'),
            locationCountry: 'Испания, Барселона',
            deadline: t('landing:SECTION_FIVE_OBJECT_DEADLINE'),
            deadlineTime: '12 месяцев',
            profitPercents: t('landing:SECTION_FIVE_OBJECT_PROFIT_PERCENTAGE'),
            profitPercentsNumber: '50%',
            subInfo: [
                {
                    id: 5,
                    image: SectionFiveImage,
                    location: t('landing:SECTION_FIVE_OBJECT_LOCATION'),
                    locationCountry: 'Испания, Барселона',
                    typeOfRealEstate: t('landing:SECTION_FIVE_OBJECT_TYPE_OF_REAL_ESTATE'),
                    square: t('landing:SECTION_FIVE_OBJECT_AREA'),
                    price: t('landing:SECTION_FIVE_OBJECT_PURCHACE_PRICE'),
                    repairAndImprovements: t('landing:SECTION_FIVE_OBJECT_REPAIR_AND_IMPROVEMENTS'),
                    repairAndImprovementsNubmer: '1234$',
                    fee: t('landing:SECTION_FIVE_OBJECT_TAXES_FEES_ETC'),
                    feeNumber: '1234$',
                    priceOfSell: t('landing:SECTION_FIVE_OBJECT_SALE_PRICE'),
                    deadline: t('landing:SECTION_FIVE_OBJECT_DEADLINE'),
                    deadlineTime: '12 месяцев',
                    profitPercents: t('landing:SECTION_FIVE_OBJECT_PROFIT_PERCENTAGE'),
                    profitPercentsNumber: '50%',
                }
            ]
        },
        {
            id: 6,
            image: SectionFiveImage,
            bigImage: SectionFiveImageBig,
            location: t('landing:SECTION_FIVE_OBJECT_LOCATION'),
            locationCountry: 'Испания, Барселона',
            deadline: t('landing:SECTION_FIVE_OBJECT_DEADLINE'),
            deadlineTime: '12 месяцев',
            profitPercents: t('landing:SECTION_FIVE_OBJECT_PROFIT_PERCENTAGE'),
            profitPercentsNumber: '50%',
            subInfo: [
                {
                    id: 6,
                    image: SectionFiveImage,
                    location: t('landing:SECTION_FIVE_OBJECT_LOCATION'),
                    locationCountry: 'Испания, Барселона',
                    typeOfRealEstate: t('landing:SECTION_FIVE_OBJECT_TYPE_OF_REAL_ESTATE'),
                    square: t('landing:SECTION_FIVE_OBJECT_AREA'),
                    price: t('landing:SECTION_FIVE_OBJECT_PURCHACE_PRICE'),
                    repairAndImprovements: t('landing:SECTION_FIVE_OBJECT_REPAIR_AND_IMPROVEMENTS'),
                    repairAndImprovementsNubmer: '1234$',
                    fee: t('landing:SECTION_FIVE_OBJECT_TAXES_FEES_ETC'),
                    feeNumber: '1234$',
                    priceOfSell: t('landing:SECTION_FIVE_OBJECT_SALE_PRICE'),
                    deadline: t('landing:SECTION_FIVE_OBJECT_DEADLINE'),
                    deadlineTime: '12 месяцев',
                    profitPercents: t('landing:SECTION_FIVE_OBJECT_PROFIT_PERCENTAGE'),
                    profitPercentsNumber: '50%',
                }
            ]
        },
    ];

    const settingsSliderFirst = {
        className: "section-five__slider-one variable-width",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        variableWidth: true,
        slidesToShow: 4,
        beforeChange: (current, next) => setActiveSlide(`0${next + 1}`),
        autoplay: true,
        autoplaySpeed: 3000,
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

    const settingsSliderSecond = {
        className: "section-five__slider-two variable-width",
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        variableWidth: true,
        slidesToShow: 1
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

    return <section className="section-five">
        <h2>
            <Element name="copmpleted-objects" />
            {t('landing:SECTION_FIVE_TITLE')}
        </h2>
        <div className="section-five__navigation">
            <p>
                {activeSlide}&nbsp;
                <span> – {objects.length < 10
                    ? `0${objects.length}`
                    : objects.length
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
        {showFirstSlider && (
            <div>
                <Slider ref={sliderOneRef} {...settingsSliderFirst}>
                    {objects.map(object => {
                        return <SliderOne
                            key={object.id}
                            setShowFirstSlider={setShowFirstSlider}
                            setShowSecondSlider={setShowSecondSlider}
                            {...object}
                        />
                    })}
                </Slider>
            </div>
        )}
        {showSecondSlider && (
            <Slider ref={sliderTwoRef} {...settingsSliderSecond}>
                {objects.map(object => {
                    return <Fade>
                        <SliderTwo
                            key={object.id}
                            setShowFirstSlider={setShowFirstSlider}
                            setShowSecondSlider={setShowSecondSlider}
                            {...object}
                        />
                    </Fade>
                })}
            </Slider >
        )}
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