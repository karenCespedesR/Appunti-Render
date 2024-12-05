//no esta entrando aca
import { renderButtonsCarrusel, initCarrusel } from './carrusel.js';
import { renderCards, getAllCards } from './card.js';

document.addEventListener('DOMContentLoaded', async () => {
    const rootFavoritos = document.getElementById("favoritos-contenedor");
    const token = sessionStorage.getItem('token');

    if (!token) {
        console.error('Token no encontrado. Redirigiendo a login.');
        window.location.href = 'http://localhost:3000/views/login.html';
        return;
    }

    try {
        // Verificar datos de sesión
        const response = await fetch('/api/user/session', {
            method: 'GET',
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response text:', errorText);
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        const userData = await response.json();

        // Función para manejar valores nulos o vacíos
        const formatValue = (value) => {
            return value && value.trim() !== '' ? value : 'N/A';
        };

        // Cargar datos del usuario con manejo de valores vacíos
        document.getElementById('userName').innerText = formatValue(userData.nombre);
        document.getElementById('userLastName').innerText = formatValue(userData.apellido);
        document.getElementById('userEmail').innerText = formatValue(userData.email);
        document.getElementById('userAddress').innerText = formatValue(userData.direccion);
        
        // Opcional: Agregar más campos si están disponibles
        document.getElementById('userPhone').innerText = formatValue(userData.telefono);
        
        // Si tienes un campo para fecha de nacimiento
        if (userData.fechaNacimiento) {
            const fechaFormateada = new Date(userData.fechaNacimiento).toLocaleDateString('es-AR');
            document.getElementById('userDate').innerText = formatValue(fechaFormateada);
        } else {
            document.getElementById('userDate').innerText = 'N/A';
        }

        // Cargar y renderizar las cards de favoritos
        const cardJson = await getAllCards();

        if (rootFavoritos && cardJson) {
            renderCards(rootFavoritos, cardJson, 'favoritos');
            renderButtonsCarrusel(rootFavoritos, 'favoritos');
            initCarrusel('favoritos');
        } else {
            console.error('Error: contenedor o datos de tarjetas no disponibles.');
        }
    } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        window.location.href = 'http://localhost:3000/views/login.html';
    }
});