import React from "react";
import { isNumber } from "util";

class Screen extends React.Component {
    render() {
        const Caculate = this.props.caculate;
        let result;
        let expression = "expression";
        if (isNumber(Caculate)) {
            expression = "expression output";
            result = <div className="result">{Caculate}</div>
        }
        return (
            <div className="screen">
                <div className={expression}>
                    {this.props.input}
                </div>
                {result}
            </div>
        )
    }
}
export default Screen;