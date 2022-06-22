"use strict"

var lentele = document.getElementById("table")
var vardas = document.getElementById("vardas")
var pavarde = document.getElementById("pavarde")
var amzius = document.getElementById("amzius")
var btnPrideti = document.getElementById("prideti")
var btnIstrintiPirma = document.getElementById("istrintiPirma")
var btnIstrintiPask = document.getElementById("istrintiPaskutini")

btnPrideti.addEventListener("click", function(){
    if((vardas.value || pavarde.value || amzius.value) && (amzius.value === '' ||  amzius.value > 0)){
        var naujaEilute = lentele.insertRow()
        var langelis1 = naujaEilute.insertCell()
        var langelis2 = naujaEilute.insertCell()
        var langelis3 = naujaEilute.insertCell()
    
        langelis1.innerHTML = `${vardas.value}`
        langelis2.innerHTML = `${pavarde.value}`
        langelis3.innerHTML = `${amzius.value}`

        vardas.value=""
        pavarde.value=""
        amzius.value=""
    } else {
        vardas.value=""
        pavarde.value=""
        amzius.value=""
        alert("Įveskite duomenis, amžius turi būti > 0")
    }

    
})

btnIstrintiPirma.addEventListener("click", function(){
    if(document.getElementById('table').rows.length > 1){
        document.getElementById("table").deleteRow(1);
    } else {
        alert("Lentelė tuščia")
    }
    
})


btnIstrintiPask.addEventListener("click", function(){
    if(document.getElementById('table').rows.length > 1){
        document.getElementById("table").deleteRow(-1);
    }else {
        alert("Lentelė tuščia")
    }
    
})