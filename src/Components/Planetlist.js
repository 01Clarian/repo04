import React from 'react'
import DisplayPlanets from './DisplayPlanets'

const Planetlist = ({planetsList}) => {
    let items = planetsList;
	items = items.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    return (
        <div>
            {planetsList.map((user, m) => {
                return <DisplayPlanets key={m} 
                name={planetsList[m].name} 
                rotation_period={planetsList[m].rotation_period} 
                orbital_period={planetsList[m].orbital_period}
                diameter={planetsList[m].diameter}
                climate={planetsList[m].climate}
                gravity={planetsList[m].gravity}
                />
            })}
        </div>
    )
};

export default Planetlist