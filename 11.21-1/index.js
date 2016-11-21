
//for  循环
//固定格式
//for () //1.循环起始位置 2.循环结束  3.循环方式：递增和递减两种方式
//{   }
/*
for (var i = 0; i < 10; i++) {
    //alert(i);
    if (i % 2 > 0) {
        document.write(i + "  ");
    }
}*/
// var a1 = 1;
// var a2 = 2;
// var arry1 = new Array();//使用new创建一个数组
// var arry2 = []   //使用字变量创建一个数组
// var arry3 = [1, true, {}, null]; //数组用来存多个元素 （元素也可以是任何数据类型）
// alert(arry3);
// alert(arry3.length);  //length 操作符 求数组长度
// //通过数组下标取值  长度从0开始，到length-1；
// alert(arry3[2]);



//遍历数组
// for (var i = 0; i < arry3.length; i++) {
//     alert(array3[i]);
// }

//DOM节点树   父节点  子节点 同级节点
//节点类型  元素节点  文本节点  属性节点
//<div id="test"> 测试Div </div>
// <div>  元素节点
// 测试Div  文本节点
// id = 'test' 属性节点

//onload 事件，延迟加载，当页面加载完成后执行

// window.onload = function(){
//     alert(document.getElementById('text'));
// }

//通过id来获取节点
// alert(document.getElementById('test'));


//返回数组 获取标签队列
//通过标签名来获取节点
alert(document.getElementsByTagName('p')); //获取队列中第一个元素的值
//object HTMLCoLLection
alert(document.getElementsByTagName('p').length);



//通过name来获取节点  跟name 属性配套使用  在没有name属性的标签中使用name属性，属于非法，部分浏览器不支持
alert(document.getElementsByName('submit').length);

//节点属性
alert(document.getElementById('test').tagName);   //打印标签名
alert(document.getElementById('test').innerHTML);  //标签名
alert(document.getElementById('test').id);  // id 获取id值 
alert(document.getElementById('test').title);   // title  获取标题名(title值)
alert(document.getElementById('test').style.color); //style   获取到css样式 


//赋值节点属性
document.getElementById('test').innerHTML = "hello word"; //标签中的内容
// document.getElementById('test').id = "HELLO;  //获取Id的值
document.getElementById('test').title = "hello";  //获取title的值
document.getElementById('test').style.color = "green";  //获取css样式颜色












