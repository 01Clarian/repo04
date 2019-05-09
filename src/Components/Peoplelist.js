import React from 'react'
import DisplayPeople from './DisplayPeople'

const Peoplelist = ({peopleList}) => {
    let items = peopleList;
	items = items.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    return (
        <div>
            {peopleList.map((user, i) => {
                return <DisplayPeople key={i} 
                name={peopleList[i].name} 
                height={peopleList[i].height} 
                mass={peopleList[i].mass}
                eye_color={peopleList[i].eye_color}
                birth_year={peopleList[i].birth_year}
                gender={peopleList[i].gender}
                />
            })}
        </div>
    )
};

export default Peoplelist 