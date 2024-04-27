function addValue(num) {
    var inputBox = document.getElementById("inputBox");
    inputBox.value += num;

}

function result() {
    var inputBox = document.getElementById("inputBox");
    inputBox.value = eval(inputBox.value);
}

function allClearValue() {
    var inputBox = document.getElementById("inputBox");
    inputBox.value = "";

}

function singleClearValue() {
    var inputBox = document.getElementById("inputBox");
    inputBox.value = inputBox.value.slice(0, -1);

}