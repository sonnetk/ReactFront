import React from "react";
import '/home/user/app-react/src/styles/style.css';
import Count from "./pageContext/Count";
import ReduxCount from "./pageContext/ReduxCount";


function PageContext() {
    return(
        <div>
            <div className='area'>
                <h2>Context</h2>
                <Count />
                <ReduxCount />
            </div>
        </div>
    )
}
export default PageContext;