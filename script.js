function calcularArea(){
  var input= document.getElementById("raio")
var raio = input.value
var area = 3.14* raio **2
var p = document.getElementById("resultado")
p.innerHTML = area 
console.log(area)
}


