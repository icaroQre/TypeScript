const button = document.getElementById('button');
const in1 = document.getElementById('input1') as HTMLInputElement;
const in2 = document.getElementById('input2') as HTMLInputElement;

function sum(num1: number, num2: number){
    return num1+num2;
}


if (button){
    button.addEventListener('click', () =>{
        if(in1&&in2){
            console.log(sum(Number(in1.value), Number(in2.value)));
        }
    });
}
