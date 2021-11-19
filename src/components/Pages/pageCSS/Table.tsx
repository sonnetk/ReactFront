import React from "react";
import '/home/user/app-react/src/styles/style.css';
// @ts-ignore
import cat1 from '/home/user/app-react/src/styles/images/cat1.jpg';
// @ts-ignore
import cat3 from '/home/user/app-react/src/styles/images/cat3.jpg';
// @ts-ignore
import cat5 from '/home/user/app-react/src/styles/images/cat5.jpg';
// @ts-ignore
import cat6 from '/home/user/app-react/src/styles/images/cat6.jpg';
// @ts-ignore
import cat7 from '/home/user/app-react/src/styles/images/cat7.jpg';
// @ts-ignore
import cat8 from '/home/user/app-react/src/styles/images/cat8.jpg';


interface MyTable {
    title?: string,
    alt?: string,
    img?: string,
    width?: number,
    height?: number,
    count?: number,
    id?: number,
}


const table: MyTable[][] = [
    [
        { title: 'Фантастика' },
        { title: 'Мистика' },
        { title: 'Драмма' },
        { title: 'Науч-поп' },
        { title: 'Детективы' },
        { title: 'Учебная литература' },
    ],
    [
        {alt: 'Фантастика', img: cat3, width: 160, height: 160},
        {alt: 'Мистика', img: cat6, width: 160, height: 160},
        {alt: 'Драмма', img: cat5, width: 160, height: 160},
        {alt: 'Науч-поп', img: cat7, width: 160, height: 160},
        {alt: 'Детективы', img: cat1, width: 160, height: 160},
        {alt: 'Учебная литература', img: cat8, width: 160, height: 160},
    ],
    [
        { count: 157, id: Math.random() },
        { count: 124, id: Math.random() },
        { count: 98, id: Math.random() },
        { count: 145, id: Math.random() },
        { count: 72, id: Math.random() },
        { count: 105, id: Math.random() },
    ],
]

class Table extends React.Component{
    render() {
        return(
            <div>
                <table>
                    <caption>Вы можете найти у нас следующие жанры книг</caption>
                    {table.map((tr, ind) => {
                        if (ind === 0) {
                            return <tr>
                                {
                                    tr.map((th) => <th key={th.title}>{th.title}</th>)
                                }
                            </tr>
                        }
                        if (ind === 1) {
                            return <tr>
                                {
                                    tr.map((th) => <td key={th.alt}><img className='cat' src={th.img} alt={th.alt} width={th.width} height={th.height}/></td>)
                                }
                            </tr>
                        }
                        if (ind === 2) {
                            return <tr>
                                {
                                    tr.map((th) => <th key={th.id}>В наличии книг: {th.count}</th>)
                                }
                            </tr>
                        }
                    })}
                </table>
            </div>
        )
    }
}

export default Table;