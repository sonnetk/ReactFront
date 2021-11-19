import React from "react";
import '/home/user/app-react/src/styles/style.css'
import Posts from "./Posts";
import DataProvider from "./DataProvider";

const  getPost: string = 'http://jsonplaceholder.typicode.com/posts'

function Test() {
    return (
        <div>
            <div>
                <h3>iteration 10 -
                    Вывод постов (useState, useEffect, renderProps).
                    iteration 11 -
                    Жизненный цикл в классовых компонентах
                </h3>

                {/*Рендер-проп*/}
                <DataProvider
                    url={getPost}
                    renderContent={(data:[]) => <Posts posts ={data}/>}/>
            </div>
        </div>
    );
}
export default Test;
