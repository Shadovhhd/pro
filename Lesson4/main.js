//Написать функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив

function double(x) {
    return x * x;
}


function map(fn, arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1[i] = fn(arr[i]);
    }
    return arr1;
}

let test = [1, 2, 3, 4];
let test2 = map(double, test);
console.log(test);
console.log(test2);

//Написать функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля:
const characters = [{
        name: "barney",
        age: 36
    },
    {
        name: "fred",
        age: 40
    },
];


function pluck(list, chec) {
    array = [];
    for (let i = 0; i < list.length; i++) {
        array[i] = list[i][chec];

    }
    return array
}
console.log(pluck(characters, "name")); // ['barney', 'fred']


//Написать функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор, 
//которая при каждом вызове дает число на 1 больше, и так до бесконечности. Начальное число, с которого начинать отсчет, и шаг, 
//задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.



function sequence(start, step) {
    let startFn = 0;
    let stepFn = 1;
    startFn = start;
    stepFn = step;
    return function () {
        return startFn += stepFn;
    }
}
const generator = sequence(10, 3);
const generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8

//Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз и возвращает массив с результатами вызовов. Она нам пригодится для отладки:

function sequence(start, step) {
    let startFn = 0;
    let stepFn = 1;
    startFn = start;
    stepFn = step;
    return function () {
        return startFn += stepFn;
    }
}

function take(gen, x){
    arr=[];
    for (let i = 0; i < x; i++) {
        arr[i]=gen();
    }
    return arr;
}

const generator3 = sequence(0, 2);
console.log(take(generator3, 5)); // [0, 2, 4, 6, 8 ]

