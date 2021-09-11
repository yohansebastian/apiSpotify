let uri = "https://accounts.spotify.com/api/token";

let dato1="grant_type=client_credentials";
let dato2="client_id=fa4586c5382a492890f1c1e8f774354b";
let dato3="client_secret=8ccb3c2e330a4a04b91392abdbdb7f80";

let parametrosPeticion={
    method : "POST",
    headers : {
        "Content-Type" : "application/x-www-form-urlencoded" 
    },
    body : dato1+"&"+dato2+"&"+dato3
    //body : `${dato1}&$dato2+&+dato3`
}

fetch(uri,parametrosPeticion)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
     console.log(respuesta)
    obtenerToken(respuesta);
})
.catch(function(error) {
    console.log(error);
})

function obtenerToken(datos) {
    let token = datos.token_type+" "+datos.access_token;
    console.log(token);

}