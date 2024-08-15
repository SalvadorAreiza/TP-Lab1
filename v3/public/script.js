// script.js
document.getElementById('medalForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const country = document.getElementById('country').value;
    const gold = parseInt(document.getElementById('gold').value);
    const silver = parseInt(document.getElementById('silver').value);
    const bronze = parseInt(document.getElementById('bronze').value);

    // Enviar los datos al servidor
    const response = await fetch('http://localhost:3000/api/medals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ country, gold, silver, bronze }),
    });

    const data = await response.json();

    // Agregar la nueva fila a la tabla
    const tableBody = document.getElementById('medalTableBody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${data.country}</td>
        <td>${data.gold}</td>
        <td>${data.silver}</td>
        <td>${data.bronze}</td>
        <td>${data.gold + data.silver + data.bronze}</td>
    `;
    tableBody.appendChild(newRow);

    // Limpiar el formulario
    document.getElementById('medalForm').reset();
});

// Cargar las medallas al iniciar
async function loadMedals() {
    const response = await fetch('http://localhost:3000/api/medals');
    const medals = await response.json();

    const tableBody = document.getElementById('medalTableBody');
    medals.forEach(medal => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${medal.country}</td>
            <td>${medal.gold}</td>
            <td>${medal.silver}</td>
            <td>${medal.bronze}</td>
            <td>${medal.gold + medal.silver + medal.bronze}</td>
        `;
        tableBody.appendChild(newRow);
    });
}

loadMedals();
