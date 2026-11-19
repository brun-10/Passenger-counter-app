let savedValue = document.getElementById("saved-value");
let countValue = document.getElementById("count-value");
let count = 0;

function increase() {
    count += 1;
    countValue.textContent = count;
}

function decrease() {
    count -= 1;
    countValue.textContent = count;
}

function save() {
    let saveStr = count + "-";
    savedValue.textContent += saveStr;
    countValue.textContent = 0;
    count = 0;
}

