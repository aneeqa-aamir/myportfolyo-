function getNumber(num){
    var input =document.getElementById('result')
    input.value +=num
}

function getResult(){
    var input=document.getElementById('result')
    var exp =input.value
    input.value= eval(exp)
}

function clearResult(){
    var input = document.getElementById('result')
    input.value=" "
}