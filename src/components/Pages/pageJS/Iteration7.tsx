import React from "react";
import '/home/user/app-react/src/styles/style.css';

interface MyObj{
    name:string,
}

class Iteration7 extends React.Component {

    state = {
        gitRepo:'',
        textSpan:''
    }

    clickPromise = () => {
        let linkGit: string = `https://api.github.com/users/${this.state.gitRepo}`

        fetch(linkGit+'/repos')
            .then(response => response.json())
            .then((commits:[]) => {
                let str: string = 'Репозитории - '
                commits.map((commit: MyObj)=> str+= `${commit.name} `);
                this.setState({ ...this.state, textSpan: str});
            })
            .catch(error =>  this.setState({ ...this.state, textSpan: error.message}));
        setTimeout(() => console.log(this.state), 0)
    }

    clickAsync = () => {
        (async () => {
            let linkGit: string = `https://api.github.com/users/${this.state?.gitRepo}`
            let url: string = linkGit + '/repos';

            let response = await fetch(url);
            try {
                let commits:[] = await response.json();
                let str:string = 'Репозитории = '
                commits.map((commit:MyObj) => str += `${commit.name} `);
                this.setState({...this.state, textSpan: str});
            } catch (err:unknown) {
                if ( err instanceof Error){
                    console.log(err.stack)
                    this.setState({...this.state, textSpan: `Ошибка HTTP: ${err.message}`});
                }
            }
            setTimeout(() => console.log(this.state), 0)
        })()
    }


    render() {
        return (
            <div className='areaJS'>
                <input onChange={(e => {
                    this.setState({ gitRepo: e.target.value })
                })} id="inputLink" placeholder="ИМЯ ПОЛЬЗОВАТЕЛЯ" />
                <button onClick={this.clickPromise} id="clickPromise">Promise</button>
                <button onClick={this.clickAsync} id="clickAsync">async/await</button>
                <span id="resultClick">{this.state.textSpan}</span>
            </div>
        );
    }
}

export default Iteration7;