import React from 'react'
import './Displays.css'

const DisplayPeople = ({name, height, mass, eye_color, birth_year, gender}) => {
    return (
        <div className="glowduck" >
        <div className="dib bg-yellow ma3 pa3 shadow=5 br3 grow-4 glowduck2" style={{opacity:0.6}}>
        <h1>{name}</h1>
        <p>Height: {height}</p>   
        <p>Mass: {mass}</p>   
        <p>Eye Color: {eye_color}</p>   
        <p>Birth Year: {birth_year}</p>   
        <p>Gender: {gender}</p>       
        </div>
        </div>

    )
};

export default DisplayPeople 