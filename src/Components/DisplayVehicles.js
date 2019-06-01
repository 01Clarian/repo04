import React from 'react'


const DisplayVehicles = ({name, model, cargo_capacity, manufacturer, crew, length}) => {
    return (
        <div className="dib bg-orange ma3 pa3 shadow=5 br3" style={{opacity:0.8}}>
        <h1>{name}</h1>
        <p>Model: {model}</p>   
        <p>Manufacturer: {manufacturer}</p>   
        <p>Length: {length}</p>   
        <p>Crew: {crew}</p>   
        <p>Cargo Capacity: {cargo_capacity}</p>       
        </div>
    )
};

export default DisplayVehicles 