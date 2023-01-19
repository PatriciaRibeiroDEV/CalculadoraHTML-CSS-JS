const screen =
document.querySelector(".screen")

const button =
document.querySelectorAll("button")

let keyvalue = [];
let calculation;
function calculate(button){
    const value =
    button.textContent;
    if(value === 'clear'){
        screen.textContent = '.';
        keyvalue = [];
    }
    else if(value === '='){
        screen.textContent= eval(calculation)
    }
    else{
        keyvalue.push(value)
        calculation=keyvalue.join('')
        screen.textContent=calculation;
    }
}

button.forEach(button=>{

    button.addEventListener("click", ()=>{
        calculate(button)
    })
})