import {CHANGE_SEARCH_FIELD,
    TOGGLE_HIDDEN,
    REQUEST_PEOPLE_PENDING,
    REQUEST_PEOPLE_SUCCESS,
    REQUEST_PEOPLE_FAILED,
    REQUEST_FILMS_PENDING,
    REQUEST_FILMS_SUCCESS,
    REQUEST_FILMS_FAILED,
    REQUEST_SPECIES_PENDING,
    REQUEST_SPECIES_SUCCESS,
    REQUEST_SPECIES_FAILED,
    REQUEST_VEHICLES_PENDING,
    REQUEST_VEHICLES_SUCCESS,
    REQUEST_VEHICLES_FAILED,
    REQUEST_PLANETS_PENDING,
    REQUEST_PLANETS_SUCCESS,
    REQUEST_PLANETS_FAILED,
    REQUEST_STARSHIPS_PENDING,
    REQUEST_STARSHIPS_SUCCESS,
    REQUEST_STARSHIPS_FAILED} from './constants'

    //not sure how to input toggle mode correctly through 
    //actions and reducers - 

export const setToggleHidden = (value) => ({
    type:TOGGLE_HIDDEN, 
    payload:value
})

export const setSearchField = (text) => ({
type:CHANGE_SEARCH_FIELD,
payload:text
})

const urls = 
 ["https://swapi.co/api/people",
  "https://swapi.co/api/people?page=2",
  "https://swapi.co/api/people?page=3",
  "https://swapi.co/api/people?page=4" ]

  const urls2 = 
  ["https://swapi.co/api/planets",
  "https://swapi.co/api/planets?page=2",
  "https://swapi.co/api/planets?page=3",
  "https://swapi.co/api/planets?page=4" ]
  
  const urls3 = 
  ["https://swapi.co/api/starships",
  "https://swapi.co/api/starships?page=2",
  "https://swapi.co/api/starships?page=3",
  "https://swapi.co/api/starships?page=4" ]  

  const urls4 = 
  ["https://swapi.co/api/vehicles",
  "https://swapi.co/api/vehicles?page=2",
  "https://swapi.co/api/vehicles?page=3",
  "https://swapi.co/api/vehicles?page=4" ]  
  
  const urls5 = 
  ["https://swapi.co/api/species",
  "https://swapi.co/api/species?page=2",
  "https://swapi.co/api/species?page=3",
  "https://swapi.co/api/species?page=4" ]  

  const urls6 = 
  ["https://swapi.co/api/films"]  


export const requestPeople = () => (dispatch) => {
dispatch({type:REQUEST_PEOPLE_PENDING})
  Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
    .then(people => people.results)
))
.then(data => dispatch({type:REQUEST_PEOPLE_SUCCESS, payload:[].concat(...data)}))
.catch(error => dispatch({type:REQUEST_PEOPLE_FAILED, payload:error}))    
}

export const requestPlanets = () => (dispatch) => {
    dispatch({type:REQUEST_PLANETS_PENDING})
      Promise.all(urls2.map(url =>
        fetch(url).then(resp => resp.json())
        .then(planets => planets.results)
    ))
    .then(data => dispatch({type:REQUEST_PLANETS_SUCCESS, payload:[].concat(...data)}))
    .catch(error => dispatch({type:REQUEST_PLANETS_FAILED, payload:error}))    
    }

    export const requestStarships = () => (dispatch) => {
        dispatch({type:REQUEST_STARSHIPS_PENDING})
          Promise.all(urls3.map(url =>
            fetch(url).then(resp => resp.json())
            .then(starships => starships.results)
        ))
        .then(data => dispatch({type:REQUEST_STARSHIPS_SUCCESS, payload:[].concat(...data)}))
        .catch(error => dispatch({type:REQUEST_STARSHIPS_FAILED, payload:error}))    
        }

        export const requestVehicles = () => (dispatch) => {
          dispatch({type:REQUEST_VEHICLES_PENDING})
            Promise.all(urls4.map(url =>
              fetch(url).then(resp => resp.json())
              .then(vehicles => vehicles.results)
          ))
          .then(data => dispatch({type:REQUEST_VEHICLES_SUCCESS, payload:[].concat(...data)}))
          .catch(error => dispatch({type:REQUEST_VEHICLES_FAILED, payload:error}))    
          }

          export const requestSpecies = () => (dispatch) => {
            dispatch({type:REQUEST_SPECIES_PENDING})
              Promise.all(urls5.map(url =>
                fetch(url).then(resp => resp.json())
                .then(species => species.results)
            ))
            .then(data => dispatch({type:REQUEST_SPECIES_SUCCESS, payload:[].concat(...data)}))
            .catch(error => dispatch({type:REQUEST_SPECIES_FAILED, payload:error}))    
            }

            export const requestFilms = () => (dispatch) => {
              dispatch({type:REQUEST_FILMS_PENDING})
                  fetch('https://swapi.co/api/films').then(resp => resp.json())
                  .then(starships => starships.results)
              
              .then(data => dispatch({type:REQUEST_FILMS_SUCCESS, payload:[].concat(...data)}))
              .catch(error => dispatch({type:REQUEST_FILMS_FAILED, payload:error}))    
              }