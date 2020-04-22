console.log('start');
var rez = document.getElementById('var_c');
var rezx = document.getElementById('var_x');
var rezy = document.getElementById('var_y');

function calc_click() {
    var a = document.getElementById('var_a').value;
    var b = document.getElementById('var_b').value;

    //var a = parseFloat(document.getElementById('var_a').value);
    //var b = parseFloat(document.getElementById('var_b').value);
    if (document.getElementById('option1').checked == true) {

        var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        rez.innerHTML = c;
    }
    if (document.getElementById('option2').checked == true) {
        if (a > b) {
            var c = Math.sqrt(Math.pow(a, 2) - Math.pow(b, 2));
        }
        else {
            var c = Math.sqrt(Math.pow(b, 2) - Math.pow(a, 2));
        }

        rez.innerHTML = c;
    }
}

