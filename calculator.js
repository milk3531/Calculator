

function operate(firstNum, secondNum, operator) {
    if (operator === '+') {
        return parseInt(firstNum) + parseInt(secondNum);
    } else if (operator === '-') {
        return firstNum - secondNum
    } else if (operator === '*') {
        return firstNum * secondNum
    } else if (operator === '/') {
        if (secondNum !== 0) {
            return firstNum / secondNum
        } else return 'Cannot divide by a 0!';
    }

}


let display = document.querySelector('#screen')
let buttons = document.querySelectorAll('div.grid-item')
let numlist = [];
let secondlist = []
let operator = ['+', '-', '*', '/', '='];
let first;
let second;
let opercount = 0;




// Display the corresponding number / operations
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (buttons[i].innerHTML === 'AC') {
            display.innerHTML = '';
            numlist = [];
            secondlist = [];
        }
        else if (buttons[i].innerHTML === 'DEL') {
            // get rid of last number
            numlist.splice(numlist.length - 1)
            display.innerHTML = numlist.join('')
        } else if (operator.includes(buttons[i].innerHTML) && opercount < 1) {
            // check if numlist has more than one operator
            // if true, set operate to latest and return value of previous 
            opercount++;
            console.log('hi');
        } else if (operate.includes(buttons[i].innerHTML) && opercount > 1) {
            // run operate and return a value to be used
            // turn the first operations into a number 
            
        } 
        else {
            numlist.push(buttons[i].innerHTML)
            display.innerHTML += buttons[i].innerHTML;
        }
    })
}

