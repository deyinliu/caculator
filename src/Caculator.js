const conf = { "+": 1, "-": 1, "×": 2, "÷": 2, ")": 3 };
const _iter = (temp, arr, item) => {
    if (!temp.length) {
        temp.push(item);
    } else {
        if (item === "(") {
            while (temp.length) {
                let top = temp.pop();
                if (top !== ")") {
                    arr.push(top);
                } else {
                    break;
                }
            }
        } else {
            while (temp.length) {
                let top = temp.pop();
                if (conf[item] >= conf[top] || top === ")") {
                    temp.push(top);
                    temp.push(item);
                    break;
                } else {
                    arr.push(top);
                }
            }
            if (temp.length <= 0) {
                temp.push(item);
            }
        }
    }
}
const _parse = (str) => {
    const len = str.length;
    let temp = [], arr = [];
    for (let i = len - 1; i >= 0; i--) {
        if (!Number.isNaN(Number(str[i]))) {
            arr.push(str[i]);
        } else {
            _iter(temp, arr, str[i]);
        }
    }
    while (temp.length) {
        arr.push(temp.pop());
    }
    return arr;
}
const Caculate = (str) => {
    let arr = _parse(str);
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isNaN(Number(arr[i]))) {
            temp.push(arr[i]);
        } else {
            let next = Number(temp.pop());
            let pre = Number(temp.pop());
            let result;
            switch (arr[i]) {
                case "-":
                    result = next - pre;
                    break;
                case "+":
                    result = next + pre;
                    break;
                case "×":
                    result = next * pre;
                    break;
                case "÷":
                    result = next / pre;
                default:
                    break;
            }
            temp.push(result);
        }
    }
    return temp[0];
}
export default Caculate;