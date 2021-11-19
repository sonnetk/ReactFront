import React from "react";
import '/home/user/app-react/src/styles/style.css';
import Iteration5 from "./pageJS/Iteration5";
import Iteration6 from "./pageJS/Iteration6";
import Iteration7 from "./pageJS/Iteration7";

class PageJS extends React.Component{
    render() {
        return(
            <div className='area'>
                <h2>JavaScript</h2>
                <h3> iteration 5.
                    iteration 11 - Жизненный цикл в функциональных компонентах</h3>
                <Iteration5 />
                <h3> iteration 6</h3>
                <Iteration6 />
                <h3> iteration 7</h3>
                <Iteration7 />
            </div>
        )
    }
}

export default PageJS;