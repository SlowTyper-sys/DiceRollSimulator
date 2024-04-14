const btnRoll = document.getElementById('btnRoll');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btnRoll.onclick = function() {
    let num = RollTheDice();
    updateList(num);

}

function RollTheDice () {
    let randomNumber = getRandomNumber(56, 61);
    let num = "&#98" + randomNumber + ";" ;
    //alert(num);
    document.getElementById('dice').innerHTML = num;
    return num
    
}
function updateList(listitem) {
    let list = document.getElementById('list');

    let li = document.createElement('li');
   // li.textContent = listitem;

    let span = document.createElement('span');
    span.innerHTML = "You Rolled: " + listitem;

    li.appendChild(span);
    list.appendChild(li);
}

document.getElementById("btnRoll").addEventListener("click", function() {
    let dice =  document.getElementById("dice");
    dice.classList.toggle("rotated");
});