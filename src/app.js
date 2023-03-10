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

if(calcButton) {
    calcButton.addEventListener('click', () => {
        workInput();
    });    
}

function workInput() {
    let baseGood = checkInput(baseInput.value);
    let heightGood = checkInput(heightInput.value);
    if (baseGood && heightGood) {
        let base = Number(baseInput.value);
        let height = Number(heightInput.value);
        let area = calcTriangleArea(base, height);
        areaInput.value = area + " cm²";        
    }else {
        alert('Hiba!')
    }

}

function calcTriangleArea(base, height) {
    return base * height / 2;
}

function checkInput(input) {
    let res = input.match(/^[0-9]+$/);
    return res;
}
