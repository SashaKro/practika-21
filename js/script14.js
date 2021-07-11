'use strict';

let userAnswer = +prompt("Введите число", '');

if (userAnswer==0) {
    alert("0");
} else if (userAnswer > 0) {
    alert("1");
} else {
    alert("-1");
}