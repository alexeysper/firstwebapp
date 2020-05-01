"use strict";

function press_one() {

let name_disp = prompt('Введите ваше имя', 'Ваше имя' );
alert(`Твоё имя ${name_disp}! Привет ${name_disp}!`); // Выводим твоё имя

alert ("Hello");

let age = prompt('Сколько тебе лет?', 100);

alert(`Тебе ${age} лет!`); // Тебе 100 лет!


//let isBoss = confirm("Ты здесь главный?");

//alert( isBoss ); // true, если нажата OK
}

function press_two() {

    let answer1 = prompt('Какое официальное название JS?' );
    if (answer1 == "ECMAScript") 
    {
        alert ("Верно!");
    } else
    {
        alert ("Не верно!")
    }
}
function press_three() {
    let number = prompt('Введите число для сравнения с 0');
    if (number > "0") 
    {
        alert ("Больше ноля : 1");
    } 
    else if (number < 0 )
    {
        alert ("Меньше ноля : -1")
    }
    else 
    {
        alert ("Равно нолю: 0")
    }
}
function press_four() {

    let a = +prompt('Введи А');
    let b = +prompt('Введи B');
    let result = (a + b < 4) ? 'Мало' : 'Много';
    alert (result);
}
function press_five() {
let login = prompt("Введите логин");
let message = (login == 'Сотрудник') ? 'Привет':
(login == 'Директор') ? 'Здравствуйте':
(login == '') ? 'Нет логина':
'';
alert (message);
}
function check_age() {
    let age = prompt("Возраст");
    if (age >= 14 && age <= 90)
    alert ('Yes');
        }
function check_age_out() {
    let age = prompt("Возраст");
    if ((age < 14) || (age > 90))
    alert ('No');
    }
function check_age_out_no() {
    let age = prompt("Возраст");
    if (!(age >= 14 && age <= 90))
    alert ('No with Not');
    }
function check_Login() {
    let login = prompt("Введите логин");
    (login==null) && alert ("Отменено");
    (login!='Админ') && (login!=null) && alert("Неизвестный пользователь");
    if (login== 'Админ') 
    {
    let pass = prompt ('Введите пароль');
        (pass=='Я Главный') && alert ("Здраствуйте!");
        (pass==null) && alert ("Отменено");
        (pass!='Я Главный') && (pass!=null) && alert("Неверный пароль");  
    }

}
function get_even() {
    for (let i = 2; i < 11; i++) { 
        if (i%2!=0) continue;
        alert(i);
      }
    }
function get_even_v2() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 == 0) {
          alert( i );
        }
      }
}
function change_for2while(){
    let i=0;
    while (i<3) {
        alert( `number ${i}!` );
        ++i;
    }
    for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
      }
}
function check_more100() {
   let number=prompt("Enter number more than 100");
    while (number<=100) {
        number=prompt("Enter number more than 100");
    }
    }
function check_more100_v2() {
    let num;
    do {
    num = prompt("Введите число, большее 100?", 0);
        } while (num <= 100 && num);
}
function simple_numbers() {
    let n = 10;

    nextPrime:
    for (let i = 2; i <= n; i++) { // Для всех i...
    
      for (let j = 2; j < i; j++) { // проверить, делится ли число..
        if (i % j == 0) continue nextPrime; // не подходит, берём следующее
      }
    
      alert( i ); // простое число
    }
}
function switch_to_if() {
    let browser=prompt("Введите браузер");
    if (browser==('Edge')) 
    {
        alert( "You've got the Edge!" );
    }
else if (browser=='Chrome'
||browser=='Firefox'
||browser=='Safari'
||browser=='Opera') 
   {
        alert( 'Okay we support these browsers too' );
  }  
else alert ( 'We hope that this page looks ok!' );
}
function if_to_switch() {
    const number = +prompt('Введите число между 0 и 3','')
    switch (number) {
        case 0:
          alert( "Вы ввели число 0" );
          break;
        case 1:
            alert( "Вы ввели число 1" );
          break;
        case 2:
        case 3:
          alert( 'Вы ввели число 2, а может и 3' );
          break;
      
        default:
          alert( 'Вы ввели что-то другое!' );
      }
    }
    
function checkAge(age) {
    age=prompt('Введите возраст');
    return (age>18) ?  true : confirm("Родители разрешили?");
        }
function get_min(avalue,bvalue) {
avalue = document.getElementById("a-value").value;
bvalue = document.getElementById("b-value").value;
    //   let avalue = document.getElementById("a-value").value;
    return (avalue>bvalue) ? alert(`Минимальное в паре A/B ${bvalue}`) : alert(avalue);
}
function get_mult_ab(avalue,bvalue) {
    avalue = document.getElementById("a-value").value;
    bvalue = document.getElementById("b-value").value;
    let result = avalue;
    for (let i=1; i<bvalue;i++) {
    result *= avalue ;
   //     return result;
    }
    alert (result);
}
//function ask(question, yes, no) {
//    if (confirm(question)) yes()
//    else no();
//  }
//
//  ask(
//    "Вы согласны?",
//    function() { alert("Вы согласились."); },
//    function() { alert("Вы отменили выполнение."); }
//  );
//let ask = confirm ("Вы согласны?");
function Arrow() {
    let welcome = (confirm("Вы согласны?")==true) ? 
    () => alert("Вы согласились."):
    () => alert("Вы отменили выполнение.");
    welcome ();    
}
