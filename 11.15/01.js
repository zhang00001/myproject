function printName() {
    var r = parseInt(Math.random() * 10);
    var g = parseInt(Math.random() * 10);
    var b = parseInt(Math.random() * 10);
    var rgb = r + "" + g + b;
    document.write(`<h1 style=color:#${rgb}>张想生</h1>`);

}


