
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
// //通过标签名来获取节点
// alert(document.getElementsByTagName('p')); //获取队列中第一个元素的值
// //object HTMLCoLLection
// alert(document.getElementsByTagName('p').length);



// //通过name来获取节点  跟name 属性配套使用  在没有name属性的标签中使用name属性，属于非法，部分浏览器不支持
// alert(document.getElementsByName('submit').length);

//节点属性
// alert(document.getElementById('test').tagName);   //打印标签名
// alert(document.getElementById('test').innerHTML);  //标签名
// alert(document.getElementById('test').id);  // id 获取id值 
// alert(document.getElementById('test').title);   // title  获取标题名(title值)
// alert(document.getElementById('test').style.color); //style   获取到css样式 


//赋值节点属性
// document.getElementById('test').innerHTML = "hello word"; //标签中的内容
// // document.getElementById('test').id = "HELLO";  //获取Id的值
// document.getElementById('test').title = "hello";  //获取title的值
// document.getElementById('test').style.color = "green";  //获取css样式颜色


//层次节点
// ChildNodes 获取当前元素的所有子节点
// alert(document.getElementById("test2").childNodes.length);  //打印值3
// 测试div<span>中间</span>结尾
//3个节点，1 文本节点：测试div  2 标签节点：<span>中间</span> 3 文本节点：结尾

//firstChild  返回文本对象
//文本节点的nodeName= #text
//alert(document.getElementById("text2").firstChild.nodeName);
// //文本节点的nodeType = 3
// alert(document.getElementById("text2").firstChild.nodeType);
//文本节点的nodeValue = innerHTML  文本内容
// alert(document.getElementById("text2").firstChild.nodeValue);

//元素标签
//元素标签的nodeName=标签名称
// alert(document.getElementById('tese2').childNodes[1].nodeName);
//元素标签的nodeType = 1
//alert(document.getElementById("test2").childNodes[1].nodeType);
//元素节点的NodeValue为null
//alert(document.getElementById("test2").childNodes[1].nodeValue);

//父节点
//alert(document.getElementById("test2").firstChild.parentNode.lastChild.parentNode);

//节点操作；增删查改 
//write  网页面中写内容
// document.write('hellow word');//会覆盖原有的页面

//获取div
// var item = document.createEvent('p');
// var p = document.createEvent('p');  //创建的节点自己不会增加到页面
// p.id = "id";//创建属性节点

//创建文本节点
// var text1 = document.createTextNode("hello");
// item.appendChild(p); //增加到节点的尾部
// item.appendChild(p1);
// p1.appendChild(text1);
// item.removeChild(item.children[5]);

var test = document.getElementById("test2");
var a = documen.createElement("a");
var test3 = document.createTextNode("百度一下，你就知道");
a.appendChild(test3);
a.href = "http://baidu.com";


test2.appendChild(a);







