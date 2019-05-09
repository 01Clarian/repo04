import React from 'react'


const DisplayPlanets = ({name, rotation_period, orbital_period, diameter, climate, gravity}) => {
    return (
        <div className="dib bg-blue ma3 pa3 shadow=5 br3">
        <h2>Planet</h2>
        <h1>{name}</h1>
        <br></br>
        <p>Rotation Period: {rotation_period}</p>   
        <p>Orbital Period: {orbital_period}</p>   
        <p>Diamter: {diameter}</p>   
        <p>Climate: {climate}</p>   
        <p>Gravity: {gravity}</p>       
        </div>
    )
};

export default DisplayPlanets