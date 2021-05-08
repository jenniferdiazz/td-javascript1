



var nombre = prompt("Ingresa un nombre: ")
var carrera = prompt("Ingresa su carrera ")
document.write("<div class='container'>");
document.write(`<p>Nombre: ${nombre}</p>`)
document.write(`<p>Carrera: ${carrera}</p>`)

document.write("</div>");

var ramo1 = prompt("Ingrese el nombre del primer ramo: ")
var nota1Ramo1 = prompt("Ingrese nota 1 del primer ramo: ")
var nota2Ramo1 = prompt("Ingrese nota 2 del primer ramo: ")
var nota3Ramo1 = prompt("Ingrese nota 3 del primer ramo: ")

nota1Ramo1 = parseFloat(nota1Ramo1)
nota2Ramo1 = parseFloat(nota2Ramo1)
nota3Ramo1 = parseFloat(nota3Ramo1)
var promedio1 = (nota1Ramo1 + nota2Ramo1 + nota3Ramo1) / 3
promedio1=promedio1.toFixed(1)


var ramo2 = prompt("Ingrese el nombre del segundo ramo: ")
var nota1Ramo2 = prompt("Ingrese nota 1 del segundo ramo: ")
var nota2Ramo2 = prompt("Ingrese nota 2 del segundo ramo: ")
var nota3Ramo2 = prompt("Ingrese nota 3 del segundo ramo: ")

nota1Ramo2 = parseFloat(nota1Ramo2)
nota2Ramo2 = parseFloat(nota2Ramo2)
nota3Ramo2 = parseFloat(nota3Ramo2)
var promedio2 = (nota1Ramo2 + nota2Ramo2 + nota3Ramo2) / 3
promedio2=promedio2.toFixed(1)





var ramo3 = prompt("Ingrese el nombre del tercer ramo: ")
var nota1Ramo3 = prompt("Ingrese nota 1 del tercer ramo: ")
var nota2Ramo3 = prompt("Ingrese nota 2 del tercer ramo: ")

var notaAprobacion = prompt("Ingrese nota de aprobacion: ")
notaAprobacion = parseFloat(notaAprobacion)
nota1Ramo3 = parseFloat(nota1Ramo3)
nota2Ramo3 = parseFloat(nota2Ramo3)

var nota3Ramo3 = (notaAprobacion *3) - nota1Ramo3 - nota2Ramo3
nota3Ramo3 = nota3Ramo3.toFixed(1)

alert("la nota para aprobar el ramo 3 es : "+nota3Ramo3)





//document.write("<h1>hola</h1>"+nombre);
//alert("hola"+nombre);
//document.getElementById("color_letra").style.color = "pink";


document.write("<div class='container'>");
document.write("<h1>Creando Tabla HTML con JavaScript y Bootstrap</h1>")
document.write("<table class='table'>");
document.write("<thead>");
document.write("<tr>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr");
document.write("</thead>");
document.write("<tbody>");
document.write("<tr>");
document.write(`<td>${ramo1}</td>`);
document.write(`<td>${nota1Ramo1}</td>`);
document.write(`<td>${nota2Ramo1}</td>`);
document.write(`<td>${nota3Ramo1}</td>`);
document.write(`<td>${promedio1}</td>`);
document.write("</tr>");
document.write("<tr>");
document.write(`<td>${ramo2}</td>`);
document.write(`<td>${nota1Ramo2}</td>`);
document.write(`<td>${nota2Ramo2}</td>`);
document.write(`<td>${nota3Ramo2}</td>`);
document.write(`<td>${promedio2}</td>`);
document.write("</tr>");
document.write("<tr>");
document.write(`<td>${ramo3}</td>`);
document.write(`<td>${nota1Ramo3}</td>`);
document.write(`<td>${nota2Ramo3}</td>`);
document.write(`<td>-</td>`);
document.write(`<td>-</td>`);
document.write("</tr>");
document.write("</tbody>");
document.write("</table");
document.write("</div>");