
console.log("myFunction")
function myFunction(a, b) {
    let sum = 0;
    let countNumbers = 0;
    for (let number = a + 1; number < b; number++) {
        if (number > 0) {
            sum += number;
            countNumbers++;
        }

    }
    console.log("Сумма четных чисел в диапазоне равна:" + sum);
    console.log("Количество четных чисел в диапазоне равно:" + countNumbers);
}


myFunction(-3, 10);
myFunction(-3, 1);
myFunction(-3, 2);
myFunction(5, 7);
console.log("----------------");

console.log("isPrime")
function isPrime(num) {
    let countDel = 0;
    for (let del = 2; del < 11; del++) {
        if (num % del === 0 && num != del) {
            return false;
        }
    }
    return true;
}


console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(1));
console.log(isPrime(13));
console.log(isPrime(15));
console.log(isPrime(19));
console.log(isPrime(26));
console.log(isPrime(94));
console.log(isPrime(97));
console.log(isPrime(101));
console.log("----------------");


console.log("getFactorial");
function getFactorial(n) {
    let result = 1;
    for (let number = 2; number <= n; number++) {
        result *= number;
    }
    return result;
}

console.log(getFactorial(5));
console.log(getFactorial(2));
console.log(getFactorial(1));
console.log(getFactorial(0));
console.log(getFactorial(3));

console.log("----------------");

console.log("digitSum");
function digitSum(y) {
    let sum = 0;
    while (y >= 1) {
        let ost = parseInt(y / 10);
        sum += y - (ost * 10);
        y = ost;
    }
    return sum;
}

console.log(digitSum(5));
console.log(digitSum(54));
console.log(digitSum(22));
console.log(digitSum(128));

console.log("----------------");



console.log("getSqrtBySequentialSelection и getSqrtByBinarySearch");
function getSqrtBySequentialSelection(number) {
    for (let result = 1; result <= number; result++) {
        if (result * result > number) {
            return result - 1;
        }
    }

}



function getSqrtByBinarySearch(number) {
    let top = number;
    let button = 1;
    let middle;

    while(top - button > 1){
        middle = parseInt((top - button) / 2) + button;
        let numberSqr = middle * middle;

        if(numberSqr == number) {
            return middle;
        };

        if(numberSqr > number){
            top = middle; 
        };

        if(numberSqr < number){
            button = middle;
        }
    }
    return button;
}


console.log(getSqrtBySequentialSelection(359));
console.log(getSqrtByBinarySearch(359));

console.log(getSqrtBySequentialSelection(9));
console.log(getSqrtByBinarySearch(9));

console.log(getSqrtBySequentialSelection(4));
console.log(getSqrtByBinarySearch(4));

console.log("----------------");