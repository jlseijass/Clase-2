let opcion;

while (true) {
    opcion = parseInt(prompt("Bienvenido al menú de opciones.\n\n1. Para comprar\n2. Para vender\n3. Para verificar stock\n\nSi desea salir, ingrese 0"));

    if (opcion === 0) {
        alert("Gracias vuelvas prontos!");
        break; // Salimos del bucle
    } else if (opcion === 1) {
        alert("Vas a comprar");
    } else if (opcion === 2) {
        alert("Vas a vender");
    } else if (opcion === 3) {
        alert("Vas a ver stock");
    } else {
        alert("La opción ingresada no es válida");
    }
}