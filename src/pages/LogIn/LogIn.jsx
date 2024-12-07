import { useState } from "react";
import s from "./LogIn.module.css"
import { Link } from "react-router-dom";
import HideButton from "../../components/hideButton/HideButton";

const LogIn = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [isVisible, setIsVisible] = useState(false);

    const handleFormChange = (inputName, value) => {
        const newFormData = {...formData, [inputName]: value};
        setFormData(newFormData);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className={s.page__wrapper}>
                <form action="post" className={s.form} onSubmit={handleFormSubmit}>
                    <h1 className={s.form__title}>Войти в аккаунт</h1>
                    <div className={s.form__input}>
                        <label htmlFor="email">Почта:</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={(e) => handleFormChange("email", e.target.value)}
                            id="email"
                            required
                        />
                    </div>
                    <div className={s.form__input}>
                        <label htmlFor="password">Пароль:</label>
                        <div>
                            <input 
                                type={isVisible? "text" : "password"} 
                                name="password" 
                                value={formData.password} 
                                onChange={(e) => handleFormChange("password", e.target.value)}
                                id="password"
                                required
                            />
                            <HideButton onHandleClick={() => setIsVisible(!isVisible)}/>
                        </div>
                    </div>

                    <div className={s.form__checkbox}>
                        <input type="checkbox" name="remember" id="remember"/>
                        <label htmlFor="remember">Запомнить меня</label>
                    </div>
                    <button className={s.form__button} type="submit">Создать аккаунт</button>
                    <div>Нет аккаунта? <Link to="/">Создать</Link></div>
                </form>
            </div>
    )
}

export default LogIn;