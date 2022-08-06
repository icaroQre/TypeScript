const button = document.getElementById('button');
const in1 = document.getElementById('input1');
const in2 = document.getElementById('input2');
function sum(num1, num2) {
    return num1 + num2;
}
if (button) {
    button.addEventListener('click', () => {
        if (in1 && in2) {
            console.log(sum(Number(in1.value), Number(in2.value)));
        }
    });
}
