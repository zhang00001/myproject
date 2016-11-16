var result = 1 + '1';
console.log(result);


var oneTrue = 1 + true;
var oneFalse = 1 + false;
var zeroFalse = 0 + false;
var zeroTrue = 0 + true;
console.log(`
oneTrue:${oneTrue}
oneFalse:${oneFalse}
zeroFalse:${zeroFalse}
zeroTrue:${zeroTrue}
`)


var str = 'str';
var strTrue = 'strtrue';
var strFalse = 'strfalse';
console.log(`
string+true:${strTrue}
string+false:${strFalse}
`)


var trueTrue = true + true;
var trueFalse = true + false;
var falseFalse = false + false;
console.log(`
trueTrue:${trueTrue}
trueFalse:${trueFalse}
falseFalse:${falseFalse}
`)


var str = 'str';
var num = 1;
var ok = true;
var fn = function () { };
var obj = {};
var unDefin;
console.log(`
str:${typeof str}
num:${typeof num}
ok:${typeof ok}
fn:${typeof fn}
obj:${typeof obj}
unDefin:${typeof unDefin}
`)


//隐式类型转换
var str = 'str';
var num = 1;
var ok = true;
var no = false;
console.log(`
隐式类型转换
str+num:${str + num}
str+ok:${str + ok}
str+no:${str + no}
`)


//类型转换
//toString()转换成字符串,parseInt()转换成数字,parseFloat()转换成小数,Number()

var str = 'str';
var num = 1;
var num2 = 2.3;
var ok = true;
var fn = function () { };
var obj = {};
console.log(`
数据类型的toString
str:${str.toString()}
num:${num.toString()}
num2:${num2.toString()}
ok:${ok.toString()}
fn:${fn.toString()}
obj:${obj.toString()}
`)

str = '123'
strFloat = '23.3'
console.log(`
数据类型转化成num
str:${parseInt(str) + 1}
num2:${parseInt(num2)}
strFloat:${parseFloat(strFloat)}
`)

var money = prompt('请输入你的工资')
alert(`
涨工资后的结果:${parseInt(money) + 1000}`)
var money = parseInt(prompt('请输入你的工资'));
alert(`
工资的数据类型:${typeof (money)}`)

var trueTrue = true && true;
var trueFalse = true && false;
var falseFalse = falseFalse;
console.log(`
trueTrue:${trueTrue}
trueFalse:${trueFalse}
falseFalse:${falseFalse}
`)

var age = 18;
var isYoung = age < 19 && age > 17;
console.log(`isYoung:${isYoung}`);
if (isYoung) {
    console.log('18岁');
}

var ok = true;
var str = 'str';
console.log(`
!的使用
ok:${ok}
!ok:${!ok}
!!str=>boolean
!!str:${!!str}
`)


/**
 * [isNaN的使用](hrrp://www.baidu.com)
 */
console.log(`
'3f':${isNaN('3f')}
33:${isNaN(33)}
'23':${isNaN('23')}
`)

console.log(`
trueTrue:${true || true}
trueFalse:${true || false}
falseFalse:${false || false}
`)
var age = 17;
if (age > 18 || age < 18) {
    console.log('toyong')
}



var a = 1;
var b = 2;
console.log(`${a}+${b}=$(a+b)`);

var age = 19;
var isYoung = age < 18 ? 'to young to simple' : age;
console.log(isYoung);


