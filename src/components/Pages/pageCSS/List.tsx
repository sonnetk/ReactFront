import React from "react";
import '/home/user/app-react/src/styles/style.css'

type MyProps = {
    items: string[]
}

function List({items}: MyProps) {
    return (
        <div>
            <span>Для того, чтобы стать нашим пользователем, выполните 3 простых шага:</span>
            <ol>
                {items.map(item => (
                    <li>{item}</li>
                ))}
            </ol>
        </div>
    );
}
export default List;


// function List(props) {
//     return (
//         <div>
//             <span>Для того, чтобы стать нашим пользователем, выполните 3 простых шага:</span>
//             <ol>
//                 {props.items.map(item => (
//                     <li>{item}</li>
//                 ))}
//             </ol>
//         </div>
//     );
// }
// export default List;

