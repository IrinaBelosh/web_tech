let user_name = prompt("Введите ваше имя");
function showMessage() {
let message = 'Привет, ' + user_name + '!';
alert(message);
}
showMessage();

let age = parseInt(prompt('Введите ваш возраст'))
let a = null;

if (18 < age < 60){
    a = 2
}
if (60 < age){
    a = 3
}
if (18 > age){
    a = 1;
}


switch (a) {
    case 1:
        alert( 'Вы еще маленький!' );
        break;
    case 2:
        alert( 'Добро пожаловать на сайт!' );
        break;
    case 3:
        alert( 'Уже пора отдыхать!' );
        break;
    default:
        alert( "Нет таких значений" );
}



let flag = true
function change_color() {
    let element1 = document.getElementById('elem1');
    let element2 = document.getElementById('elem2');
    if (flag){
        element1.classList.toggle("another_color");
    }
}

let btn = document.getElementById("btn");
console.log(btn)
btn.addEventListener('click', change_color)


// Пример с лекции
// let flag = true
// function change_color() {
//     let element = document.getElementById('screlem');
//     // if (flag){
//     //    element.classList.add("another_color");
//     //    flag = false;
//     // }
//     // else{
//     //     element.classList.remove("another_color");
//     //     flag = true;
//     // }
//     // console.log(element)
//     element.classList.toggle('another_color');
// }

// let btn = document.getElementById("btn");
// console.log(btn)
// btn.addEventListener('click', change_color)

