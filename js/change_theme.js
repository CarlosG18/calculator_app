const btnChange = document.querySelector('.container-circle')
const circle = document.querySelector('.circle')
const body = document.querySelector('body')
const visor_color = document.querySelector('.calculator-visor')
const calculator_p = document.querySelector('.calculator-header')
const keyboard = document.querySelector('.calculator-keyboard')
const key = document.querySelectorAll('.cor-neutral')
const text_cor = document.querySelectorAll('.text-cor')
const cor1 = document.querySelectorAll('.cor1')
const cor2 = document.querySelector('.cor2')
const igual = document.querySelector('.igual')

var corCircle = ["hsl(6, 63%, 50%)", "hsl(25, 98%, 40%)", "hsl(176, 100%, 44%)"]
var corToggle = ["hsl(223, 31%, 20%)", "hsl(0, 5%, 81%)", "hsl(268, 71%, 12%)"]
var corBack = ["#3a4764", "#e6e6e6", "#160628"]
var corVisor = ["hsl(224, 36%, 15%)", "hsl(0, 0%, 93%)", "hsl(268, 71%, 12%)"]
var corKey = ["hsl(30, 25%, 89%)", "hsl(45, 7%, 89%)", "hsl(268, 47%, 21%)"]
var arrayCor1 = ["hsl(225, 21%, 49%)", "hsl(185, 42%, 37%)", "hsl(281, 89%, 26%)"]
var array_text_cor = ["hsl(0, 0%, 100%)", "hsl(60, 10%, 19%)", "hsl(52, 100%, 62%)"]
var corP = ["hsl(221, 14%, 31%)", "hsl(60, 10%, 19%)", "hsl(52, 100%, 62%)"]
var corKeyShadow = ["0 4px 1px hsl(28, 16%, 65%)", "0 4px 1px hsl(35, 11%, 61%)", "0 4px 1px hsl(290, 70%, 36%)"]
var cor1KeyShadow = ["0 4px 1px hsl(224, 28%, 35%)", "0 4px 1px hsl(185, 58%, 25%)", "0 4px 1px hsl(285, 91%, 52%)"]
var cor2KeyShadow = ["0 4px 1px hsl(6, 70%, 34%)", "0 4px 1px hsl(25, 99%, 27%)", "0 4px 1px hsl(177, 92%, 70%)"]

var current_theme = 1

btnChange.addEventListener('click', () =>{
    if(current_theme + 1 > 3){
        current_theme = 1
    }else{
        current_theme++
    }

    if(current_theme == 1){
      text_cor.forEach(txt => {
        txt.style.color = array_text_cor[0]
      })
      body.style.color = corP[0]
        btnChange.style.backgroundColor = corToggle[0]
        cor1.forEach(c => {
          c.style.backgroundColor = arrayCor1[0]
          c.style.boxShadow = cor1KeyShadow[0]
        })
        cor2.style.backgroundColor = corCircle[0]
        cor2.style.boxShadow = cor2KeyShadow[0]
        circle.style.backgroundColor = corCircle[0]
        circle.classList.remove('position2')
        body.style.backgroundColor = corBack[0]
        circle.classList.remove('position3')
        circle.classList.add('position1')
        visor.style.backgroundColor = corVisor[0]
        keyboard.style.backgroundColor = corToggle[0]
        key.forEach(k => {
          k.style.backgroundColor = corKey[0]
          k.style.boxShadow = corKeyShadow[0]
        })
    }else if(current_theme == 2){
      text_cor.forEach(txt => {
        txt.style.color = array_text_cor[1]
      })
        body.style.color = corP[1]
        btnChange.style.backgroundColor = corToggle[1]
        cor1.forEach(c => {
          c.style.backgroundColor = arrayCor1[1]
          c.style.boxShadow = cor1KeyShadow[1]
        })
        cor2.style.backgroundColor = corCircle[1]
        cor2.style.boxShadow = cor2KeyShadow[1]
        circle.style.backgroundColor = corCircle[1]
        circle.classList.remove('position1')
        circle.classList.remove('position3')
        circle.classList.add('position2')
        body.style.backgroundColor = corBack[1]
        visor.style.backgroundColor = corVisor[1]
        keyboard.style.backgroundColor = corToggle[1]
        key.forEach(k => {
          k.style.backgroundColor = corKey[1]
          k.style.boxShadow = corKeyShadow[1]
        })
    }else{
        text_cor.forEach(txt => {
        txt.style.color = array_text_cor[2]
      })
        body.style.color = corP[2]
        btnChange.style.backgroundColor = corToggle[2]
        cor1.forEach(c => {
          c.style.backgroundColor = arrayCor1[2]
          c.style.boxShadow = cor1KeyShadow[2]
        })
        cor2.style.backgroundColor = corCircle[2]
        cor2.style.boxShadow = cor2KeyShadow[2]
        circle.style.backgroundColor = corCircle[2]
        circle.classList.remove('position1')
        circle.classList.remove('position2')
        circle.classList.add('position3')
        body.style.backgroundColor = corBack[2]
        visor.style.backgroundColor = corVisor[2]
        igual.style.color = corBack[2]
        keyboard.style.backgroundColor = corToggle[2]
        key.forEach(k => {
          k.style.backgroundColor = corKey[2]
          k.style.boxShadow = corKeyShadow[2]
        })
    }
})