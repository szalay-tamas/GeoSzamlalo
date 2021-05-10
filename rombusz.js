function szamol() {
    var aoldal = parseInt(document.getElementById("AoldalR").value);
    var atlo1 =  parseInt(document.getElementById("atloR").value);
    var atlo2 = parseInt(document.getElementById("atlo1R").value);
  
    var kerulet = aoldal * 4;
    document.getElementById("eredmenyRK").value = kerulet + " cm" ;
    var terulet = atlo1 * atlo2 / 2;
    document.getElementById("eredmenyRT").value = terulet + " cm2";
    
  


}