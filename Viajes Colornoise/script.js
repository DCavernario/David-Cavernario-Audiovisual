var destinos=[
  ["Oviedo",        "<img src=https://static2.elcomercio.es/www/multimedia/201906/14/media/cortadas/45876088--624x439.JPG>"],
  ["Torrelavega",   "<img src=https://www.eldiarioalerta.com/media/diarioalerta/images/2020/10/25/2020102519262956013.jpg>"],
  ["Lugo",          "<img src=https://sdmedia.playser.cadenaser.com/playser/20221/24/1643049900432_1643049923_video_1643050093.jpg>"],
  ["Mieres",        "<img src=https://estaticos-cdn.prensaiberica.es/clip/0fbdd31f-e482-4da1-845f-d46a6846746a_21-9-aspect-ratio_default_0.jpg>"],
  ["Alcorcón",      "<img src=https://www.telemadrid.es/2021/05/17/programas/buenos-dias-madrid/Trapicheo-drogas-amenazas-vecinos-Alcorcon_2341885790_19962975_1300x731.jpg>"],
  ["París",         "<img src=https://us.123rf.com/450wm/menz11stock/menz11stock1405/menz11stock140500016/27936703-una-foto-de-la-torre-de-alta-tensi%C3%B3n-con-la-luz-del-sol.jpg?ver=6>"],
  ["Lisboa",        "<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_yBChPqs75ry-CjJQrf0jRq6YlPQT9HlpCiD41tX6mmG4dgPzmYETOHKBklUsLqcaTDc&usqp=CAU>"],
  ["Barcelona",     "<img src=https://www.lavanguardia.com/files/image_948_465/uploads/2018/04/11/5fa43d6c65923.jpeg>"],
  ["Berlín",        "<img src=https://e00-elmundo.uecdn.es/elmundo/imagenes/2010/07/18/internacional/1279463581_1.jpg>"],
  ["Dublín",        "<img src=http://c3.thejournal.ie/media/2013/08/drunk-girl-ambulance-752x501.jpg>"],
  ["Tokio",         "<img src=https://media.tacdn.com/media/attractions-splice-spp-674x446/09/27/f7/d2.jpg>"],
  ["Abu Dabi",      "<img src=https://s1.eestatic.com/2021/01/03/corazon/casas-reales/548456656_168787978_1706x960.jpg>"],
  ["Dubai",         "<img src=https://static3.diariosur.es/www/multimedia/202108/01/media/cortadas/jc-kIXF-U150114604084DCH-1248x770@RC.jpg>"],
  ["Bahamas",       "<img src=https://img1.viajar.elperiodico.com/70/d8/c5/pig-island-bahamas-1000x701.jpg>"],
  ["Bora Bora",     "<img src=https://xdaysiny.com/wp-content/uploads/2016/05/simple-local-home-bora-bora-french-polynesia.jpg>"]
]






function numerorandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function randomPob(){
    var aleatorioPob = numerorandom(0,4);
    document.getElementById("ciudadPob").innerHTML= destinos[aleatorioPob][0];
    document.getElementById("imgPob").innerHTML= destinos[aleatorioPob][1]; 
}

function randomMed(){
  var aleatorioMed = numerorandom(0,9);      
    document.getElementById("ciudadMed").innerHTML=destinos[aleatorioMed][0];
   document.getElementById("imgMed").innerHTML= destinos[aleatorioMed][1]; 
    
}

function randomRic(){
  var aleatorioRic = numerorandom(0,14);
      document.getElementById("ciudadRic").innerHTML=destinos[aleatorioRic][0];
   document.getElementById("imgRic").innerHTML= destinos[aleatorioRic][1];
  alert("Paga, cerdo");
  
  
}



// document.write(numMed);



/*  var clasemedia = destinos[0]+destinos[1]+destinos[2]+destinos[3]+destinos[4]+destinos[5]+destinos[6]+destinos[7]+destinos[8]+destinos[9]; */