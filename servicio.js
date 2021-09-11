// CLIENTE PARA DONDE VOY

let uri = "https://api.spotify.com/v1/artists/60d24wfXkVzDSfLS6hyCjZ/top-tracks?market=US";

let token = "Bearer BQC-u6ISj8iPF8oemD1g0DVIS0u9vj2-JuKGS04uTwesSd0qU-2M8S87JFNc-klP-WICjZzcbXiABjMR6B592qg5XFObHP5CLz4sxXmpQFzgB1mnX7JgrbiGnMVWV_mxGJLtYaa3K7yF1YpUGltM3mpLPRnrNMswoIsNnO4";

let parametrosPeticion={
    method : "GET",
    headers : {
        Authorization : token
    }
}
// Fetch es una promesa, esta promesa puede no cumplirse esa es la razón del catch
// Esto es para la programación async (asincrona), para que el código pueda seguir con las otras tareas
fetch(uri,parametrosPeticion)
.then(function (respuesta) {
   return( respuesta.json());
})
.then(function(respuesta) {
    console.log(respuesta);//objeto
    pintarDatos(respuesta.tracks);
    // console.log(respuesta.tracks);//objeto
    // console.log(respuesta.tracks[0]);//Arreglo
    // console.log(respuesta.tracks[0].name);//Arreglo
    // console.log(respuesta.tracks[0].preview_url);//Arreglo
    // console.log(respuesta.tracks[0].album.images[0].url);//Arreglo
})
.catch(function(error) {
    console.log(error);
})
function pintarDatos(datos){
    // Traversing metodo para pintar etiquetas html 
    let fila = document.getElementById("fila");
    datos.forEach(function (cancion) {
        let columna = document.createElement("div");
        columna.classList.add("col");
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card");
        tarjeta.classList.add("h-150");
        let imagen = document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.src=cancion.album.images[0].url;
        let cuerpo = document.createElement("div");
        cuerpo.classList.add("card-body");
        let titulo = document.createElement("h5");
        titulo.classList.add("card-title");
        titulo.innerHTML = cancion.name;
        let descripcion = document.createElement("p");
        descripcion.classList.add("card-text");
        descripcion.innerHTML = cancion.name;
        
        // crear audio
        let audio = document.createElement("audio");
        audio.classList.add("w-100");
        audio.src=cancion.preview_url;
        audio.setAttribute("controls","controls");

        // PADRES E HIJOS 
        // Se empieza de adentro a afuera, comenzando por la imagen porque es lo que van en el centro
        // Agregar barra de popularidad https://getbootstrap.com/docs/5.1/components/progress/
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);
        tarjeta.appendChild(audio);
        columna.appendChild(tarjeta);
        imagen.appendChild(cuerpo);
        fila.appendChild(columna);

    });
}