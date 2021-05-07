function szamol1() {
    var aoldal = parseInt(document.getElementById("AoldalP").value);
    var boldal = parseInt(document.getElementById("BoldalP").value);
    var magassag = parseInt(document.getElementById("amagassagP").value);

    var kerulet = 2 * (aoldal + boldal);
    document.getElementById("eredmenyPK").value = kerulet + "cm";
    var terulet = aoldal * magassag ;
    document.getElementById("eredmenyPT").value = terulet + "cm2";
}
