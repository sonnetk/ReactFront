import React from "react";
import '/home/user/app-react/src/styles/style.css';

// export const colors = [
//     '#00ff41',
//     '#00fbff',
//     '#3100ff',
//     '#cf00ff',
//     '#f6ff00',
//     '#00ff00',
//     '#ff0900',
//     '#ff00db',
//     '#5e00ff',
//     '#ffaf00',
// ]
//
// export const changeColorsForm = () => {
//     return colors[Math.floor(Math.random() * ((colors.length-1) - 0) + 0)]
// }

function Form() {
    return (
        <form >
        {/*<form className='animateDiv' onMouseMove={(e) => {*/}
        {/*    e.target.style.background = changeColorsForm();*/}
        {/*}}>*/}
            <div>
                <fieldset>
                    <legend>Контактные данные</legend>
                    <label htmlFor="fname">Имя<sup>*</sup></label>
                    <input type="text" id="fname" name="fname" title="Обязательное поле" required /><br />
                    <label htmlFor="lname">Фамилия<sup>*</sup></label>
                    <input type="text" id="lname" name="lname" title="Обязательное поле" required /><br />
                    <label htmlFor="birthday">Дата рождения<sup>*</sup></label>
                    <input type="date" id="birthday" name="birthday" min="1900-01-01" value="1990-01-01"
                           title="Обязательное поле" required /><br />
                    <label htmlFor="email">Ваш email</label>
                    <input type="email" id="email" name="email" /><br />
                    <label htmlFor="phone">Ваш номер телефона<sup>*</sup></label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{11}" placeholder="88001234567"
                           title="В формате: 88001234567" required /><br />
                    <small>* - обязательные для заполнения поля</small>
                </fieldset>
                <br />
                <fieldset>
                    <legend>Расскажите о себе</legend>
                    <label>Вы предпочитаете жанры:</label><br />
                    <input type="checkbox" id="option1" name="option1" value="Fiction" />
                    <label htmlFor="option1">Фантастика</label>
                    <input type="checkbox" id="option2" name="option2" value="Mysticism" />
                    <label htmlFor="option2">Мистика</label>
                    <input type="checkbox" id="option3" name="option3" value="Drama" />
                    <label htmlFor="option3">Драма</label><br />
                    <input type="checkbox" id="option4" name="option4" value="Scientific" />
                    <label htmlFor="option4">Научные</label>
                    <input type="checkbox" id="option5" name="option5" value="Detectives" />
                    <label htmlFor="option5">Детективы</label>
                    <input type="checkbox" id="option6" name="option6" value="Educational literature" />
                    <label htmlFor="option6">Учебная литература</label><br />
                    <br />
                    <input type="radio" id="yes" name="ask" value="yes" />
                    <label htmlFor="yes">У меня есть книги, которыми я хотел(а) бы
                        поделиться</label><br />
                    <input type="radio" id="no" name="ask" value="no" />
                    <label htmlFor="no">У меня нет книг, которыми я хотел(а) бы
                        поделиться</label><br />
                </fieldset>
            </div>
            <input id="submit" name="submit" type="submit" />
        </form>
    );
}

export default Form;