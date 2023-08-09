const keys = document.querySelectorAll('.key')
const visor = document.querySelector('.calculator-visor')

class Calculator{
    constructor(){
        this.visor = ""
        this.valores = []
        this.reset = false
        this.resultado = 0
        this.operation = []
    }

    get_resultado(){
        return this.resultado
    }

    get_visor(){
        return this.visor
    }

    get_operation(){
        return this.operation
    }

    get_valores(){
        return this.valores
    }

    set_resultado(valor){
        this.resultado = valor
    }


    set_visor(valor){
        this.visor += valor
    }

    set_operation(operation){
        let op = {
            'operation': operation,
            'priority': 1,
            'valor_a': null,
            'valor_b': null,
            'resultado': null,
        }
        if(operation == "multiplicacao" || operation == "divisao"){
            op.priority = 2
        }
        this.operation.push(op) 
    }

    reset_visor(){
        this.visor = ""
    }

    reorder_operation_priority(){
        this.operation = this.operation.sort((a, b) => {
            return b.priority - a.priority
        })
    }

    reset_calculator(){
        this.reset_visor()
        this.active = false
        this.operation = []
        this.valores = []
        this.resultado = 0
    }

    slice_valores(index, qtd){
        this.valores.slice(index, qtd)
    }

    clean_valores(){
        let number = ""
        for(var i=0; i < this.visor.length; i++){
            if(this.visor[i] == '+' || this.visor[i] == '-' || this.visor[i] == 'x' || this.visor[i] == '/'){
                this.valores.push(parseFloat(number))
                number = ""
            }else{
                number += this.visor[i]
            }
        }
        this.valores.push(parseFloat(number))
    }

    ajust_operation(){
        for(var i = 0; i < this.operation.length; i++){
            this.operation[i].valor_a = this.valores[i]
            this.operation[i].valor_b = this.valores[i+1]
        }
    }

    soma(a,b){
        return a+b
    }

    subtracao(a,b){
        return a-b
    }

    divisao(a,b){
        return a/b
    }

    multiplicacao(a,b){
        return a*b
    }

    igual(){
        let ultimoIndex = this.operation.length - 1

        this.clean_valores()
        this.ajust_operation()
        this.reorder_operation_priority()

        for(var i =0; i< this.operation.length; i++){
            if(this.operation[i].operation == "multiplicacao"){
                this.operation[i].resultado = this.multiplicacao(this.operation[i].valor_a, this.operation[i].valor_b)
            }
            if(this.operation[i].operation == "soma"){
                this.operation[i].resultado = this.soma(this.operation[i].valor_a, this.operation[i].valor_b)
            }
            if(this.operation[i].operation == "divisao"){
                this.operation[i].resultado = this.divisao(this.operation[i].valor_a, this.operation[i].valor_b)
            }
            if(this.operation[i].operation == "subtracao"){
                this.operation[i].resultado = this.subtracao(this.operation[i].valor_a, this.operation[i].valor_b)
            }
            
            if(i+1 < this.operation.length){
                this.operation[i+1].valor_b = this.operation[i].resultado
            }

        }

        this.resultado = this.operation[ultimoIndex].resultado
        this.visor = this.get_resultado()
        console.log(this.get_operation())
        this.operation = []
        this.valores = []
    }

    delete(){
        let string = this.visor
        let tamString = string.length
        if(string[tamString-1] == '+' || string[tamString-1] == '-' || string[tamString-1] == 'x' || string[tamString-1] == '/'){
            this.pop_operation()
        }
        let newString = ""
        for(var i=0; i < tamString-1; i++){
            newString += string[i]
        }
        this.visor = newString
    }
}

var calc = new Calculator()

keys.forEach(key => {
    key.addEventListener('click', () =>{
        if(key.textContent == '+'){
            calc.set_operation("soma")
        }
        if(key.textContent == '-'){
            calc.set_operation("subtracao")
        }
        if(key.textContent == 'x'){
            calc.set_operation("multiplicacao")
        }
        if(key.textContent == '/'){
            calc.set_operation("divisao")
        }
        if(key.textContent == 'reset'){
            calc.reset_calculator()
            visor.textContent = calc.get_visor()
        }
        if(key.textContent == '='){
            calc.igual()
            visor.textContent = calc.get_visor()
            console.log(calc.get_operation())
        }
        if(key.textContent == 'del'){
            calc.delete()
            visor.textContent = calc.get_visor()
        }
        
        if(key.textContent != 'del' && key.textContent != 'reset' && key.textContent != '='){
            calc.set_visor(key.textContent)
            visor.textContent = calc.get_visor()
        }
    })
})