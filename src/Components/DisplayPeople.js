import React from 'react'


const DisplayPeople = ({name, height, mass, eye_color, birth_year, gender}) => {
    return (
        <div className="dib bg-yellow ma3 pa3 shadow=5 br3 grow-4">
        <h2>Character</h2>
        <h1>{name}</h1>
        <br></br>
        <p>Height: {height}</p>   
        <p>Mass: {mass}</p>   
        <p>Eye Color: {eye_color}</p>   
        <p>Birth Year: {birth_year}</p>   
        <p>Gender: {gender}</p>       
        </div>
    )
};

export default DisplayPeople 