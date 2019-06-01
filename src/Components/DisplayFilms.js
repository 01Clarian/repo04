import React from 'react'


const DisplayFilms = ({director, characters, episode_id, opening_crawl, planets, starships}) => {
    return (
        <div className="dib bg-pink ma3 pa3 shadow=5 br3 grow-4" style={{opacity:0.5}}>
        <h1>Episode: {episode_id}</h1>
        <h2>Director: {director}</h2>   
        <br></br>
        <p>{opening_crawl}</p>   
        </div>
    )
};

export default DisplayFilms