import { useRef } from "react";
import Slider from "react-slick";

import SliderItem from "./SliderItem/SliderItem";

import SectionFiveImage from "../../../assets/images/section-five-image.png";
import "./SectionSeven.scss";

const objects = [
    {
        id: 1,
        image: SectionFiveImage,
        location: 'Местонахождение',
        locationCountry: 'Испания, Барселона',
        price: 'Стоимость',
        priceNumber: '620 000$',
        profit: 'Прогноз прибыли',
        profitNumber: '50%',
        description: 'Здесь будет короткое описание, описание будет здесь, более детальная информация, короткое описание, здесь будет короткое описание.',
        allowAmount: 'Доступно к инвестированию',
        allowAmountNumber: '00.000.000 €'
    },
    {
        id: 1,
        image: SectionFiveImage,
        location: 'Местонахождение',
        locationCountry: 'Испания, Барселона',
        price: 'Стоимость',
        priceNumber: '620 000$',
        profit: 'Прогноз прибыли',
        profitNumber: '50%',
        description: 'Здесь будет короткое описание, описание будет здесь, более детальная информация, короткое описание, здесь будет короткое описание.',
        allowAmount: 'Доступно к инвестированию',
        allowAmountNumber: '00.000.000 €'
    },
    {
        id: 1,
        image: SectionFiveImage,
        location: 'Местонахождение',
        locationCountry: 'Испания, Барселона',
        price: 'Стоимость',
        priceNumber: '620 000$',
        profit: 'Прогноз прибыли',
        profitNumber: '50%',
        description: 'Здесь будет короткое описание, описание будет здесь, более детальная информация, короткое описание, здесь будет короткое описание.',
        allowAmount: 'Доступно к инвестированию',
        allowAmountNumber: '00.000.000 €'
    },
    {
        id: 1,
        image: SectionFiveImage,
        location: 'Местонахождение',
        locationCountry: 'Испания, Барселона',
        price: 'Стоимость',
        priceNumber: '620 000$',
        profit: 'Прогноз прибыли',
        profitNumber: '50%',
        description: 'Здесь будет короткое описание, описание будет здесь, более детальная информация, короткое описание, здесь будет короткое описание.',
        allowAmount: 'Доступно к инвестированию',
        allowAmountNumber: '00.000.000 €'
    },
    {
        id: 1,
        image: SectionFiveImage,
        location: 'Местонахождение',
        locationCountry: 'Испания, Барселона',
        price: 'Стоимость',
        priceNumber: '620 000$',
        profit: 'Прогноз прибыли',
        profitNumber: '50%',
        description: 'Здесь будет короткое описание, описание будет здесь, более детальная информация, короткое описание, здесь будет короткое описание.',
        allowAmount: 'Доступно к инвестированию',
        allowAmountNumber: '00.000.000 €'
    },
    {
        id: 1,
        image: SectionFiveImage,
        location: 'Местонахождение',
        locationCountry: 'Испания, Барселона',
        price: 'Стоимость',
        priceNumber: '620 000$',
        profit: 'Прогноз прибыли',
        profitNumber: '50%',
        description: 'Здесь будет короткое описание, описание будет здесь, более детальная информация, короткое описание, здесь будет короткое описание.',
        allowAmount: 'Доступно к инвестированию',
        allowAmountNumber: '00.000.000 €'
    },
    {
        id: 1,
        image: SectionFiveImage,
        location: 'Местонахождение',
        locationCountry: 'Испания, Барселона',
        price: 'Стоимость',
        priceNumber: '620 000$',
        profit: 'Прогноз прибыли',
        profitNumber: '50%',
        description: 'Здесь будет короткое описание, описание будет здесь, более детальная информация, короткое описание, здесь будет короткое описание.',
        allowAmount: 'Доступно к инвестированию',
        allowAmountNumber: '00.000.000 €'
    },
    {
        id: 1,
        image: SectionFiveImage,
        location: 'Местонахождение',
        locationCountry: 'Испания, Барселона',
        price: 'Стоимость',
        priceNumber: '620 000$',
        profit: 'Прогноз прибыли',
        profitNumber: '50%',
        description: 'Здесь будет короткое описание, описание будет здесь, более детальная информация, короткое описание, здесь будет короткое описание.',
        allowAmount: 'Доступно к инвестированию',
        allowAmountNumber: '00.000.000 €'
    },
    {
        id: 1,
        image: SectionFiveImage,
        location: 'Местонахождение',
        locationCountry: 'Испания, Барселона',
        price: 'Стоимость',
        priceNumber: '620 000$',
        profit: 'Прогноз прибыли',
        profitNumber: '50%',
        description: 'Здесь будет короткое описание, описание будет здесь, более детальная информация, короткое описание, здесь будет короткое описание.',
        allowAmount: 'Доступно к инвестированию',
        allowAmountNumber: '00.000.000 €'
    },
]

const SectionSeven = () => {
    const sliderRef = useRef();

    const settingsSlider = {
        className: "section-seven__slider variable-width",
        infinite: false,
        speed: 1000,
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
        sliderRef.current.slickNext();
    };

    const prev = () => {
        sliderRef.current.slickPrev();
    };

    return <section className="section-seven">
        <h2>
            Выбор Объекта Инвестирования
        </h2>
        <div className="section-seven__navigation">
            <p>
                01
                <span> – 06</span>
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

        <Slider ref={sliderRef} {...settingsSlider}>
            {objects.map(object => {
                return <SliderItem
                    key={object.id}
                    {...object}
                />
            })}
        </Slider>

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
            *отправляя ETH на адрес смарт-контракта TRUSTATE и приобретая токены <br />
            проекта TRUSTATE вы автоматически соглашаетесь с <a href="#"> условиями </a> проекта.
        </p>
    </section>
}

export default SectionSeven;