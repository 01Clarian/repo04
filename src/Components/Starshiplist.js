import React from 'react'
import DisplayStarships from './DisplayStarships'

const Starshiplist = ({starshipList}) => {
    let items = starshipList;
	items = items.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    return (
        <div>
            {starshipList.map((user, m) => {
                return <DisplayStarships key={m} 
                name={starshipList[m].name} 
                model={starshipList[m].model} 
                manufacturer={starshipList[m].manufacturer}
                length={starshipList[m].length}
                crew={starshipList[m].crew}
                hyperdrive_rating={starshipList[m].hyperdrive_rating}
                />
            })}
        </div>
    )
};

export default Starshiplist 