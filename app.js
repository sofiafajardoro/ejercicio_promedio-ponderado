window.alert("A continuación deberá ingresar 3 notas por alumno para calcular el promedio final del curso. Las ponderaciones para la Nota 1, Nota 2 y Nota 3 son respectivamente 25%, 35% y 40%. ");

var cantidad=parseFloat(prompt("Ingrese la cantidad de alumnos: "));

notasCurso=0
for (let i = 0; i < cantidad; i++) {
    document.writeln( )
    var contadorAlumno=i+1
    var nota1=parseFloat(prompt("Para Alumno "+ contadorAlumno + ", Ingrese la Nota 1:"));
    var nota2=parseFloat(prompt("Para Alumno "+ contadorAlumno + ", Ingrese la Nota 2:"));
    var nota3=parseFloat(prompt("Para Alumno "+ contadorAlumno + ", Ingrese la Nota 3:"));
    PromedioAlumno=nota1*0.25+nota2*0.35+nota3*0.4;
    notasCurso+=PromedioAlumno;
}

promedioCurso=notasCurso/cantidad;
document.writeln("El promedio del grupo curso es de "+ promedioCurso.toFixed(1)) ;