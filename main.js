function convertor() {
    var x = document.getElementById("dec");

    var b = document.getElementById("binary");
    b.value = isNaN(parseInt(x.value, 10)) ? 0 : parseInt(x.value, 10).toString(2);

    var h = document.getElementById("hex");
    h.value = isNaN(parseInt(x.value, 10)) ? 0 : parseInt(x.value, 10).toString(16);

    var o = document.getElementById("oct");
    o.value = isNaN(parseInt(x.value, 10)) ? 0 : parseInt(x.value, 10).toString(8);

}