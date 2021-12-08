import React, {useContext} from "react";
import '/home/user/app-react/src/styles/style.css';
import Context from "./Context";



function CountButton(props: {prop: number}) {

   const value = useContext(Context)

    return(
        <>
            <button onClick={value.count(props.prop)}>+{props.prop}</button>
        </>
    )
}
export default CountButton;