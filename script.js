// Utilidades
const $ = (sel) => document.querySelector(sel);

window.addEventListener('DOMContentLoaded', () => {
  const grid = $('#gridContenido');
  const btnToggleLayout = $('#btnToggleLayout');
  const btnChangeTitle = $('#btnChangeTitle');
  const btnColorSub = $('#btnColorSub');
  const btnAddImage = $('#btnAddImage');
  const fileInput = $('#fileInput');
  const zonaImagen = $('#zonaImagen');
  const subtitulo = $('#subtitulo');
  const parrafo = $('#parrafoDescripcion');
  const mainTitle = $('#main-title');

  // 1) Alternar columnas/filas
  btnToggleLayout.addEventListener('click', () => {
    grid.classList.toggle('stacked');
    btnToggleLayout.textContent = grid.classList.contains('stacked')
      ? 'Ver en columnas'
      : 'Alternar columnas/filas';
  });

  // 2) Cambiar título de la página
  btnChangeTitle.addEventListener('click', () => {
    const nuevo = prompt('Ingrese el nuevo título de la página:', mainTitle.textContent.trim());
    if (nuevo && nuevo.trim().length > 0) {
      mainTitle.textContent = nuevo.trim();
      document.title = nuevo.trim();
    }
  });

  // 3) Cambiar color de subtítulo y su párrafo en el mismo click
  btnColorSub.addEventListener('click', () => {
    const descripcion = document.querySelector('.descripcion');
    descripcion.classList.toggle('alt-color');
    descripcion.classList.toggle('alt-estilo');
  });

  // 4) Agregar imagen debajo de “Datos del libro” (local o URL)
  btnAddImage.addEventListener('click', async () => {
    let url = prompt('Pegue la URL de la imagen (o deje vacío para seleccionar un archivo local):');
    if (url && url.trim().length > 0) {
      colocarImagen(url.trim());
      return;
    }
    fileInput.value = '';
    fileInput.click();
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => colocarImagen(reader.result);
    reader.readAsDataURL(file);
  });

  function colocarImagen(src) {
    zonaImagen.innerHTML = '';
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Imagen del libro agregada por el usuario';
    zonaImagen.appendChild(img);
  }
});
