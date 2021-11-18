import React from 'react'; //Яндро реакта
import ReactDOM from 'react-dom'; //Импорт реакт дома, чтобы вмонтировать компонент в приложение
import App from './App';
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
    <div className="App">
        <div className="grid">
            <Header />
            <App/>
            <Footer />
        </div>
    </div>,
  document.getElementById('root')
);