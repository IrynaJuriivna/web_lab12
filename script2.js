console.log('start');

var rezx1 = document.getElementById('var_x1');
var rezx2 = document.getElementById('var_x2');
var sec2 = document.getElementById('var_s');


function calc_click2() {
    var a = document.getElementById('var_a1').value;
    var b = document.getElementById('var_b1').value;
    var c = document.getElementById('var_c1').value;
    var x1, x2;
    //var a = parseFloat(document.getElementById('var_a').value);
    //var b = parseFloat(document.getElementById('var_b').value);

    var D = Math.pow(b, 2) - 4 * a * c;
    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / 2 * a;
        x2 = (-b - Math.sqrt(D)) / 2 * a;
        var r = "  x1=" + x1 + ";   x2=" + x2;
        rezx1.innerHTML = r;
    }
    if (D < 0) {
        var r = "   Дискримінант менший нуля, отже рівняння не має дійсних коренів";
        rezx1.innerHTML = r;
    }
    if (D == 0) {
        x1 = (-b) / 2 * a;
        var r = "  x1=" + x1;
        rezx1.innerHTML = r;
    }
}

