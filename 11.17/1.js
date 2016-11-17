function add(a, b) {
    return a + b;
};
var result = add(1, 2);
console.log(`${add()}`);


function scope() {
    console.log(result);
    var secondScope = function () {
        console.log(`2+3=${add(2, 3)}`)
    }
}
scope();


