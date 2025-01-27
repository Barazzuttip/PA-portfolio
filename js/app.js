const bz = document.getElementById("bz");
const ab = document.getElementById("ab");
const hache = document.getElementById("hache");
const portaf = document.getElementById("portaf");
const strauss = document.getElementById("strauss");
const minuto7 = document.getElementById("minuto7");
const modaldiv = document.getElementById("modal");
const modalCont = document.getElementById("modalCont");
const grid = document.getElementById("grid");






//TENGO QUE HACER LOS TEXTOS DINAMICOS PARA PONER EN MODAL()
let title = document.createElement('h2');
let subtitle = document.createElement('h3');
let button = document.createElement('button');
title.className = "title-card";
subtitle.className = "subt-card";
button.className = "btn-card";

const cerrarModal = (elem) => {
    modaldiv.style.display = "none";
    elem.classList.remove('modal-inner');
    elem.className = "pf-grid-item";
    var img = elem.querySelector('img');
    img.classList.remove('img-modal');
    img.className = "grid-img";
    let divDelete = document.getElementById("dynamic");
    grid.append(elem);
    modalCont.innerHTML = '';

    if (divDelete) {
        divDelete.remove();  // Eliminar el elemento si existe
    }
}

const modal = (elem, tit, subt) => {
    imgTitle = elem.id;

    let link = document.createElement('a'); // Enlace donde se redirige



    fetch('js/img.json')  // Ruta del archivo JSON
        .then(response => response.json())  // Convierte la respuesta en un objeto JSON
        .then(data => {
            // Buscar la imagen correspondiente al div con id "bz"
            const image = data.find(img => img.id === imgTitle);  // Busca el objeto con id "bz"

            // Si se encuentra la imagen, añadirla al modal
            if (image) {
                const img = document.createElement('img');
                img.src = image.src;  // Ruta de la imagen
                img.alt = image.alt;  // Texto alternativo de la imagen
                img.style.width = '100%';  // Ajuste del tamaño (puedes personalizar)
                modalCont.appendChild(img);
                link.href = image.link;  // Añadir la imagen al modal
                link.target = "_blank";
            } else {
                console.log(`Imagen no encontrada para el id ${imgTitle}`);
            }
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });



    let divInfo = document.createElement('div');
    divInfo.className = "divInfo-layout";
    divInfo.id = 'dynamic';
    title.innerHTML = tit;
    subtitle.innerHTML = subt;
    button.innerHTML = "Visitar Sitio"
    button.className = "modalBtn";
    link.appendChild(button);
   


    divInfo.append(title, subtitle, link);

    modaldiv.style.display = "flex";
    // var img = elem.querySelector('img');
    // img.classList.remove('grid-img');
    // elem.classList.remove('pf-grid-item');
    elem.className = "modal-inner";
    // img.className = "img-modal";
    // modaldiv.append(elem);
    modalCont.append(divInfo);
    modaldiv.addEventListener("click", () => cerrarModal(elem))
}

bz.addEventListener("click", () => modal(bz, "BZ - Diseño Web", "Sitio Web Institucional"));
ab.addEventListener("click", () => modal(ab, "Artes Bahienses", "Sitio Web Institucional"));
strauss.addEventListener("click", () => modal(strauss, "Strauss", "Sitio Web Institucional"));
hache.addEventListener("click", () => modal(hache, "Hache Tienda", "E-commerce"));
portaf.addEventListener("click", () => modal(portaf, "Portafolios Personal", "Landing Page"));
minuto7.addEventListener("click", () => modal(minuto7, "Minuto 7 - Gimnasio", "Landing Page"));