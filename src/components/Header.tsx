import React from "react";
import '/home/user/app-react/src/styles/style.css'

function Header() {
    return (
        React.createElement('header', null,
            React.createElement ('div', null,
                React.createElement ('h1', null, `ITERATIONS`)))
        // <header>
        //     <div>
        //         <h1>ИТЕРАЦИИ</h1>
        //     </div>
        // </header>
    );
}
export default Header;