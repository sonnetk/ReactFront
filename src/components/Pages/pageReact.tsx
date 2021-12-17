import React from "react";
import '/home/user/app-react/src/styles/style.css';
import Test from "./pageReact/Test";
import FormName from "./pageReact/FormName";
import {ClContext} from "../../App";

class PageReact extends React.Component{
    render() {
        return(
            <div className='area'>
                <h2>React</h2>
                <ClContext.Consumer>
                    {number => (
                        <FormName value={number}/>
                    )}
                </ClContext.Consumer>
                <Test />
            </div>
        )
    }
}
export default PageReact;