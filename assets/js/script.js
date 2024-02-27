function actualizar() {
  location.reload(true);
}

// Función para actualizar cada 4 segundos (4000 milisegundos)
//setInterval(actualizar, 5000);


/************************************************************************/

let slideIndex = 2;
let currentSlide = 0;


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlides(n) {
  showSlides(slideIndex = n);
}



showSlides();




function showSlides() {
          let i;
          let slides = document.getElementsByClassName("slide");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}
          slides[slideIndex-1].style.display = "block";
          //setTimeout(showSlides, 10000); // Change image every 2 seconds
}
/*

let dots = document.getElementsByClassName("dot");

for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}*/
/***************************************
let URL = 'C:/Users/Duno Castellano/Desktop/Proyectos/Recoleccion_de_fondos/assets/Galery';
fetch(URL)
  .then(response => response.text())
  .then(data => {
    const galeria = document.getElementById('galeria');
    const imagenes = data.split('\n');

    imagenes.forEach(imagen => {
      if (imagen.endsWith('.jpg') || imagen.endsWith('.png')) {
        const imgElement = document.createElement('img');
        imgElement.src = URL+`/${imagen}`;
        galeria.appendChild(imgElement);
      }
    });
  });
  ***********************************/