console.log('start');
var rezy = document.getElementById('var_y');
function y(x){return Math.sin(x)+Math.cos(x)}
function calc_click3() {
    var a3 = parseFloat(document.getElementById('var_a3').value);
    var b3 = parseFloat(document.getElementById('var_b3').value);
    var h3 = parseFloat(document.getElementById('var_h3').value);
    var rezult = "";
    rezult += '<table border=3 >';
    rezult += '<tr align=center><td><b>x';
    rezult += '<td><b>Функція y';
    for (var x = a3; x <= b3; x += h3) {
        var z = y(x);
        rezult += '<tr align=center><td width=50%>' + (x).toFixed(1);
        rezult += '<td>' + (z).toFixed(4)+ '</tr>';
    }
    rezult += "</table>";
    rezy.innerHTML = rezult;
}

