var ilustracion = "<div id='ilustracion'> <h2><a href='#'>Ilustración</a></h2> <div class='galeria'>    <div><img src='img/01-nuevecondiez-caratula.jpg' alt='' class='cover'>        <h3>2020 · Nuevecondiez</h3>        <h4>Diseño de carátula e interior.</h4>    </div>    <div><img src='img/02-animalada-xabaz-covenant.jpg' class='cover' alt=''>        <h3>2021 · Covenant Audiovisual</h3>        <h4>Diseño de personajes, ilustración y animación para el programa “Animalada Xabaz”</h4>    </div>    <div><img src='img/03-sqtp-mares-de-polvo-videolyric.jpg' alt=''>        <h3>2021 · SQTP</h3>        <h4>Ilustraciones para el videolyric de la canción “Mares de Polvo”.            Trabajo en conjunto con Patricia Guerra.</h4>    </div>    <div><img src='img/04-veganamente-tomate.jpg' alt=''>        <h3>2020-22 · Veganamente</h3>        <h4>Diseño de personajes para el canal de Youtube “Veganamente”.</h4>    </div></div></div>"

var motiongr = "<div id='mograph'> <h2><a href='#'>Motion Graphics</a></h2> <div class='galeria'>    <div><img src='img/05-llunes-seu-folk.jpg' alt=''>        <h3>2016 · Seu Folk</h3>        <h4>Producción, realización y edición del videoclip para la canción “Llunes”.</h4>    </div>    <div><img src='img/06-david-cavernario-motion-graphics-pirate-sea-shanty.jpg' alt=''>        <h3>2021</h3>        <h4>Diseño de personaje y animación.</h4>    </div>    <div><img src='img/07-david-cavernario-motion-graphics-candle-illustration-3d-integration.jpg' alt=''>        <h3>2021</h3>        <h4>Modelado 3D, render, animación e integración en fondo ilustrado.</h4>    </div>    <div><img src='img/08-nuevecondiez-no-hablaron-videolyric.jpg' alt=''>        <h3>2021 · Nuevecondiez</h3>        <h4>Modelado de escenarios y elementos, animación de cámaras, edición y efectos especiales para el            videolyric de la canción “No Hablaron”.</h4>    </div></div></div>"

var diseño = "<div id='diseño'> <h2><a href='#'>Diseño</a></h2>  <div class='galeria'>    <div><img src='img/09-david-cavernario-animalada-xabaz-logotipo-covenant-audiovisual.jpg' alt=''>        <h3>2020 · Covenant Audiovisual</h3>        <h4>Diseño de logotipo para el programa “Animalada Xabaz”.</h4>    </div>    <div><img src='img/10-festival-cine-oviedo-triptico.jpg' alt=''>        <h3>2021</h3>        <h4>Diseño de cartel y tríptico para festival ficticio.</h4>    </div>    <div><img src='img/11-nosferatu-poster-cartel-film-movie.jpg' alt=''>        <h3>2021</h3>        <h4>Diseño y animación inspirado en el cartel original de la película “Nosferatu”.</h4>    </div>    <div><img src='img/12-hamburguesa-edicion-foto-diseño-receta.jpg' alt=''>        <h3>2021</h3>        <h4>Fotografía, edición y diseño para la muestra de ingredientes y receta inspirado en Guakame.</h4>    </div></div></div>"

var tresde = "<div id='tresd'> <h2><a href='#'>3D</a></h2> <div class='galeria'>    <div><img src='img/13-piko-personaje-modelado-3d-blender-pato-duck.jpg' alt=''>        <h3>2021</h3>        <h4>Modelado 3D y render de personaje.</h4>    </div>    <div><img src='img/14-cabaña-paisaje-blender-3d-modelado-cabin.jpg' alt=''>        <h3>2021</h3>        <h4>Modelado, render y animación de paisaje.</h4>    </div>    <div><img src='img/15-cabaña-interior-mecedora-3d-blender.jpg' alt=''>        <h3>2021</h3>        <h4>Modelado, render y animación de escenario.</h4>    </div>    <div><img src='img/08-nuevecondiez-no-hablaron-videolyric.jpg' alt=''>        <h3>2021 · Nuevecondiez</h3>        <h4>Modelado y render de escenarios y animación de cámara para el videolyric “No Hablaron”.</h4>    </div></div></div>"

var galer = 0;

var seccion = ilustracion;


function pasar() {

  if (galer == 0) {
    seccion = ilustracion;
    galer = 1;
  } else if (galer == 1) {
    seccion = motiongr;
    galer = 2;
  } else if (galer == 2) {
    seccion = diseño;
    galer = 3
  } else {
    seccion = tresde;
    galer = 0;
  }
  document.getElementById('galeria').innerHTML = seccion;

}