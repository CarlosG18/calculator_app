const keys = document.querySelectorAll('.key')
const visor = document.querySelector('.calculator-visor')

class Calculator{
    constructor(){
        this.visor = ""
        this.operation = []
        this.operation_atual = ""
        this.click_operation = false
    }

    get_click_operation(){
        return this.click_operation
    }

    get_operation_atual(){
        return this.operation_atual
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

    set_click_operation(value){
        this.click_operation = value
    }

    set_operation_atual(value){
        this.operation_atual = value
    }

    set_visor(valor){
        this.visor += valor
    }

    set_operation(operation){
        let op = {
            'operation': operation,
            'priority': 1,
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
        this.operation = []
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

    delete_operacao(indexInit, indexEnd){
        //deletar a primeira operação do vetor operation
        this.operation.shift()

        //deletar os caracteres do visor que vai do indexInit ate o indexEnd   
        let string_visor = this.get_visor()
        let new_string_visor = ""
        let init_string = string_visor.slice(0, indexInit)
        let end_string = string_visor.slice(indexEnd+1, string_visor.length)
        new_string_visor += init_string
        new_string_visor += end_string
        this.reset_visor()
        this.set_visor(new_string_visor)
    }

    att_visor(resultado, indexIncrement){
        //atualizar o visor com o resultado informado no indicie indexIncrement
        let string_visor = this.get_visor()
        let init_string = string_visor.slice(0, indexIncrement-1)
        let end_string = string_visor.slice(indexIncrement-1, string_visor.length)
        init_string += resultado
        init_string += end_string
        this.reset_visor()
        this.set_visor(init_string)
    }

    go_calc(){
        if(this.operation.length > 0){
            let valor_a = ""
            let valor_b = ""
            let resultado =  ""
            let indexInit = 0
            let indexEnd = 0
            let indexIncrement = 0
            let op_atual = this.operation[0].operation
            
            for(var i=0; i<this.visor.length; i++){
                if(op_atual == 'multiplicacao' || op_atual == 'divisao'){
                    if(this.visor[i] == 'x' || this.visor[i] == '/'){
                        for(var j=i-1; j >= 0; j--){
                            if(this.visor[j] != '+' && this.visor[j] != '-'){
                                valor_a += this.visor[j]
                                indexInit = j
                                indexIncrement = j + 1
                            }else{
                                break
                            }
                        }
                        for(var j=i+1; j < this.visor.length; j++){
                            if(this.visor[j] != '+' && this.visor[j] != '-' && this.visor[j] != '/' && this.visor[j] != 'x'){
                                valor_b += this.visor[j]
                                indexEnd = j
                            }else{
                                break
                            }
                        }
                        break
                    }
                }else{
                    if(this.visor[i] == '+' || this.visor[i] == '-'){
                        for(var j=i-1; j >= 0; j--){
                            if(this.visor[j] != '+' && this.visor[j] != '-'){
                                valor_a += this.visor[j]
                                indexInit = j
                                indexIncrement = j + 1
                            }else{
                                break
                            }
                        }
                        for(var j=i+1; j < this.visor.length; j++){
                            if(this.visor[j] != '+' && this.visor[j] != '-'){
                                valor_b += this.visor[j]
                                indexEnd = j
                            }else{
                                break
                            }
                        }
                        break
                    }
                }
            }
            valor_a = valor_a.split('').reverse().join('')
            
            if(op_atual == 'multiplicacao'){
                resultado += this.multiplicacao(parseFloat(valor_a), parseFloat(valor_b))
            }else if(op_atual == 'divisao'){
                resultado += this.divisao(parseFloat(valor_a), parseFloat(valor_b))
            }else if(op_atual == 'soma'){
                resultado += this.soma(parseFloat(valor_a), parseFloat(valor_b))
            }else{
                resultado += this.subtracao(parseFloat(valor_a), parseFloat(valor_b))
            }

            this.delete_operacao(indexInit, indexEnd)
            this.att_visor(resultado, indexIncrement)
            
            this.go_calc()
        }
    }

    igual(){
        this.reorder_operation_priority()
        this.go_calc()
        this.operation = []
        this.operation_atual = ""
        this.click_operation = false
    }

    delete(){
        let string = this.visor
        let tamString = string.length
        if(string[tamString-1] == '+' || string[tamString-1] == '-' || string[tamString-1] == 'x' || string[tamString-1] == '/'){
            this.operation.pop()
            this.click_operation = false
            this.operation_atual = ""
            console.log(this.get_operation())
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
            if(!calc.get_click_operation()){
                calc.set_visor(key.textContent)
                calc.set_operation_atual('+')
                calc.set_operation("soma")
                calc.set_click_operation(true)
            }
                
        }else if(key.textContent == '-'){
            if(!calc.get_click_operation()){
                calc.set_visor(key.textContent)
                calc.set_operation_atual('-')
                calc.set_operation("subtracao")
                calc.set_click_operation(true)
            }
            
        }else if(key.textContent == 'x'){
            if(!calc.get_click_operation()){
                calc.set_visor(key.textContent)
                calc.set_operation_atual('x')
                calc.set_operation("multiplicacao")
                calc.set_click_operation(true)
            }
        }else if(key.textContent == '/'){
            if(!calc.get_click_operation()){
                calc.set_visor(key.textContent)
                calc.set_operation_atual('/')
                calc.set_operation("divisao")
                calc.set_click_operation(true)
            }
        }else if(key.textContent == 'reset'){
            calc.reset_calculator()
        }else if(key.textContent == '='){
            calc.igual()
        }else if(key.textContent == 'del'){
            calc.delete()
        }else{
            calc.set_click_operation(false)
            calc.set_operation_atual("")
            calc.set_visor(key.textContent)
        }

        visor.textContent = calc.get_visor()
    })
})