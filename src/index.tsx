import React from 'react'; //Яндро реакта
import ReactDOM from 'react-dom'; //Импорт реакт дома, чтобы вмонтировать компонент в приложение
import App from './App';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {createStore} from "redux";
import {Provider} from "react-redux";


const countReducer = function (state = 0, action: { type: string }) {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(countReducer)


ReactDOM.render(
    <Provider store={store}>
        <div className="App">
            <div className="grid">
                <Header />
                <App/>
                <Footer />
            </div>
        </div>
    </Provider>,
  document.getElementById('root')
);