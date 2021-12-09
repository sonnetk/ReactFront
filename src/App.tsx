import React from "react";
import Menu from "./components/Menu";
import '/home/user/app-react/src/styles/style.css';
import PageReact from "./components/Pages/pageReact";
import PageJS from "./components/Pages/pageJS";
import PageCSS from "./components/Pages/pageCSS";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import PageContext from "./components/Pages/pageContext";


export default function App() {
  return (
      <BrowserRouter>
          <div>
              <Menu />
              <Routes>
                  <Route path="/" element={
                      <h2>Начальная страница. Выберите вкладку</h2>
                  } />
                  <Route path="/context" element={<PageContext />} />
                  <Route path="/react" element={<PageReact />} />
                  <Route path="/javascript" element={<PageJS />} />
                  <Route path="/css" element={<PageCSS />} />
                  <Route
                      path="/*"
                      element={
                          <h2>Страницы не существует</h2>
                      }
                  />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

