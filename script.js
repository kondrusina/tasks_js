"use strict"
// задание №1
function selectionCity(arr) {
    return arr.join(", ") + ".";
}
console.log(selectionCity(["Москва", "Санкт-Петербург", "Казань"]));


// задание №2
function number(num, multiplay) {
    return Math.round(num / multiplay) * multiplay;
}
console.log(number(27, 5));
console.log(number(27.8, 5));
console.log(number(41.7, 5));


// задание №3
let quantity;
function wordChange(num, word) {
    let result;
    let count = num % 100;

    if (count >= 5 && count <= 20) {
        result = word['2'];
    } else {
        count = count % 10;
        if (count == 1) {
            result = word['0'];
        }
        else if (count >= 2 && count <= 4) {
            result = word['1'];
        } else {
            result = word['2'];
        }
    }
    return result;
}
console.log(wordChange(23, ['компьютер', 'компьютера', 'компьютеров']));



// задание №4
function primeNumbers(num) {
    if (num === 1) {
        return false;
    }
    else if (num === 2) {
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}
console.log(primeNumbers(2));


//задание 5
let arr = [7, 17, 1, 9, 1, 17, 56, 56, 23];
let arr_2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];

function compareNumbers(a, b) {
    let new_arr = [];
    for (element_a of a) {
        for (element_b of b) {
            if (element_b === element_a) {
                new_arr.push(element_a);
            }
        }
    }
    return new_arr;
}
console.log(compareNumbers(arr, arr_2));


// задание №6
function enter(num) {
    document.write("<table border='1'>");
    for (i = 1; i <= num; i++) {
        document.write("<tr>");
        for (j = 1; j <= num; j++)
            document.write("<td>" + i * j + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

console.log(enter(5));

