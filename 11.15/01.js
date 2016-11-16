function printName() {
    var r = parseInt(Math.random() * 10);
    var g = parseInt(Math.random() * 10);
    var b = parseInt(Math.random() * 10);
    var rgb = r + "" + g + b;
    document.write(`<h1 style=color:#${rgb}>张想生</h1>`);

}
window.onload = function () {
    var price = parseInt(prompt("请输入您的预算"));
    switch (price) {
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
    }
}


for (var i = 0; i < 5; i++) {
    alert(i);
}
var person = {}  //obj对象
var array = []  //数组对象
var reg = / /  //正则表达式对象
var str = ''    //字符串对象


var person = {
    name: 'jim',
    age: 23,
    height: '178cm'
};

with (person) {   //打印属性值
    var n = name;
    var a = age;
    var h = height;
}
alert(n + a + h);
for (var p in person) { //打印属性
    alert(p);
}





for (var i = 0; i < 10; i++) {
    if (i == 5) break;   //退出整个循环
    document.write(i + "<br/>");
}

for (var i = 0; i < 10; i++) {
    if (i == 5) continue;  //退出当前循环
    document.write(i + "<br/>");
}




