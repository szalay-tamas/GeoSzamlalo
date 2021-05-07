function szamol2() {
    var aoldal = parseInt(document.getElementById("AoldalK").value);

    var felszin = 6 * aoldal * aoldal ;
    document.getElementById("eredmenyKF").value = felszin + " cm2";
    var terfogat = aoldal * aoldal * aoldal ;
    document.getElementById("eredmenyKT").value = terfogat + " cm3"
}