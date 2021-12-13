import React from "react";
import '/home/user/app-react/src/styles/style.css';
// import { useDispatch, useSelector } from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {Provider, connect} from "react-redux";
import thunk from "redux-thunk";

interface MyInterface{
    count:number,
    handleIncrementClick: () => void,
    handleDecrementClick: () => void,
    handleClick: () => void
}

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
            case "SETTIMEOUT":
                return state + 10;
            default:
                return state;
        }
    };

    const store = createStore(countReducer, applyMiddleware(thunk))

    const mapStateToProps = (state: number) => {
        return {
            count: state
        };
    };

    const handleClickApp = () => {
        return (dispatch:any) => {
            setTimeout(()=>{dispatch({type: 'SETTIMEOUT'})}, 2000);
        }
    }
    
    const mapDispatchToProps = (dispatch:any) => {
        return {
            handleIncrementClick: () => dispatch({type: 'INCREMENT' }),
            handleDecrementClick: () => dispatch({type: 'DECREMENT'}),
            handleClick: () =>  dispatch(handleClickApp()),
        }
    };

    const Cont = ({count, handleIncrementClick, handleDecrementClick, handleClick}:
                      MyInterface) => (
        <div className='buttons'>
            <button onClick={handleIncrementClick}>+1</button>
            <h3>{count}</h3>
            <button onClick={handleDecrementClick}>-1</button>
            <button onClick={handleClick}>+10</button>
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