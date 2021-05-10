function szamol3() {
    var aoldal = parseInt(document.getElementById("AoldalN").value);
    var boldal = parseInt(document.getElementById("BoldalN").value);

    var felszin = 2 * (aoldal + aoldal) + 4 * (aoldal * boldal);
    document.getElementById("eredmenyNF").value = felszin + " cm2";
    var terfogat = aoldal * aoldal * boldal;
    document.getElementById("eredmenyNT").value = terfogat + " cm3";


}