// script.js
document.getElementById('medalForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const country = document.getElementById('country').value;
    const gold = parseInt(document.getElementById('gold').value);
    const silver = parseInt(document.getElementById('silver').value);
    const bronze = parseInt(document.getElementById('bronze').value);

    // Calcular el total de medallas
    const total = gold + silver + bronze;

    // Crear una nueva fila en la tabla
    const table = document.getElementById('medalTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cellCountry = newRow.insertCell(0);
    const cellGold = newRow.insertCell(1);
    const cellSilver = newRow.insertCell(2);
    const cellBronze = newRow.insertCell(3);
    const cellTotal = newRow.insertCell(4);

    cellCountry.textContent = country;
    cellGold.textContent = gold;
    cellSilver.textContent = silver;
    cellBronze.textContent = bronze;
    cellTotal.textContent = total;

    // Limpiar el formulario
    document.getElementById('medalForm').reset();
});
