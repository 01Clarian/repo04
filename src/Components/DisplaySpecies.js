import React from 'react'

const DisplaySpecies = ({name, language, average_lifespan, classification, created, eye_colors}) => {
    return (
        <div className="dib bg-purple ma3 pa3 shadow=5 br3" style={{opacity:0.8}}>
        <h1>{name}</h1>
        <br></br>
        <p>Language: {language}</p>   
        <p>Average Lifespan: {average_lifespan}</p>   
        <p>Classification: {classification}</p>   
        <p>Created: {created}</p>   
        <p>Eye Color: {eye_colors}</p>       
        </div>
    )
};

export default DisplaySpecies 