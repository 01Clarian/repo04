import React from 'react'
import './Displays.css'

const DisplayPlanets = ({name, rotation_period, orbital_period, diameter, climate, gravity}) => {
    return (
        <div className="glowduck" >
        <div className="dib bg-blue ma3 pa3 shadow=5 br3 glowduck2" style={{opacity:0.8}}>
        <h1>{name}</h1>
        <br></br>
        <p>Rotation Period: {rotation_period}</p>   
        <p>Orbital Period: {orbital_period}</p>   
        <p>Diamter: {diameter}</p>   
        <p>Climate: {climate}</p>   
        <p>Gravity: {gravity}</p>       
        </div>
        </div>
    )
};

export default DisplayPlanets