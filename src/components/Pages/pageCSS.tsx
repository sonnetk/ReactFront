import React from "react";
import '/home/user/app-react/src/styles/style.css';
import Table from "./pageCSS/Table";
import Form from "./pageCSS/Form";
import About from "./pageCSS/About";
import List from "./pageCSS/List";


function PageCSS() {
   return(
       <div className='area'>
           <div className="about">
               <h2>HTML+CSS</h2>
               <h2>О нас</h2>
               <About />
           </div>
           <div className="genres">
               <h2>Жанры</h2>
               <Table />
           </div>
           <div className="form">
               <h2>Анкета</h2>
               <List items={['Заполните контактную информацию о себе',
                   'Расскажите о себе, отметив подходящие вам пункты',
                   'Отправьте нам свой ответ']} />
               <Form />
               <div className="footer">
                   <h2 id="contacts">Наши контакты</h2>
                   <ul className="contacts">
                       <li> г.Тула, пр. Ленина, 100500</li>
                       <li> 88005553535</li>
                       <li>knigivam.tula</li>
                   </ul>
               </div>
           </div>
       </div>
   )
}

export default PageCSS;