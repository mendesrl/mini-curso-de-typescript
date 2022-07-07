var inputNum1 = document.getElementById('num1');
var inputNum2 = document.getElementById('num2');
var button = document.getElementById('button');
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    console.log(sum(Number(inputNum1.value), Number(inputNum2.value)));
});
