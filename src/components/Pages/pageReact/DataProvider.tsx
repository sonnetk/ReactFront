import React, {useEffect, useState} from "react";
import '/home/user/app-react/src/styles/style.css'

type MyProps = {
    url: string,
    renderContent: any,
}


function DataProvider({url, renderContent}: MyProps) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
        console.log('fn - Отрисовка обновилась')

        return() => {
            console.log('fn - Размонтирование')

        }
    }, [url])

    return <div> {renderContent(data)} </div>;
}
export default DataProvider;