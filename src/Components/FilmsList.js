import React from 'react'
import DisplayFilms from './DisplayFilms'

const FilmsList = ({filmsList}) => {
    let items = filmsList;
	items = items.sort((a,b) => (a.episode_id > b.episode_id) ? 1 : ((b.episode_id > a.episode_id) ? -1 : 0));
    return (
        <div>
            {filmsList.map((user, i) => {
                return <DisplayFilms key={i} 
                episode_id={filmsList[i].episode_id} 
                director={filmsList[i].director} 
                opening_crawl={filmsList[i].opening_crawl}
                planets={filmsList[i].planets}
                starships={filmsList[i].starships}
                />
            })}
        </div>
    )
};

export default FilmsList 