

function operate(firstNum, secondNum, operator) {
    if (operator === '+') {
        solution = Number(firstNum) + Number(secondNum);
    } else if (operator === '-') {
        solution = Number(firstNum) - Number(secondNum)
    } else if (operator === '*') {
        solution = firstNum * secondNum
    } else if (operator === '/') {
        if (secondNum !== 0) {
            solution = firstNum / secondNum
        } else return 'Cannot divide by a 0!';
    }

}


let display = document.querySelector('#screen')
let buttons = document.querySelectorAll('div.grid-item')
let operator = ['+', '-', '*', '/', '='];
let specialoperators = ['%', 'AC', 'DEL'];
let firstnumber = '';
let secondnumber = '';
let clicked = 0;
let curoperator = '';
let solution = ''
let savesolution = ''
let currentnumber = '';
let percent = '';





// Display the corresponding number / operations
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (buttons[i].innerHTML === 'AC') {
            firstnumber = ''
            secondnumber = ''
            curoperator = ''
            clicked = 0
        }
        if (clicked === 0) {
            if (savesolution === '') {
                if (!operator.includes(buttons[i].innerHTML)) {
                    if (!specialoperators.includes(buttons[i].innerHTML)) {
                        firstnumber += buttons[i].innerHTML
                    }
                    currentnumber = firstnumber // keep track of which number we're on
                    
                }
                console.log(firstnumber);
                display.innerHTML = firstnumber
            } else {
                firstnumber = solution
                currentnumber = firstnumber
                console.log(firstnumber);
                display.innerHTML = firstnumber

            }
        }
        if (operator.includes(buttons[i].innerHTML)) {
            clicked++;
            curoperator = buttons[i].innerHTML
            console.log(curoperator);
            display.innerHTML = ''
        }
        if (!operator.includes(buttons[i].innerHTML) && clicked === 1) {
            secondnumber += buttons[i].innerHTML
            currentnumber = secondnumber
            console.log(secondnumber);
            console.log(firstnumber); // incorrect assigning of first number
            operate(firstnumber, secondnumber, curoperator)
            console.log(solution);
            display.innerHTML = secondnumber
        }
        if (operator.includes(buttons[i].innerHTML) && clicked === 2) {
            savesolution = solution
            console.log(savesolution);
            secondnumber = ''
            console.log(solution);
        }
        if (!operator.includes(buttons[i].innerHTML) && clicked === 2) {
            firstnumber = solution
            secondnumber += buttons[i].innerHTML
            operate(firstnumber, secondnumber, curoperator)
            console.log(firstnumber);
            secondnumber = ''
            console.log(solution);
            clicked = 0
        }

        switch (buttons[i].innerHTML) {
            case '=':

                break;

            case 'DEL':
                // might need to save first or second number to erase from
                if (clicked === 0) {
                    // delete first number before the first operator
                    firstnumber = firstnumber.replace(firstnumber.substr(firstnumber.length - 1), '') 
                    console.log(firstnumber)
                } else if (clicked === 1 && secondnumber === '') {
                    // with one operator and second number yet typed, delete the operator
                    curoperator.substr(0)
                    clicked-- // indicate that the operator is now gone
                } else {
                    // else delete second number
                    secondnumber = secondnumber.substr(secondnumber.length - 1)
                }
                break;

            case '%':
                percent = currentnumber/100
                console.log(percent);
                if (clicked === 0) {
                    firstnumber = percent;
                } else {
                    secondnumber = percent;
                }
                break;

            case '.':
                if (currentnumber === '') {
                    currentnumber = '0.'
                } else {
                    currentnumber += '.'
                }
                break;

            case '00':
                currentnumber * 100;
                break;
        }


        if (!operator.includes(buttons[i].innerHTML)) {
            display.innerHTML = buttons[i].innerHTML

        }
        // todo: implement '=' 
        //     : Implement other buttons
        //     : Implement decimals and percentages
        //     : Implement displaying of numbers

        //     : work on design
    })
}

