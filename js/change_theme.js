const btnChange = document.querySelector('.container-circle')
const circle = document.querySelector('.circle')
const body = document.querySelector('body')
const visor_color = document.querySelector('.calculator-visor')
const calculator_p = document.querySelector('.calculator-header')
const keyboard = document.querySelector('.calculator-keyboard')


var current_theme = 1

btnChange.addEventListener('click', () =>{
    if(current_theme + 1 > 3){
        current_theme = 1
    }else{
        current_theme++
    }

    if(current_theme == 1){
        circle.classList.remove('position2')
        body.classList.remove('theme2')
        body.classList.remove('theme3')
        circle.classList.remove('position3')
        circle.classList.add('position1')
        body.classList.add('theme1')
        visor_color.classList.remove('calculator-visor-theme2')
        visor_color.classList.remove('calculator-visor-theme3')
        visor_color.classList.add('calculator-visor-theme1')
        calculator_p.classList.remove('p-theme2')
        calculator_p.classList.remove('p-theme3')
        calculator_p.classList.add('p-theme1')
        keyboard.classList.remove('calculator-keyboard-theme2')
        keyboard.classList.remove('calculator-keyboard-theme3')
        keyboard.classList.add('calculator-keyboard-theme1')
    }else if(current_theme == 2){
        circle.classList.remove('position1')
        circle.classList.remove('position3')
        circle.classList.add('position2')
        body.classList.remove('theme1')
        body.classList.remove('theme3')
        body.classList.add('theme2')
        visor_color.classList.remove('calculator-visor-theme1')
        visor_color.classList.remove('calculator-visor-theme3')
        visor_color.classList.add('calculator-visor-theme2')
        calculator_p.classList.remove('p-theme1')
        calculator_p.classList.remove('p-theme3')
        calculator_p.classList.add('p-theme2')
        keyboard.classList.remove('calculator-keyboard-theme1')
        keyboard.classList.remove('calculator-keyboard-theme3')
        keyboard.classList.add('calculator-keyboard-theme2')
    }else{
        circle.classList.remove('position1')
        circle.classList.remove('position2')
        circle.classList.add('position3')
        body.classList.remove('theme1')
        body.classList.remove('theme2')
        body.classList.add('theme3')
        visor_color.classList.remove('calculator-visor-theme2')
        visor_color.classList.remove('calculator-visor-theme1')
        visor_color.classList.add('calculator-visor-theme3')
        calculator_p.classList.remove('p-theme1')
        calculator_p.classList.remove('p-theme2')
        calculator_p.classList.add('p-theme3')
        keyboard.classList.remove('calculator-keyboard-theme2')
        keyboard.classList.remove('calculator-keyboard-theme1')
        keyboard.classList.add('calculator-keyboard-theme3')
    }
})

