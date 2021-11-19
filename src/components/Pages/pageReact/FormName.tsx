import React, {useState, useMemo, useCallback, useEffect} from "react";
import '/home/user/app-react/src/styles/style.css'
// import frog from '../styles/images/frog.gif';



// Кастомный хук
function useMyEffect(test: (text: string) => void , message: string){

    return useEffect(() => {
        test(message)
    }, [test, message])
}

function createUser(name:string , surname: string ){
    const user = {name, surname}
    console.log(user)
    return user
}

function FormName() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [count, setCount] = useState(0);
    const [message, setMassage] = useState('')

    const user = useMemo( () => createUser(name, surname), [name, surname]);
    // const user = createUser(name, surname )

    const test = useCallback((text:string) => {
        console.log(text)
    }, [])

    useMyEffect (test, message);

    return (
        <>
            <h3>iteration 10.
                Форма, Счетчик (useMemo, useState, useCallback) </h3>
            <div className='post'>
                <div>
                    <input
                        type='text'
                        placeholder='Введите имя'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type='text'
                        placeholder='Введите фамилию'
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <br />
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                </div>

                <input
                    type='text'
                    placeholder='Введите сообщение'
                    value={message}
                    onChange={(e) => setMassage(e.target.value)}
                />

                <div className='count'>
                    Счёт: {count}
                    <button className='btn'
                        onClick={() => setCount(0)}
                    >
                        Сбросить
                    </button>
                    <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                    <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
                </div>
            </div>
        </>

    )
}
export default FormName;