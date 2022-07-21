import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

import "./CallMeForm.scss";

const CallMeForm = ({ setOpenCallMeForm }) => {

    const notify = () => {
        toast.success("Спасибо за обращение!", {
            className: "toast-modal",
            autoClose: 3000,
            progressClassName: 'toast-modal-progress'
        });
    };

    const handleSubmit = () => {
        notify();
        setOpenCallMeForm(false);
    };

    return <form className="call-me-form">
        <p>
            Как к Вам обращаться?
        </p>
        <Form.Select className="call-me-form__select">
            <option>Mr</option>
            <option>Mrs</option>
        </Form.Select>
        <div className="call-me-form__block">
            <div>
                <p>Имя</p>
                <input type="text"
                    placeholder="Имя"
                />
            </div>
            <div>
                <p>Фамилия</p>
                <input type="text"
                    placeholder="Фамилия"
                />
            </div>
        </div>
        <div className="call-me-form__block">
            <div>
                <p>Телефон</p>
                <input type="text"
                    placeholder="+66 (066) 66 666 66"
                />
            </div>
            <div>
                <p>Вариант связи</p>
                <Form.Select className="call-me-form__block-select">
                    <option>WhatsApp</option>
                    <option>Telegram</option>
                </Form.Select>
            </div>
        </div>
        <div className="call-me-form__block">
            <div>
                <p>Часовой пояс</p>
                <Form.Select className="call-me-form__block-select">
                    <option>GMT+3 (Киев)</option>
                    <option>GMT+3 (Киев)</option>
                </Form.Select>
            </div>
            <div>
                <p>Желаемое время звонка</p>
                <Form.Select className="call-me-form__block-select">
                    <option>13:00</option>
                    <option>14:00</option>
                </Form.Select>
            </div>
        </div>

        <p style={{ marginTop: 13 }}>
            Тема обращения
        </p>
        <Form.Select className="call-me-form__select">
            <option value="" disabled selected>Выбери тему обращения</option>
        </Form.Select>

        <p style={{ marginTop: 13 }}>
            Ваше сообщение
        </p>
        <textarea className="call-me-form__textarea"
            placeholder="Текст сообщения"
        />

        <p style={{ marginTop: 5 }}>
            Email
        </p>
        <input className="call-me-form__input"
            type="email"
            placeholder="Email"
        />
        <span>*если мы не сможем дозвониться</span>

        <p style={{ marginTop: 12 }}>
            Язык консультации
        </p>
        <div className="call-me-form__block-checkboxes">
            <div>
                <input type="checkbox" class="custom-checkbox" id="English" name="happy" value="yes" />
                <label for="English">English</label>
            </div>
            <div>
                <input type="checkbox" class="custom-checkbox" id="Russian" name="happy" value="yes" />
                <label for="Russian">Русский</label>
            </div>
            <div>
                <input type="checkbox" class="custom-checkbox" id="Ukranian" name="happy" value="yes" />
                <label for="Ukranian">Украинский</label>
            </div>
            <div>
                <input type="checkbox" class="custom-checkbox" id="Deutsch" name="happy" value="yes" />
                <label for="Deutsch">Deutsch</label>
            </div>
        </div>

        <Button onClick={handleSubmit}>
            Перезвоните мне
            <svg width="36" height="13" viewBox="0 0 36 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.2492 7.10782C35.5849 6.77213 35.5849 6.22787 35.2492 5.89218L29.7788 0.421787C29.4431 0.0860968 28.8989 0.0860968 28.5632 0.421787C28.2275 0.757478 28.2275 1.30174 28.5632 1.63743L33.4257 6.5L28.5632 11.3626C28.2275 11.6983 28.2275 12.2425 28.5632 12.5782C28.8989 12.9139 29.4431 12.9139 29.7788 12.5782L35.2492 7.10782ZM0.257812 7.35959H34.6414V5.64041H0.257812V7.35959Z" fill="white" />
            </svg>
        </Button>
    </form>
}

export default CallMeForm;