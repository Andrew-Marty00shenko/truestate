import { Accordion } from "react-bootstrap";

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
                <h3>
                    FAQ
                </h3>
                <span>
                    Остались вопросы?
                </span>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Как купить токены TRUESTATE?</Accordion.Header>
                        <Accordion.Body>
                            Просто отправь ETH со своего кошелька Metamask на адрес смарт-контракта, указанный под понравившимся тебе проектом на сайте. Смарт-контракт автоматически пришлет тебе в ответ токены TRUESTATE по курсу € на момент покупки. Подробная инструкция – <a href="#">здесь.</a>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Сколько стоит 1 токен TRUESTATE?</Accordion.Header>
                        <Accordion.Body>
                            Стоимость 1 токена TRUESTATE – 1€. Поскольку ты платишь за токены TRUESTATE в Ethereum (ETH), смарт-контракт TRUESTATE автоматически посчитает твою сумму инвестиций по курсу ETH-€ на момент покупки.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Какая минимально и максимально возможная сумма инвестиций в проект?</Accordion.Header>
                        <Accordion.Body>
                            Минимально возможная сумма инвестиций — 100€. Максимальную доступную сумму для инвестиций можно увидеть под каждым объектом на сайте в разделе «Выбор объекта инвестирования».
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Где хранить токены TRUESTATE?</Accordion.Header>
                        <Accordion.Body>
                            На кошельке Metamask. Скачать его можно <a href="https://metamask.io/download/" target="_blank">здесь</a>.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Я могу хранить токены TRUESTATE на других кошельках?</Accordion.Header>
                        <Accordion.Body>
                            В настоящий момент токены TRUESTATE можно хранить только на кошельке Metamask. Мы работаем над интеграцией с другими кошельками.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Как с вами связаться?</Accordion.Header>
                        <Accordion.Body>
                            Задать интересующий вопрос можно через email: question@tru.estate, а также заполнив форму «Перезвоните мне» на нашем сайте, и наш специалист свяжется с тобой для консультации.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>За счет чего TRUESTATE получает такую доходность по проектам?</Accordion.Header>
                        <Accordion.Body>
                            <h4>
                                Высокая доходность достигается за счет нескольких факторов:
                            </h4>
                            <ul>
                                <li>Покупка недвижимости по цене ниже рыночной (предложения off market или аукционы);</li>
                                <li>Увеличение рыночной стоимости объекта за счет ремонта и/или увеличения его площади;</li>
                                <li>Низкие затраты на реновацию (самые выгодные цены на работы и материалы);</li>
                                <li>Покупка только ликвидной и перспективной недвижимости в регионах с годовым ростом рыночной стоимости недвижимости на 7-14%.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>Когда я получу возврат инвестиций и прибыль?</Accordion.Header>
                        <Accordion.Body>
                            Ты получишь возврат инвестиций и прибыль после окончания проекта. Прогнозируемый срок реализации указан в описании каждого проекта (доступные проекты смотри <a href="#">здесь</a>).
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>На каких биржах размещаются токены TRUESTATE?</Accordion.Header>
                        <Accordion.Body>
                            Токены проекта TRUESTATE не размещаются на биржах, покупка токенов возможна только через смарт-контракт на официальном сайте проекта.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header>Как я узнаю, что проект закончен?</Accordion.Header>
                        <Accordion.Body>
                            Укажи в личном кабинете на сайте твой email и телефон, и мы пришлем тебе уведомление когда проект будет закончен. Так ты сможешь получить возврат инвестиций с прибылью.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10">
                        <Accordion.Header>Как я получу возврат инвестиций и прибыль?</Accordion.Header>
                        <Accordion.Body>
                            После реализации проекта зайди в личный кабинет на сайте tru.estate, нажми кнопку «CLAIM», и ты автоматически получишь возврат инвестиций и прибыль на твой кошелек. Подробная инструкция – <a href="#">здесь</a>.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="11">
                        <Accordion.Header>В какой криптовалюте можно инвестировать?</Accordion.Header>
                        <Accordion.Body>
                            Купить токены TRUESTATE можно за криптовалюту Ethereum (ETH): просто выбери подходящий тебе проект на сайте tru.estate, нажми кнопку «Инвестировать» и отправь сумму инвестиций в ETH на соответствующий адрес смарт-контракта. Подробная инструкция – <a href="#">здесь</a>.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="12">
                        <Accordion.Header>Я ничего не понимаю в криптовалюте. Как мне инвестировать?</Accordion.Header>
                        <Accordion.Body>
                            Подробные инструкции по всем процессам ты можешь найти в разделе <a href="#">WhitePaper</a>. Нужна дополнительная помощь? Напиши нам на email question@tru.estate или свяжись с нами через форму «Перезвоните мне», и наш специалист свяжется с тобой для консультации.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="13">
                        <Accordion.Header>Какой опыт у команды TRUESTATE?</Accordion.Header>
                        <Accordion.Body>
                            TRUESTATE объединила опытных и амбициозных специалистов из различных сфер – блокчейн, финансы, строительство и девелопмент. Основатели и сотрудники TRUESTATE — настоящие профессионалы своего дела с огромным опытом и желанием объединить криптовалюту и недвижимость. Мы стремимся сделать процесс инвестирования в недвижимость простым и легким, как никогда раньше.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>

        <Modal
            openModalAddress={openModalAddress}
            setOpenModalAddress={setOpenModalAddress}
        />
    </section>
}

export default SectionEight;