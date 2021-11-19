import React from "react";
import '/home/user/app-react/src/styles/style.css';

interface MyState {
    visibility: boolean,
    str: string,
    color: string,
    colorBut: string,
}


class Iteration5 extends React.Component<{},MyState> {

        state: MyState = {
            visibility: false,
            str: localStorage.getItem('value') as string,
            color: 'none',
            colorBut: 'none',
        };

    render() {
        if (this.state.visibility){
            return (
                <div>
                    <div className='areaJS'>
                        <button onClick={this.clickHere}
                                style={{ background: this.state.colorBut}}
                                id="clickHere">НАЖМИ НА МЕНЯ</button>
                        <button id="hHere"
                                onMouseOut={this.hHereMouseout}
                                onMouseOver={this.hHereMouseover}
                                onClick={this.hHereClick}>Наведи на меня</button>

                        <input onInput={this.inputOneInput}
                               style={{ background: this.state.color}}
                               onBlur={this.inputOneBlur}
                               onFocus={this.inputOneFocus}
                               id="inputOne" placeholder="ВВЕДИ ТЕКСТ"/>
                        <p id="spanInp">{this.state.str}</p>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className='areaJS'>
                        <button onClick={this.clickHere}
                                style={{ background: this.state.colorBut}}
                                id="clickHere">Кнопка нажата</button>
                        <button id="hHere"
                                onMouseOut={this.hHereMouseout}
                                onMouseOver={this.hHereMouseover}
                                onClick={this.hHereClick}>Наведи на меня</button>

                        <input onInput={this.inputOneInput}
                               style={{ background: this.state.color}}
                               onBlur={this.inputOneBlur}
                               onFocus={this.inputOneFocus}
                               id="inputOne" placeholder="ВВЕДИ ТЕКСТ"/>
                        <p id="spanInp">{this.state.str}</p>
                    </div>
                </div>
            )
        }
    }

    hHereMouseout = () => {
        this.setState((state) => ({
        colorBut: 'white'}));
}
    hHereMouseover = () => {
        this.setState(() => ({
            colorBut: 'red'
        }));
    }


    hHereClick = () => {
        this.setState(() => ({
            colorBut: 'blue'
        }));
    }

    clickHere = () => {
        this.setState({
            visibility: !this.state.visibility
        });
    }

    inputOneInput = () => {
        this.setState(state => ({
            str: (document.getElementById('inputOne') as HTMLInputElement).value
        }));
    }

    inputOneFocus = () => {
        this.setState(state => ({
            color: '#d3d3d3'
        }));
    }

    inputOneBlur = () => {
        this.setState(state => ({
            color: 'white'
        }));
    }

// Жизненный цикл
    componentDidMount() {
        console.log('cl - Монтирование')
    }

    shouldComponentUpdate() {
        console.log('cl - Можно обновиться')
        return true
    }

    componentDidUpdate() {
        console.log('cl - Отрисовка обновилась')
        localStorage.setItem('value', this.state.str as string)
    }

    componentWillUnmount() {
        localStorage.removeItem('value')
        console.log('cl - Конец жизненного цикла компоненты')
    }
}

export default Iteration5;
