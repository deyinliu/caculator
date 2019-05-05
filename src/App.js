import React from 'react';
import './App.css';
import Screen from "./components/screen";
import KeyBoard from "./components/keyboard";
import Caculate from "./Caculator";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: [],
            output: "",
            isCaculated: false,
            isPoint: false,
            error: false
        }
        this.getClick = this.getClick.bind(this);
    }
    alertErr() {
        this.setState({ error: true });
        setTimeout(() => {
            this.setState({ error: false });
        }, 500);
    }
    clear() {
        this.setState({
            input: [],
            output: [],
            isCaculated: false,
            isPoint: false
        });
    }
    doCaculate() {
        this.setState(state => ({
            output: Caculate(state.input),
            isCaculated: true
        }));
    }
    normalEnter(input) {
        this.setState(state => {
            let i = state.input;
            i.push(input);
            return { input: i };
        });
    }
    getClick(e) {
        const input = e.target.innerText;
        if (input === "AC") {
            this.clear();
            return;
        }
        if (input === "=") {
            this.doCaculate();
            return;
        }
        if (!Number.isNaN(Number(input)) || input === ".") {

        }
        this.normalEnter(input);
    }
    render() {
        let Error;
        if (this.state.error) {
            Error = (
                <div className="error">
                    <div className="error-message">Error</div>
                </div>
            );
        }
        return (
            <div className="App">
                <Screen input={this.state.input} caculate={this.state.output} />
                <KeyBoard getClick={this.getClick} />
                {Error}
            </div>
        );
    }
}

export default App;
