import React, {Component} from 'react';
import Searchbox from '../Components/Searchbox';
import Peoplelist from '../Components/Peoplelist';
import Scrollview from '../Components/Scrollview';
import Planetlist from '../Components/Planetlist';
import Starshiplist from '../Components/Starshiplist';
import './App.css'
import swdb from '../Media/swdb.png'
import {setSearchField, setToggleHidden, requestPeople, requestStarships, requestPlanets} from '../actions'
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
        
      }
      
    }

    toggleHidden () {
      this.setState({
        isHidden: !this.state.isHidden
      })
    }


    toggleHidden2 () {
      this.setState({
        isHidden2: !this.state.isHidden2
      })
    }

    toggleHidden3 () {
      this.setState({
        isHidden3: !this.state.isHidden3
      })
    }


   componentDidMount() {
    this.props.onRequestPeople();
    this.props.onRequestPlanets();
    this.props.onRequestStarships();
    this.props.onTogglePeople();
}
  
render () {
  const {searchField, isHidden, onTogglePeople, onSearchChage, isPending, peopleList, planetsList, starshipsList} = this.props;
  const filteredPeople = peopleList.filter(person => {
    return (person.name.toLowerCase().includes(searchField.toLowerCase())
    )});
    const filteredPlanets = planetsList.filter(planet => {
      return (planet.name.toLowerCase().includes(searchField.toLowerCase())
      )});
      const filteredStarships = starshipsList.filter(planet => {
        return (planet.name.toLowerCase().includes(searchField.toLowerCase())
        )});
  
  return isPending ?
  <h2>LOADING</h2> :
  ( 
    <div className="stars">
<div className="twinkling">
<div className="clouds">
  <div className="tc">
  <h1><img src={swdb}  opacity="0.3" height="100px" /></h1>
  <br></br>
          
  <Searchbox searchChange={onSearchChage} />
  <p id="here"> Please click buttons twice to reset due to novice react coding methods. </p>
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
  <Scrollview
  >
           {!this.state.isHidden3 && <Starshiplist starshipList={filteredStarships} />}
           {!this.state.isHidden2 && <Planetlist planetsList={filteredPlanets} />} 
           {!this.state.isHidden && <Peoplelist peopleList={filteredPeople} />} 
 

 </Scrollview>
  </div>
  </div>
  </div>
  </div>
  )
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App)