import React from 'react'
import DisplayVehicles from './DisplayVehicles'

const VehicleList = ({vehiclesList}) => {
    let items = vehiclesList;
	items = items.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    return (
        <div>
            {vehiclesList.map((user, p) => {
                return <DisplayVehicles key={p} 
                name={vehiclesList[p].name} 
                model={vehiclesList[p].model} 
                manufacturer={vehiclesList[p].manufacturer}
                length={vehiclesList[p].length}
                crew={vehiclesList[p].crew}
                cargo_capacity={vehiclesList[p].cargo_capacity}
                />
            })}
        </div>
    )
};

export default VehicleList 