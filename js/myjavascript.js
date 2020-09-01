var one = "Моя переменная!";
var array = [1, 2, 3, 4, 5];
var arr = ["Один", "Два", "Три", "Четыре", "Пять"];

document.getElementsByClassName("array")[0].innerHTML = array.reverse();
document.getElementsByClassName("array")[1].innerHTML = array.sort();

for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

arr.forEach(function (element, index, arr) {
	arr[index] = element.toUpperCase();
});
console.log(arr);


//document.getElementById('message').innerHTML='Hello Astana'; //js

$('#test').text(one);
$('#test').fadeOut("slow");
//$('.myclass').text(one); // 

document.getElementsByClassName("myclass")[0].innerHTML = one;
$('.myclass').css('color', 'green');
$('.myclass').css('background-color', 'yellow');

function mySumm(a, b) {
	return a + b;
}

console.log(mySumm(5, 8));


function mySumShow(a, b) {
	document.getElementsByClassName("array")[2].innerHTML = mySumm(a, b);
}

mySumShow(11, 13);

var res = function () {
	alert('Salem Batyrzhan!');
};

//res();

//let answer = prompt('Есть ли вам 18 ?', 'Да');
let incr = 11, decr = 13;

console.log(++incr);
console.log(decr--);
console.log(15%4);

let isChecked = false,
 	isClose = false;

console.log(isChecked || isClose);
console.log(5>>8);



//test1.addEventListener('click', res);
//test1.removeEventListener('click', res);