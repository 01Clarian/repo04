import {CHANGE_SEARCH_FIELD,
    TOGGLE_HIDDEN,
    REQUEST_PEOPLE_PENDING,
    REQUEST_PEOPLE_SUCCESS,
    REQUEST_PEOPLE_FAILED,
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