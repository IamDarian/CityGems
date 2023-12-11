import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export default function Map(props){

    const customIcon = new L.icon({
        iconUrl: "https://static.vecteezy.com/system/resources/previews/023/554/762/original/red-map-pointer-icon-on-a-transparent-background-free-png.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });

    return(
        <MapContainer style={{
            height: "100%",
            width: "100%"
            }} 
            center={[props.latitude, props.longitude]} 
            zoom={11} 
            scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[props.latitude, props.longitude]} icon={customIcon}>
                <Popup>
                Latitude: {props.latitude} <br /> Longitude: {props.longitude}
                </Popup>
            </Marker>
        </MapContainer>
    );
}