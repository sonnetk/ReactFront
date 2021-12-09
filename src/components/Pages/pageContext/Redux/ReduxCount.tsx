import React from "react";
import '/home/user/app-react/src/styles/style.css';
import { useDispatch, useSelector } from "react-redux";


function ReduxCount() {

    const dispatch = useDispatch()
    const countRedux = useSelector(state => state)

    const handleDecrementClick = () => {
        dispatch({ type: 'INCREMENT' })
    }

    const handleIncrementClick = () => {
        dispatch({ type: 'DECREMENT' })
    }

    return(
        <div>
            <h3>iteration 13.
                Счетчик (Redux) </h3>
            <div className='post'>
                <div className='buttons'>
                    <button onClick={handleDecrementClick}>Добавить</button>
                    <h3>{countRedux}</h3>
                    <button onClick={handleIncrementClick}>Вычесть</button>
                </div>
            </div>
        </div>
    )
}
export default ReduxCount;