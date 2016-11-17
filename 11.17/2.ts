
//默认参数
function add2(a: number = 0, b: number = 0) {
    return a + b;
};
console.log(add2());
//可选参数   
function add3(a?: number, b?: number) {
    if (!a) a = 0;
    if (!b) b = 0;
    return a + b;
}
console.log(add3());
var c = 'str'
function add4(a?: any, b?: any) {
    if (!a) a = 0;
    if (!b) b = 0;
    return a + b;
}
console.log(`a + c=${add4()}`);


