/*
* File: app.js
* Author: Erős István
* Copyright: 2023, Erős István
* Group: Szoft I-2 N
* Date: 2023-03-09
* Github: https://github.com/erosistvan/
* Licenc: GNU GPL
*/

var baseInput = document.querySelector('#base');
var heightInput = document.querySelector('#height');
var areaInput = document.querySelector('#area');
var calcButton = document.querySelector('#calcButton');

calcButton.addEventListener('click', () => {
    workInput();
});

function workInput() {
    let base = Number(baseInput.value);
    let height = Number(heightInput.value);
    let area = calcTriangleArea(base, height);
    areaInput.value = area + " cm²";
}

function calcTriangleArea(base, height) {
    return base * height / 2;
}
