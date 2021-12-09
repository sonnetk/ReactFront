import React from "react";
import '/home/user/app-react/src/styles/style.css';
// import { useDispatch, useSelector } from "react-redux";
import {createStore} from "redux";
import {Provider, connect} from "react-redux";



function ReduxCount() {
    // const dispatch = useDispatch()
    // const countRedux = useSelector(state => state)
    //
    // const handleDecrementClick = () => {
    //     dispatch({ type: 'INCREMENT' })
    // }
    //
    // const handleIncrementClick = () => {
    //     dispatch({ type: 'DECREMENT' })
    // }

    const countReducer = function (state = 0, action: { type: string }) {
        switch (action.type) {
            case "INCREMENT":
                return state + 1;
            case "DECREMENT":
                return state - 1;
            default:
                return state;
        }
    };

    const store = createStore(countReducer)

    const mapStateToProps = (state: number) => {
        return {
            count: state
        };
    };

    const mapDispatchToProps = (dispatch:any) => {
        return {
            handleIncrementClick: () => dispatch({type: 'INCREMENT' }),
            handleDecrementClick: () => dispatch({type: 'DECREMENT'})
        }
    };


    const Cont = ({count, handleIncrementClick, handleDecrementClick}:
                      {count:number, handleIncrementClick: () => void,
                          handleDecrementClick: () => void}) => (
        <div className='buttons'>
            <button onClick={handleIncrementClick}>Добавить</button>
            <h3>{count}</h3>
            <button onClick={handleDecrementClick}>Вычесть</button>
        </div>
    );

    const Container = connect(mapStateToProps, mapDispatchToProps)(Cont);

    return(
        <Provider store={store}>
            <div>
                <h3>iteration 13.
                    Счетчик (Redux) </h3>
                <div className='post'>
                    <Container/>
                </div>
            </div>
        </Provider>
    )
}
export default ReduxCount;