// - створити функцію яка приймає масив та виводить його

let massMain = ['may', 13, false, 7, 'life', 'Christmas', 'true', true, 21];

function mass1 (mass) {
    console.log(mass);
}
mass1(massMain);

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function num1 (a, b, c) {
    let min;
    if ( a<b && a<c) {
        min = a;
    }
    if ( a>b && b<c) {
        min = b;
    }
    if ( c<b && a>c) {
        min = c;
    }
    console.log(min);
}
num1(13, 5, 41);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function num2 (a, b, c) {
    let max;
    if ( a>b && a>c) {
        max = a;
    }
    if ( a<b && b>c) {
        max = b;
    }
    if ( c>b && a<c) {
        max = c;
    }
    console.log(max);
}
num2(13, 5, 41);

// - створити функцію яка повертає найбільше число з масиву

let massMax = [77, 12, 0, -42, 18, 1, 14, -2, 188, 7];

function mMass (mass) {
    let max = mass[0];
    for (let number of mass) {
        if (number > max) {
            max = number;
        }
    }
    console.log(max);
    return max;
}
mMass(massMax);

// - створити функцію яка повертає найменьше число з масиву

let massMin = [77, 12, 0, -42, 18, 1, 14, -2, 188, 7];

function minMass (mass) {
    let min = mass[0];
    for (let number of massMin) {
        if (number < min) {
            min = number;
        }
    }
    console.log(min);
    return min;
}
minMass(massMin);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let massNum = [4, 12, 0, -42, 18, 1, 14, -2, 188, 7];

function num (mass) {
    let sum = 0;
    for (let i = 0; i < mass.length; i++) {
        sum += mass[i];
    }
    console.log(sum);
    return sum;
}
num(massNum);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let massNum1 = [4, 12, 0, -42, 18, 1, 14, -2, 188, 9];

function serAr (mass) {
    let sum1 = 0;
    let sAr;
    for (let i = 0; i < mass.length; i++) {
        massNum1.length;
        sum1 += mass[i];
    }
    sAr = sum1 / massNum1.length;
    console.log(sAr);
    return sAr;
}
serAr(massNum1);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.

function rand () {
    let mass = [];
    let random = 10;

    for (let i = 0; i < random; i++) {
        mass.push(Math.round(Math.random()*100));
    }
    console.log(mass);
}
rand();

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function obj (arr1) {

    let massKey = [];
    for (let object of arr1) {
        massKey.push(...Object.keys(object));
    }
    console.log(massKey);
    return massKey;
}
obj(arr);
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let arr1 = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function obj1 (arr1) {

    let massValues = [];
    for (let object of arr1) {
        massValues.push(...Object.values(object));
    }
    console.log(massValues);
    return massValues;
}
obj1(arr1);
















