import React, {Component} from 'react';
import Searchbox from '../Components/Searchbox';
import Peoplelist from '../Components/Peoplelist';
import Scrollview from '../Components/Scrollview';
import Planetlist from '../Components/Planetlist';
import Starshiplist from '../Components/Starshiplist';
import VehicleList from '../Components/VehicleList';
import FilmsList from '../Components/FilmsList';
import SpeciesList from '../Components/SpeciesList';
import swdb from '../Media/swdb.png'
import './App.css'
import {setSearchField, setToggleHidden, requestPeople, requestStarships, requestPlanets, requestSpecies, requestVehicles, requestFilms} from '../actions'
import {connect} from 'react-redux'

//async await (alternative to the promise chain) test exercise **kept it in here for posterity**
//async function fetchAll() {
//  const results = await Promise.all(urls.map((url) => fetch(url).then((r) => r.json())));
//  console.log(JSON.stringify(results, null, 2));
//    }



const mapStateToProps = (state) => {
  return {
      isHidden: state.togglePeople.isHidden,
      searchField: state.searchPeople.searchField,
      peopleList: state.requestPeople.peopleList,
      planetsList: state.requestPlanets.planetsList,
      starshipsList: state.requestStarships.starshipsList,
      filmsList: state.requestFilms.filmsList,
      speciesList: state.requestSpecies.speciesList,
      vehiclesList: state.requestVehicles.vehiclesList,
      error: state.requestPeople.error,
      isPending: state.requestPeople.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
return {
  onSearchChage: (event) => dispatch(setSearchField(event.target.value)),
  onRequestPeople: () => dispatch(requestPeople()),
  onRequestPlanets: () => dispatch(requestPlanets()),
  onRequestStarships: () => dispatch(requestStarships()),
  onRequestFilms: () => dispatch(requestFilms()),
  onRequestSpecies: () => dispatch(requestSpecies()),
  onRequestVehicles: () => dispatch(requestVehicles()),
  onTogglePeople: () => dispatch(setToggleHidden())
}
}

class App extends Component {
    constructor() {
      super()
      this.state= {
        isHidden: true,
        isHidden2: true,
        isHidden3: true,
        isHidden4: true,
        isHidden5: true,
        isHidden6: true,
        isHiddenAll: true
        
      }
      
    }

    toggleHidden () {
      this.setState({
        isHidden: !this.state.isHidden,
        isHidden2: true,
        isHidden3: true,
        isHidden4: true,
        isHidden5: true,
        isHidden6: true,
        isHiddenAll: true,
      })
    }


    toggleHidden2 () {
      this.setState({
        isHidden2: !this.state.isHidden2,
        isHidden: true,
        isHidden3: true,
        isHidden4: true,
        isHidden5: true,
        isHidden6: true,
        isHiddenAll: true,
      })
    }

    toggleHidden3 () {
      this.setState({
        isHidden3: !this.state.isHidden3,
        isHidden: true,
        isHidden2: true,
        isHidden4: true,
        isHidden5: true,
        isHidden6: true,
        isHiddenAll: true,
      })
    }

    toggleHidden4 () {
      this.setState({
        isHidden4: !this.state.isHidden4,
        isHidden: true,
        isHidden2: true,
        isHidden3: true,
        isHidden5: true,
        isHidden6: true,
        isHiddenAll: true,
      })
    }

    toggleHidden5 () {
      this.setState({
        isHidden5: !this.state.isHidden5,
        isHidden: true,
        isHidden2: true,
        isHidden4: true,
        isHidden3: true,
        isHidden6: true,
        isHiddenAll: true,
      })
    }

    toggleHidden6 () {
      this.setState({
        isHidden6: !this.state.isHidden6,
        isHidden: true,
        isHidden2: true,
        isHidden4: true,
        isHidden5: true,
        isHidden3: true,
        isHiddenAll: true,
      })
    }

    toggleHidden7 () {
      this.setState({
        isHidden6: !this.state.isHidden6,
        isHidden: !this.state.isHidden,
        isHidden2: !this.state.isHidden2,
        isHidden4: !this.state.isHidden4,
        isHidden5: !this.state.isHidden5,
        isHidden3: !this.state.isHidden3,
        isHiddenAll: !this.state.isHidden3,
      })
    }


   componentDidMount() {
    this.props.onRequestPeople();
    this.props.onRequestPlanets();
    this.props.onRequestStarships();
    this.props.onRequestFilms();
    this.props.onRequestSpecies();
    this.props.onRequestVehicles();
    this.props.onTogglePeople();
}
  
render () {
  const {searchField,onSearchChage, isPending, peopleList, planetsList, starshipsList, vehiclesList, filmsList, speciesList} = this.props;
  const filteredPeople = peopleList.filter(person => {
    return (person.name.toLowerCase().includes(searchField.toLowerCase())
    )});
    const filteredPlanets = planetsList.filter(planet => {
      return (planet.name.toLowerCase().includes(searchField.toLowerCase())
      )});
      const filteredStarships = starshipsList.filter(planet => {
        return (planet.name.toLowerCase().includes(searchField.toLowerCase())
        )});
        const filteredFilms = filmsList.filter(film => {
          return (film.director.toLowerCase().includes(searchField.toLowerCase())
          )});
          const filteredVehicles = vehiclesList.filter(vehicle => {
            return (vehicle.name.toLowerCase().includes(searchField.toLowerCase())
            )});
            const filteredSpecies = speciesList.filter(species => {
              return (species.name.toLowerCase().includes(searchField.toLowerCase())
              )});
  
  return isPending ?
  <h2>LOADING</h2> :
  ( 
    <div className="stars">
<div className="twinkling">
<div className="clouds">
  <div className="tc">
    <div style={{opacity:'0.5'}}>
  <h1><img src={swdb}  opacity="0.3" height="100px" /></h1>
   <br></br>
   </div>        
  <Searchbox searchChange={onSearchChage} />
  <p id="here"> This API fetch demonstration is configured with React and rewired through Redux. </p>
  <br></br>
  <button id="peoplebtn" onClick={this.toggleHidden.bind(this)} >
          People
        </button>
        <button id="planetbtn" onClick={this.toggleHidden2.bind(this)} >
          Planets
        </button>
        <button id="starshipbtn" onClick={this.toggleHidden3.bind(this)} >
          Starships
        </button>
        <p></p>
        <button id="vehiclesbtn"  onClick={this.toggleHidden4.bind(this)} >
          Vehicles
        </button>
        <button id="speciesbtn"  onClick={this.toggleHidden5.bind(this)} >
          Species
        </button>
        <button id="filmsbtn" onClick={this.toggleHidden6.bind(this)} >
          Films
        </button>
        <button id="showallbtn" onClick={this.toggleHidden7.bind(this)} >
          Search All
        </button>
  <Scrollview
  >
           {!this.state.isHidden && <Peoplelist peopleList={filteredPeople} />} 
           {!this.state.isHidden2 && <Planetlist planetsList={filteredPlanets} />} 
           {!this.state.isHidden3 && <Starshiplist starshipList={filteredStarships} />} 
           {!this.state.isHidden4 && <VehicleList vehiclesList={filteredVehicles} />} 
           {!this.state.isHidden5 && <SpeciesList speciesList={filteredSpecies} />}  
           {!this.state.isHidden6 && <FilmsList filmsList={filteredFilms} />} 
           {!this.state.isHiddenAll && <VehicleList vehiclesList={filteredVehicles} />
          && <FilmsList filmsList={filteredFilms} /> && <SpeciesList speciesList={filteredSpecies} />
          &&  <Starshiplist starshipList={filteredStarships} /> &&
          <Planetlist planetsList={filteredPlanets} /> &&
          <Peoplelist peopleList={filteredPeople} />
          }


 </Scrollview>
  </div>
  </div>
  </div>
  </div>
  )
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App)