import React, { Component } from 'react';
import GoogleMaps from 'simple-react-google-maps'
/*
* Use this component as a launching-pad to build your functionality.
*
*/

function getMarkers(){
  fetch("./store_directory.json").then(function(response) {return response.json();}).then( function(data){
      console.log(data);
      let direccion = data[0].Address;
      let inicioURL = "https://maps.googleapis.com/maps/api/geocode/json?address=$"
      let URL = inicioURL+direccion.split(" ").join("+")
  
      URL += "&key=AIzaSyCRrdnhmnojDV5GPXFOtGeKObf0fiMmM3E"
      console.log(URL);
      
      let resp = fetch(URL).then(function(response){return response.json();}).then(function(location){
        let resp3 = createMark(location);
        console.log(resp3);
        return resp3;
      })
      console.log(resp);
    });
}

function createMark(location){
  let latitud, longitud;
  console.log(location);
  latitud = location.results[0].geometry.location.lat
  console.log(latitud);
  longitud = location.results[0].geometry.location.lng
  console.log(longitud);
  let newmark = {lat: latitud, lng:longitud}
  return newmark;
}

export default class YourComponent extends Component {
  render() {
    return (
      <GoogleMaps
      apiKey={"AIzaSyCRrdnhmnojDV5GPXFOtGeKObf0fiMmM3E"}
      style={{height: "600px", width: "100%"}}
      zoom={12}
      center={{lat: 19.432608, lng: -99.133209}}
      markers={getMarkers()}
      />
    );
  }
}

//////////////////////////COMENTARIOS////////////////////
/// Logre obtener los datos para los marcadores desde el archivo store_directory.json
/// para posteriormente mandarlos como un a url al servicio de Geocoding de la API de 
/// Google Maps, de esa petición logre recibir la respuesta y aislar la latitud y
/// longitud correspondientes a la direccion dada en el json, lo que no pude hacer es
/// pasar ese objeto que al final imprimo por consola hasta el componente Map que
/// debería recibir ese objeto y usarlo con la propiedad markers para crear todos los
/// pines o marcadores solicitados en el ejercicio, por ello es que solo carga el mapa
