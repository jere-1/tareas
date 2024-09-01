let total = 0;

    function agregarAlCarrito(precio) {
        total += precio;
        document.getElementById('total').innerText = total.toFixed(2); // Actualiza el total en el carrito
    }

    function borrarDelCarrito(precio) {
        total -= precio;
        if (total < 0) total = 0; // Evita que el total sea negativo
        document.getElementById('total').innerText = total.toFixed(2);
    }