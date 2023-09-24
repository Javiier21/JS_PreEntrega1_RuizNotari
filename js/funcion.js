const costoProducto1 = 100;
const costoProducto2 = 200;
const costoServicio1 = 50;

function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2;
    return resultado;
}

function simularCompra() {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const tipoItem = document.getElementById('tipoItem').value;
    let costoUnitario, tipoItemText;

    switch (tipoItem) {
        case "1":
            costoUnitario = costoProducto1;
            tipoItemText = "Producto 1";
            break;
        case "2":
            costoUnitario = costoProducto2;
            tipoItemText = "Producto 2";
            break;
        case "3":
            costoUnitario = costoServicio1;
            tipoItemText = "Servicio 1";
            break;
        default:
            alert("Opción inválida.");
            return;
    }

    const resultado = multiplicar(costoUnitario, cantidad);

    let costoTotal = resultado;

    if (cantidad >= 10) {
        costoTotal *= 0.9;  // Aplicar descuento del 10% si hay más de 10 unidades
    }

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `
        <div class="mt-3">
            <strong>Detalle de la compra:</strong><br>
            Tipo: ${tipoItemText}<br>
            Cantidad: ${cantidad}<br>
            Costo unitario: $${costoUnitario}<br>
            Costo total: $${resultado.toFixed(2)}<br>
            Costo total con descuento (si aplica): $${costoTotal.toFixed(2)}
        </div>
    `;
}
