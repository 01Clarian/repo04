import React from 'react'
import './Displays.css'

const DisplayStarships = ({name, model, manufacturer, length, crew, hyperdrive_rating}) => {
    return (
        <div className="glowduck" >
        <div className="dib glowduck2 bg-red ma3 pa3 shadow=5 br3" style={{opacity:0.8}}>
        <h1>{name}</h1>
        <br></br>
        <p>Model: {model}</p>   
        <p>Manufacturer: {manufacturer}</p>   
        <p>Length: {length}</p>   
        <p>Crew: {crew}</p>   
        <p>Hyperdrive Rating: {hyperdrive_rating}</p>       
        </div>
        </div>
    )
};

export default DisplayStarships