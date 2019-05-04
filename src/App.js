import React from 'react';
import './App.css';
import Screen from "./components/screen";
import KeyBoard from "./components/keyboard";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
        }
        this.getClick = this.getClick.bind(this);
    }
    getClick(e) {
        const input = e.target.innerText;
        if (input === "AC") {
            this.setState({
                input: "",
                output: ""
            })
            return;
        }
        if (input === "=") {
            this.setState(state => ({
                output: eval(state.input)
            }));
            return;
        }
        this.setState(state => ({
            input: state.input + input
        }))
    }
    render() {
        return (
            <div className="App">
                <Screen input={this.state.input} caculate={this.state.output} />
                <KeyBoard getClick={this.getClick} />
            </div>
        );
    }
}

export default App;
