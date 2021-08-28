let uri = "https://api.spotify.com/v1/artists/60d24wfXkVzDSfLS6hyCjZ/top-tracks?market=US";

let token = "Bearer BQCYm0ewlgruOTzrxD-LrdWg4DSaLSx1j5v_Xa7pddaNEHJP39yxJUyL-ge6hq-j-Dj5gBOBeoMBDWR2k53cXfF427z8cXP51QvWMGI61YfC3DODGVWXDVsZX83NEZvhbPGLuoxtsW-gHp7gpdPf1xko3ybZeWPRyZxXXqU";

let parametrosPeticion={
    method : "GET",
    headers : {
        Authorization : token
    }
}

fetch(uri,parametrosPeticion)
.then(function (respuesta) {
   return( respuesta.json());
})
.then(function(respuesta) {
    console.log(respuesta);
})
.catch(function(error) {
    console.log(error);
})