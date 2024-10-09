const root  = document.getElementById('container-categorias');
let categorias = ['Deportes', ' Estetica', 'Comida', 'Oficio', 'Vehiculos', 'Salud', 'Bienestar', 'Mascotas', 'Eventos', 'Promos']
let imagenes = ['https://img.icons8.com/?size=100&id=18198&format=png&color=575757', 'https://img.icons8.com/?size=100&id=10367&format=png&color=575757', 'https://img.icons8.com/?size=100&id=NTPjDyGAVp1r&format=png&color=575757', 'https://img.icons8.com/?size=100&id=11219&format=png&color=575757', 'https://img.icons8.com/?size=100&id=12666&format=png&color=575757', 'https://img.icons8.com/?size=100&id=akthhbuAAlfc&format=png&color=575757', 'https://img.icons8.com/?size=100&id=Z1QQTUu7K1Vk&format=png&color=575757', 'https://img.icons8.com/?size=100&id=106513&format=png&color=575757', 'https://img.icons8.com/?size=100&id=8851&format=png&color=575757', 'https://img.icons8.com/?size=100&id=a99zM4y8YPut&format=png&color=575757']

function renderBtnCategorias(categorias, imagenes){
    const div = document.createElement('div');
    div.setAttribute('class', 'btn-Category')
    for (let i = 0; i < 10; i++) {
        let a = document.createElement('a');
        a.innerHTML = `
                        <div>
                            <img src="${imagenes[i]}" alt="">
                        </div>
                        <p>${categorias[i]}</p>
                        `
        div.appendChild(a);
    }

    root.appendChild(div);
}
/* escuchar el evento onclick y traer el nombre del array en esa posicion */
renderBtnCategorias(categorias, imagenes);

const btn = document.querySelectorAll('a');

//btn.addEventListener('click', function(event) {
    console.log(this.textContent);
//})