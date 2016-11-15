// function printName() {
//     var r = parseInt(Math.random() * 10);
//     var g = parseInt(Math.random() * 10);
//     var b = parseInt(Math.random() * 10);
//     var rgb = r + "" + g + b;
//     document.write(`<h1 style=color:#${rgb}>张想生</h1>`);

// }
window.onload = function(){
var price = parseInt(prompt("请输入您的预算"));
switch(price){
case 5000:
alert('你可能买到苹果手机');
break;
case 4000:
alert('你可能买到三星手机');
break;
case 3000:
alert('呢可能买到oppo手机');
break;
case 2000:
alert('你可能买到小米手机');
break;
default:
alert('你的预算不够！')
}}
