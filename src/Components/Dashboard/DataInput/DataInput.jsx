import { useState } from "react";
import classNames from "classnames";
import { Form, ButtonGroup, Button } from "react-bootstrap";

import "./DataInput.scss";

const DataInput = () => {
    const [residentOfUSA, setResidentOfUSA] = useState({
        yes: true,
        no: false
    });

    const handleClickYes = () => {
        setResidentOfUSA({
            yes: true,
            no: false
        });
    };

    const handleClickNo = () => {
        setResidentOfUSA({
            yes: false,
            no: true
        });
    };

    return <form className="data-input">
        <div className="data-input__block">
            <div className="data-input__block-left">
                <div>
                    <p>Пол</p>
                    <Form.Select className="data-input__block-select">
                        <option>Мужчина</option>
                        <option>Женщина</option>
                    </Form.Select>
                </div>
                <div>
                    <p>Фамилия</p>
                    <input type="text"
                        placeholder="Фамилия"
                    />
                </div>
                <div>
                    <p>Имя</p>
                    <input type="text"
                        placeholder="Имя"
                    />
                </div>
            </div>
            <div className="data-input__block-right">
                <div className="data-input__block-right-flex">
                    <div>
                        <p>Дата рождения</p>
                        <input type="text"
                            placeholder="05.05.1985"
                        />
                    </div>
                    <div>
                        <p>Гражданство</p>
                        <Form.Select className="data-input__block-select">
                            <option>Мужчина</option>
                            <option>Женщина</option>
                        </Form.Select>
                    </div>
                </div>
                <div>
                    <p>Адрес</p>
                    <input type="text"
                        placeholder="Адрес по прописке в паспорте"
                    />
                </div>
                <div className="data-input__block-right-flex">
                    <div>
                        <p>Email</p>
                        <input type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <p>Телефон</p>
                        <input type="text"
                            placeholder="+66 (066) 66 666 66"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className="data-input__text">
            Являетесь ли Вы гражданином и / или налоговым резидентом Америки (США)?
            <ButtonGroup>
                <Button
                    className={classNames({ "active": residentOfUSA.yes })}
                    onClick={handleClickYes}
                >
                    Да
                </Button>
                <Button
                    className={classNames({ "active": residentOfUSA.no })}
                    onClick={handleClickNo}
                >
                    Нет
                </Button>
            </ButtonGroup>
        </div>
    </form>
}

export default DataInput;