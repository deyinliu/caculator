import React from "react";
import "../asset/style.css";
class KeyBoard extends React.Component {

    render() {
        const getClick = this.props.getClick;
        return (
            <div className="keyboard" onClick={getClick}>
                <div className="item control">AC</div>
                <div className="item control">+/-</div>
                <div className="item control">%</div>
                <div className="item operator">&divide;</div>
                <div className="item number">7</div>
                <div className="item number">8</div>
                <div className="item number">9</div>
                <div className="item operator">&times;</div>
                <div className="item number">4</div>
                <div className="item number">5</div>
                <div className="item number">6</div>
                <div className="item operator">-</div>
                <div className="item number">1</div>
                <div className="item number">2</div>
                <div className="item number">3</div>
                <div className="item operator">+</div>
                <div className="item number zero">0</div>
                <div className="item number" style={{ lineHeight: 65 + "px" }}>.</div>
                <div className="item operator">=</div>
            </div>
        )
    }
}

export default KeyBoard;