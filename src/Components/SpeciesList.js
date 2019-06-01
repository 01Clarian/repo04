import React from 'react'
import DisplaySpecies from './DisplaySpecies'

const SpeciesList = ({speciesList}) => {
    let items = speciesList;
	items = items.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    return (
        <div>
            {speciesList.map((user, s) => {
                return <DisplaySpecies key={s} 
                name={speciesList[s].name} 
                language={speciesList[s].language} 
                average_lifespan={speciesList[s].average_lifespan}
                classification={speciesList[s].classification}
                created={speciesList[s].created}
                eye_colors={speciesList[s].eye_colors}
                />
            })}
        </div>
    )
};

export default SpeciesList 