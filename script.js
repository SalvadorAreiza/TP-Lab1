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
    const tableBody = document.getElementById('medalTableBody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${country}</td>
        <td>${gold}</td>
        <td>${silver}</td>
        <td>${bronze}</td>
        <td>${total}</td>
    `;

    tableBody.appendChild(newRow);

    // Limpiar el formulario
    document.getElementById('medalForm').reset();
});
