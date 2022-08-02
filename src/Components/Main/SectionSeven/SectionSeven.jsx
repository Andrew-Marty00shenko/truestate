import { useRef, useState } from "react";
import Slider from "react-slick";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

import SliderOne from "./SliderOne/SliderOne";
import SliderTwo from "./SliderTwo/SliderTwo";

import SectionSevenObjectOne from "../../../assets/images/investObjects/section-seven-object-1.jpg";
import SectionSevenObjectTwo from "../../../assets/images/investObjects/section-seven-object-2.jpg";
import SectionSevenObjectThree from "../../../assets/images/investObjects/section-seven-object-3.jpg";
import "./SectionSeven.scss";


const SectionSeven = ({ setOpenModalAddress, setActiveObjectEstate }) => {
    const { t } = useTranslation();
    const [showFirstSlider, setShowFirstSlider] = useState(true);
    const [showSecondSlider, setShowSecondSlider] = useState(false);
    const [activeSlide, setActiveSlide] = useState('01');
    const [activeDescriptionObject, setActiveDescriptionObject] = useState(null);
    const sliderOneRef = useRef();
    const sliderTwoRef = useRef();

    const objects = [
        {
            id: 1,
            image: SectionSevenObjectOne,
            location: t('landing:SECTION_SEVEN_OBJECT_LOCATION'),
            locationCountry: 'Берлин',
            price: t('landing:SECTION_SEVEN_OBJECT_PURCHACE_PRICE'),
            priceNumber: '100.000€',
            profit: t('landing:SECTION_SEVEN_OBJECT_PROFIT_PERCENTAGE'),
            profitNumber: '100%',
            allowAmount: t('landing:SECTION_SEVEN_OBJECT_ALLOW_INVEST'),
            allowAmountNumber: '00.000.000 €',
            description: [
                {
                    id: 1,
                    image: SectionSevenObjectOne,
                    location: t('landing:SECTION_SEVEN_OBJECT_LOCATION'),
                    locationCountry: 'Испания, Барселона',
                    typeOfRealEstate: t('landing:SECTION_SEVEN_OBJECT_TYPE_OF_REAL_ESTATE'),
                    typeOfRealEstateValue: 'многоквартирный дом',
                    square: t('landing:SECTION_SEVEN_OBJECT_LOCATION'),
                    squareValue: '1000 м2',
                    price: t('landing:SECTION_SEVEN_OBJECT_PURCHACE_PRICE'),
                    priceValue: '100.000€',
                    repairAndImprovements: t('landing:SECTION_SEVEN_OBJECT_REPAIR_AND_IMPROVEMENTS'),
                    repairAndImprovementsNubmer: '50.000€',
                    fee: t('landing:SECTION_SEVEN_OBJECT_TAXES_FEES_ETC'),
                    feeNumber: '10.000€',
                    priceOfSell: t('landing:SECTION_SEVEN_OBJECT_SALE_PRICE'),
                    priceOfSellValue: '400.000€',
                    deadline: t('landing:SECTION_SEVEN_OBJECT_DEADLINE'),
                    deadlineTime: '18 месяцев ',
                    profitPercents: t('landing:SECTION_SEVEN_OBJECT_PROFIT_PERCENTAGE'),
                    profitPercentsNumber: '100%'
                }
            ]
        },
        {
            id: 2,
            image: SectionSevenObjectTwo,
            location: t('landing:SECTION_SEVEN_OBJECT_LOCATION'),
            locationCountry: 'Берлин',
            price: t('landing:SECTION_SEVEN_OBJECT_PURCHACE_PRICE'),
            priceNumber: '100.000€',
            profit: t('landing:SECTION_SEVEN_OBJECT_PROFIT_PERCENTAGE'),
            profitNumber: '100%',
            allowAmount: t('landing:SECTION_SEVEN_OBJECT_ALLOW_INVEST'),
            allowAmountNumber: '00.000.000 €',
            description: [
                {
                    id: 2,
                    image: SectionSevenObjectTwo,
                    location: t('landing:SECTION_SEVEN_OBJECT_LOCATION'),
                    locationCountry: 'Испания, Барселона',
                    typeOfRealEstate: t('landing:SECTION_SEVEN_OBJECT_TYPE_OF_REAL_ESTATE'),
                    typeOfRealEstateValue: 'многоквартирный дом',
                    square: t('landing:SECTION_SEVEN_OBJECT_LOCATION'),
                    squareValue: '1000 м2',
                    price: t('landing:SECTION_SEVEN_OBJECT_PURCHACE_PRICE'),
                    priceValue: '100.000€',
                    repairAndImprovements: t('landing:SECTION_SEVEN_OBJECT_REPAIR_AND_IMPROVEMENTS'),
                    repairAndImprovementsNubmer: '50.000€',
                    fee: t('landing:SECTION_SEVEN_OBJECT_TAXES_FEES_ETC'),
                    feeNumber: '10.000€',
                    priceOfSell: t('landing:SECTION_SEVEN_OBJECT_SALE_PRICE'),
                    priceOfSellValue: '400.000€',
                    deadline: t('landing:SECTION_SEVEN_OBJECT_DEADLINE'),
                    deadlineTime: '18 месяцев ',
                    profitPercents: t('landing:SECTION_SEVEN_OBJECT_PROFIT_PERCENTAGE'),
                    profitPercentsNumber: '100%'
                }
            ]
        },
        {
            id: 3,
            image: SectionSevenObjectThree,
            location: t('landing:SECTION_SEVEN_OBJECT_LOCATION'),
            locationCountry: 'Берлин',
            price: t('landing:SECTION_SEVEN_OBJECT_PURCHACE_PRICE'),
            priceNumber: '100.000€',
            profit: t('landing:SECTION_SEVEN_OBJECT_PROFIT_PERCENTAGE'),
            profitNumber: '100%',
            allowAmount: t('landing:SECTION_SEVEN_OBJECT_ALLOW_INVEST'),
            allowAmountNumber: '00.000.000 €',
            description: [
                {
                    id: 3,
                    image: SectionSevenObjectThree,
                    location: t('landing:SECTION_SEVEN_OBJECT_LOCATION'),
                    locationCountry: 'Испания, Барселона',
                    typeOfRealEstate: t('landing:SECTION_SEVEN_OBJECT_TYPE_OF_REAL_ESTATE'),
                    typeOfRealEstateValue: 'многоквартирный дом',
                    square: t('landing:SECTION_SEVEN_OBJECT_LOCATION'),
                    squareValue: '1000 м2',
                    price: t('landing:SECTION_SEVEN_OBJECT_PURCHACE_PRICE'),
                    priceValue: '100.000€',
                    repairAndImprovements: t('landing:SECTION_SEVEN_OBJECT_REPAIR_AND_IMPROVEMENTS'),
                    repairAndImprovementsNubmer: '50.000€',
                    fee: t('landing:SECTION_SEVEN_OBJECT_TAXES_FEES_ETC'),
                    feeNumber: '10.000€',
                    priceOfSell: t('landing:SECTION_SEVEN_OBJECT_SALE_PRICE'),
                    priceOfSellValue: '400.000€',
                    deadline: t('landing:SECTION_SEVEN_OBJECT_DEADLINE'),
                    deadlineTime: '18 месяцев ',
                    profitPercents: t('landing:SECTION_SEVEN_OBJECT_PROFIT_PERCENTAGE'),
                    profitPercentsNumber: '100%'
                }
            ]
        },
        {
            id: 4,
            image: SectionSevenObjectOne,
            location: t('landing:SECTION_SEVEN_OBJECT_LOCATION'),
            locationCountry: 'Берлин',
            price: t('landing:SECTION_SEVEN_OBJECT_PURCHACE_PRICE'),
            priceNumber: '100.000€',
            profit: t('landing:SECTION_SEVEN_OBJECT_PROFIT_PERCENTAGE'),
            profitNumber: '100%',
            allowAmount: t('landing:SECTION_SEVEN_OBJECT_ALLOW_INVEST'),
            allowAmountNumber: '00.000.000 €',
            description: [
                {
                    id: 4,
                    image: SectionSevenObjectOne,
                    location: t('landing:SECTION_SEVEN_OBJECT_LOCATION'),
                    locationCountry: 'Испания, Барселона',
                    typeOfRealEstate: t('landing:SECTION_SEVEN_OBJECT_TYPE_OF_REAL_ESTATE'),
                    typeOfRealEstateValue: 'многоквартирный дом',
                    square: t('landing:SECTION_SEVEN_OBJECT_LOCATION'),
                    squareValue: '1000 м2',
                    price: t('landing:SECTION_SEVEN_OBJECT_PURCHACE_PRICE'),
                    priceValue: '100.000€',
                    repairAndImprovements: t('landing:SECTION_SEVEN_OBJECT_REPAIR_AND_IMPROVEMENTS'),
                    repairAndImprovementsNubmer: '50.000€',
                    fee: t('landing:SECTION_SEVEN_OBJECT_TAXES_FEES_ETC'),
                    feeNumber: '10.000€',
                    priceOfSell: t('landing:SECTION_SEVEN_OBJECT_SALE_PRICE'),
                    priceOfSellValue: '400.000€',
                    deadline: t('landing:SECTION_SEVEN_OBJECT_DEADLINE'),
                    deadlineTime: '18 месяцев ',
                    profitPercents: t('landing:SECTION_SEVEN_OBJECT_PROFIT_PERCENTAGE'),
                    profitPercentsNumber: '100%'
                }
            ]
        },
        {
            id: 5,
            image: SectionSevenObjectOne,
            location: t('landing:SECTION_SEVEN_OBJECT_LOCATION'),
            locationCountry: 'Берлин',
            price: t('landing:SECTION_SEVEN_OBJECT_PURCHACE_PRICE'),
            priceNumber: '100.000€',
            profit: t('landing:SECTION_SEVEN_OBJECT_PROFIT_PERCENTAGE'),
            profitNumber: '100%',
            allowAmount: t('landing:SECTION_SEVEN_OBJECT_ALLOW_INVEST'),
            allowAmountNumber: '00.000.000 €',
            description: [
                {
                    id: 5,
                    image: SectionSevenObjectOne,
                    location: t('landing:SECTION_SEVEN_OBJECT_LOCATION'),
                    locationCountry: 'Испания, Барселона',
                    typeOfRealEstate: t('landing:SECTION_SEVEN_OBJECT_TYPE_OF_REAL_ESTATE'),
                    typeOfRealEstateValue: 'многоквартирный дом',
                    square: t('landing:SECTION_SEVEN_OBJECT_LOCATION'),
                    squareValue: '1000 м2',
                    price: t('landing:SECTION_SEVEN_OBJECT_PURCHACE_PRICE'),
                    priceValue: '100.000€',
                    repairAndImprovements: t('landing:SECTION_SEVEN_OBJECT_REPAIR_AND_IMPROVEMENTS'),
                    repairAndImprovementsNubmer: '50.000€',
                    fee: t('landing:SECTION_SEVEN_OBJECT_TAXES_FEES_ETC'),
                    feeNumber: '10.000€',
                    priceOfSell: t('landing:SECTION_SEVEN_OBJECT_SALE_PRICE'),
                    priceOfSellValue: '400.000€',
                    deadline: t('landing:SECTION_SEVEN_OBJECT_DEADLINE'),
                    deadlineTime: '18 месяцев ',
                    profitPercents: t('landing:SECTION_SEVEN_OBJECT_PROFIT_PERCENTAGE'),
                    profitPercentsNumber: '100%'
                }
            ]
        },
        {
            id: 6,
            image: SectionSevenObjectOne,
            location: t('landing:SECTION_SEVEN_OBJECT_LOCATION'),
            locationCountry: 'Берлин',
            price: t('landing:SECTION_SEVEN_OBJECT_PURCHACE_PRICE'),
            priceNumber: '100.000€',
            profit: t('landing:SECTION_SEVEN_OBJECT_PROFIT_PERCENTAGE'),
            profitNumber: '100%',
            allowAmount: t('landing:SECTION_SEVEN_OBJECT_ALLOW_INVEST'),
            allowAmountNumber: '00.000.000 €',
            description: [
                {
                    id: 6,
                    image: SectionSevenObjectOne,
                    location: t('landing:SECTION_SEVEN_OBJECT_LOCATION'),
                    locationCountry: 'Испания, Барселона',
                    typeOfRealEstate: t('landing:SECTION_SEVEN_OBJECT_TYPE_OF_REAL_ESTATE'),
                    typeOfRealEstateValue: 'многоквартирный дом',
                    square: t('landing:SECTION_SEVEN_OBJECT_LOCATION'),
                    squareValue: '1000 м2',
                    price: t('landing:SECTION_SEVEN_OBJECT_PURCHACE_PRICE'),
                    priceValue: '100.000€',
                    repairAndImprovements: t('landing:SECTION_SEVEN_OBJECT_REPAIR_AND_IMPROVEMENTS'),
                    repairAndImprovementsNubmer: '50.000€',
                    fee: t('landing:SECTION_SEVEN_OBJECT_TAXES_FEES_ETC'),
                    feeNumber: '10.000€',
                    priceOfSell: t('landing:SECTION_SEVEN_OBJECT_SALE_PRICE'),
                    priceOfSellValue: '400.000€',
                    deadline: t('landing:SECTION_SEVEN_OBJECT_DEADLINE'),
                    deadlineTime: '18 месяцев ',
                    profitPercents: t('landing:SECTION_SEVEN_OBJECT_PROFIT_PERCENTAGE'),
                    profitPercentsNumber: '100%'
                }
            ]
        }

    ];


    const settingsSliderFirst = {
        className: "section-seven__slider variable-width",
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

    return <section className="section-seven">
        <h2>
            <Element name="estates" />
            {t('landing:SECTION_SEVEN_TITLE')}
        </h2>
        <div className="section-seven__navigation">
            <p>
                {activeSlide}&nbsp;
                <span> – {objects.length < 10
                    ? `0${objects.length}`
                    : objects.length
                }
                </span>
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

        {showFirstSlider && (
            <Slider ref={sliderOneRef} {...settingsSliderFirst}>
                {objects.map(object => {
                    return <SliderOne
                        key={object.id}
                        setOpenModalAddress={setOpenModalAddress}
                        setActiveObjectEstate={setActiveObjectEstate}
                        setShowFirstSlider={setShowFirstSlider}
                        setShowSecondSlider={setShowSecondSlider}
                        setActiveDescriptionObject={setActiveDescriptionObject}
                        {...object}
                    />
                })}
            </Slider>
        )}

        {showSecondSlider && (
            <Slider ref={sliderTwoRef} {...settingsSliderSecond}>
                {objects.map(object => {
                    return <SliderTwo
                        key={object.id}
                        setOpenModalAddress={setOpenModalAddress}
                        setActiveObjectEstate={setActiveObjectEstate}
                        setShowFirstSlider={setShowFirstSlider}
                        setShowSecondSlider={setShowSecondSlider}
                        description={object.description}
                    />
                })}
            </Slider>
        )}

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
            {t('landing:SECTION_SEVEN_BOTTOM_TEXT_2')} <a href="#"> {t('landing:SECTION_SEVEN_BOTTOM_TEXT_HREF')} </a> {t('landing:SECTION_SEVEN_BOTTOM_TEXT_NEXT')}
        </p>
    </section>
}

export default SectionSeven;