
var arr = [1, 2, 3, '小王', '小黄'];
arr.push('小张');
console.log(arr);  //从数组后面添加
var arr2 = arr.pop();  //从数组后面删除
console.log(arr2);
var arr3 = arr.pop();
arr.unshift('小绿', '小红');
console.log(arr);
