const inputNum1 = document.getElementById('num1') as HTMLInputElement;
const inputNum2 = document.getElementById('num2') as HTMLInputElement;
const button = document.getElementById('button') as HTMLButtonElement;

function sum(a: number, b: number) {
    return a + b;
}

button.addEventListener("click", function() {
    console.log(sum(Number(inputNum1.value), Number(inputNum2.value)));
})