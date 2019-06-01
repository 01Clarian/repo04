import React from 'react'


const DisplayStarships = ({name, model, manufacturer, length, crew, hyperdrive_rating}) => {
    return (
        <div className="dib bg-red ma3 pa3 shadow=5 br3" style={{opacity:0.8}}>
        <h1>{name}</h1>
        <br></br>
        <p>Model: {model}</p>   
        <p>Manufacturer: {manufacturer}</p>   
        <p>Length: {length}</p>   
        <p>Crew: {crew}</p>   
        <p>Hyperdrive Rating: {hyperdrive_rating}</p>       
        </div>
    )
};

export default DisplayStarships