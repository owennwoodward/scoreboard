console.log('works')

let countOne = 0
let countTwo = 0
let btnOne = document.getElementById('btn-One');
let btnTwo = document.getElementById('btn-Two');
let displayOne = document.getElementById('clicks-One');
let displayTwo = document.getElementById('clicks-Two');
let clicksOne = document.getElementById('clicks-One')
let clicksTwo = document.getElementById('clicks-Two')

btnOne.onclick = function () {
    displayOne.innerHTML = countOne;
    countOne++;
}

btnTwo.onclick = function () {
    displayTwo.innerHTML = countTwo;
    countTwo++;
}