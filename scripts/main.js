let sum = 0;
let cant = 0;
let max = 0;
let min = 8;

alert(
  "El programa pide el ingreso de edades y calcula el promedio, máximo y mínimo de los ingresos."
);

do {
  age = prompt(`Ingrese edad o f para finalizar`);
  if (age !== "f") age = parseInt(age);

  if (age > 0) {
    // Si la edad ingresada es positiva, la acumulo y cuento el ingreso
    sum += age;
    cant += 1;

    if (cant === 0) {
      // El primer ingreso se toma como máximo y mínimo para comparar en los siguientes.
      max = age;
      min = age;
    } else if (age < min) min = age;
    else if (age > max) max = age;
  }
} while (age !== "f"); // Mientras no se ingrese una "f" seguimos ingresando datos

// Muestra resultados

if (cant === 0) alert("No se realizaron ingresos válidos");
else {
  alert(
    `Se ingresaron un total de ${cant} ingresos:
    📈El promedio de las edades ingresadas es ${(sum / cant).toFixed(2)}.
    🔺El máximo de las edades ingresadas es ${max} años.
    🔻El mínimo de las edades ingresadas es ${min} años.`
  );
}
