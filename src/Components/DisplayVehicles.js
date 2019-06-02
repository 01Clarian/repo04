import React from 'react'
import './Displays.css'

const DisplayVehicles = ({name, model, cargo_capacity, manufacturer, crew, length}) => {
    return (
        <div className="glowduck" >
        <div className="dib glowduck2 bg-orange ma3 pa3 shadow=5 br3" style={{opacity:0.8}}>
        <h1>{name}</h1>
        <p>Model: {model}</p>   
        <p>Manufacturer: {manufacturer}</p>   
        <p>Length: {length}</p>   
        <p>Crew: {crew}</p>   
        <p>Cargo Capacity: {cargo_capacity}</p>       
        </div>
        </div>

    )
};

export default DisplayVehicles 