let totalEdades = 0;
let contadorAlumnos = 0;

while (contadorAlumnos < 5) {
    let input = prompt(`Ingrese la edad del alumno ${contadorAlumnos + 1}:`);

    let edad = parseInt(input);

    if (isNaN(edad) || edad < 0 || edad > 100) {
        alert("Por favor, ingrese una edad válida.");
        continue;
    }

    totalEdades += edad;
    contadorAlumnos++;
}

if (contadorAlumnos === 0) {
    alert("No se ingresaron edades.");
} else {
    let edadPromedio = totalEdades / contadorAlumnos;
    alert(`La edad promedio de los ${contadorAlumnos} alumnos es: ${edadPromedio}`);
}
