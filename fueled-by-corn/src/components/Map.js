import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";


function MapObject(){
return(
    <div>
    <h1>GoogleMap</h1>
    <GoogleMap 
    defaultZoom={10}
    defaultCenter={{lat:33.7490, lng: -84.3880}}
    />
    </div>
);
};
const WrappedMap = withScriptjs(withGoogleMap(MapObject));


export default function Map() {
    return <div style={{width: '100vw', height: '60vh'}}>
        <WrappedMap googleMapURL ={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement = {<div style={{ height: "100%"}} />}
        containerElement = {<div style={{ height: "100%"}} />}
        mapElement = {<div style={{ height: "100%"}} />}/>
    </div>
}