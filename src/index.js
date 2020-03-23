module.exports = function check(str, bracketsConfig) {
    let stack = [];

    let strlen = str.length;

    if (strlen % 2 !== 0) return false;

    let lenConfig = bracketsConfig.length;
    let checkEven = 1;
    let cheven;
    let chClose;
    for (let i = 0; i < strlen; i++) {
        let char = str.charAt(i);
        let close = false;
        let open = false;
        let even = false;
        for (let j = 0; j < lenConfig; j++) {
            if (bracketsConfig[j][0] == bracketsConfig[j][1] && char == bracketsConfig[j][0]) {
                even = true;
                checkEven = (-1) * checkEven;
                cheven = char;
                break;
            }
            if (char == bracketsConfig[j][0]) {
                open = true;
                break;
            }
            if (char == bracketsConfig[j][1]) {
                close = true;
                chClose = bracketsConfig[j][0];
                break;
            }
        }
        if (even == true) {
            if (checkEven == -1) {
                stack.push(char);
            }
            if (checkEven == 1 && cheven == stack[stack.length - 1]) {
                stack.pop();
            }
        } else {

            if (open === true) {
                stack.push(char);
            }
            if (close === true && chClose == stack[stack.length - 1]) {
                stack.pop();
            }
        }
    }
    return (stack.length === 0);
}