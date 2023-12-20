function ingresarEdad(contador) {
    let input = prompt(`Ingrese la edad del alumno ${contador + 1}:`);
    let edad = parseInt(input);

    if (isNaN(edad) || edad < 0 || edad > 100) {
        alert("Por favor, ingrese una edad válida.");
        return ingresarEdad(contador);
    }

    return edad;
}

function calcularPromedio(total, contador) {
    if (contador === 0) {
        alert("No se ingresaron edades.");
    } else {
        let edadPromedio = total / contador;
        alert(`La edad promedio de los ${contador} alumnos es: ${edadPromedio}`);
    }
}

function main() {
    let totalEdades = 0;
    let contadorAlumnos = 0;

    while (contadorAlumnos < 5) {
        let edad = ingresarEdad(contadorAlumnos);

        totalEdades += edad;
        contadorAlumnos++;
    }

    calcularPromedio(totalEdades, contadorAlumnos);
}

main();
