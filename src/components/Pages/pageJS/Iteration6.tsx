import React from "react";
import '/home/user/app-react/src/styles/style.css';



const clickBOM = () => {
    console.clear()
    console.log(window.history)
    console.log(navigator.platform, navigator.appCodeName, navigator.language)
    console.info('Информация')
    console.warn('Предупреждение')
    console.error('Ошибка')
}

const back = () => window.history.back()
const next = () => window.history.forward()
const go = () => window.history.go(-2)

const clickCookie = () => {
    let name = "my name";
    let value = "Tanya K"
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    console.log(document.cookie); // my%20name=Tanya%20K

    document.cookie = "path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"
    console.log(document.cookie)
}

const clickSS = () => {
    console.log(sessionStorage.getItem('testSession')) // null, если вкладка новая
    sessionStorage.setItem('testSession', 'Я тут до закрытия вкладки')
    sessionStorage.setItem('test', ':)');
    console.log(sessionStorage.getItem('test'), `\n Количество элементов - ${sessionStorage.length}`);
    sessionStorage.removeItem('test')
    console.log(`Произведено удаление по ключу test\n Количество элементов - ${sessionStorage.length}`);
}

const clickLS = () => {
    console.log(localStorage.getItem('testLocal')) // null только в первый запуск или после localStorage.removeItem('testLocal') в консоли
    localStorage.setItem('testLocal', 'Я переживу перезапуск браузера')
    localStorage.setItem('test', ':)');
    console.log(localStorage.getItem('test'), `\n Количество элементов - ${localStorage.length}`);
    localStorage.removeItem('test')
    console.log(`Произведено удаление по ключу test\n Количество элементов - ${localStorage.length}`);

}

function Iteration6 ({value}:any) {
    const clickURL = () => {
        alert(window.location.href)
        console.log(value)
    }

    return (
        <div>
            <div className='areaJS'>
                <button onClick={clickURL} id="clickURL">Получить URL</button>
                <button onClick={clickBOM} id="clickBOM">BOM</button>
                <span> НАВИГАЦИЯ: </span>
                <button onClick={next} className="next">Вперед</button>
                <button onClick={back} className="back">Назад</button>
                <button onClick={go} className="go">Назад Х2</button>
            </div>
            <div className='areaJS'>
                <button onClick={clickCookie} id="clickCookie">Cookie!</button>
                <button onClick={clickSS} id="clickSS">Session Storage</button>
                <button onClick={clickLS} id="clickLS">Local Storage</button>
            </div>
        </div>

    );
}

export default Iteration6;