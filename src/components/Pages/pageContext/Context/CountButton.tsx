import React, {useContext} from "react";
import '/home/user/app-react/src/styles/style.css';
import Context from "./Context";



function CountButton(props: {prop: number}) {

   const value = useContext(Context)

    const handlerClick = () => {
        value.count(props.prop)
    }

    return(
        <>
            <button onClick={handlerClick}>+{props.prop}</button>
        </>
    )
}
export default CountButton;