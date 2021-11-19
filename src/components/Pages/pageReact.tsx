import React from "react";
import '/home/user/app-react/src/styles/style.css';
import Test from "./pageReact/Test";
import FormName from "./pageReact/FormName";

class PageReact extends React.Component{
    render() {
        return(
            <div className='area'>
                <h2>React</h2>
                <FormName />
                <Test />
            </div>
        )
    }
}
export default PageReact;