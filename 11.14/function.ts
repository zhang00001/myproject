var str = 'str';
var firstChar = str.charAt(0);
console.log(firstChar);


//函数声明与表达  
function func1() {
    console.log('func1');
}
func1();

//
var func2 = function () {
    console.log('func2');
}
console.log(func2);
func2();

var add = function (a, b) {
    return a + b;
}
var result = add(1, 2);
console.log(result);


//回调函数
function funcA(func) {
    console.log(func);
}
function funcB() {
    console.log('funcB');
}
funcA(funcB);

function action() {
    return function () {
        console.log('in action');
    }
}
var res = action();
console.log(res);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        