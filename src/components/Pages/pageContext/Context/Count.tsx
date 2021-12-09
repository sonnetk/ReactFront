import React, {useState} from "react";
import '/home/user/app-react/src/styles/style.css';
import CountButton from "./CountButton";
import Context from "./Context";

interface IType {
    counter: number,
    count: (n:number) => void
}

function Count() {
    const [counter, setCounter] = useState(0);

    const count = (n:number) => setCounter(counter + n)

    const value:IType = {
        counter,
        count
    }

    return(
        <Context.Provider value={value}>
                <h3>iteration 13.
                    Счетчик (React.Context) </h3>
                <div className='post'>
                    <h3>Сумма нажатий равна {value.counter}</h3>
                    <div className='buttons'>
                        <CountButton prop={1}/>
                        <CountButton prop={3}/>
                        <CountButton prop={5}/>
                        <CountButton prop={10}/>
                    </div>
                </div>
        </Context.Provider>
    )
}
export default Count;