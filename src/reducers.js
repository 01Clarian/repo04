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

const initialStateSearch = {
    searchField: ''
}

export const searchPeople = (state=initialStateSearch, action={}) => {
    switch(action.type) {
    case CHANGE_SEARCH_FIELD:
    return Object.assign({}, state, {searchField:action.payload})
    default: 
    return state; 
}
}

const initialStatePeople = {
    peopleList: [],
    error: '',
    isPending:true 
}

export const requestPeople = (state=initialStatePeople, action={}) => {
    switch(action.type) {
    case REQUEST_PEOPLE_PENDING:
    return Object.assign({}, state, {isPending:true})
    case REQUEST_PEOPLE_SUCCESS:
    return Object.assign({}, state, {peopleList:action.payload, isPending:false})
    case REQUEST_PEOPLE_FAILED:
    return Object.assign({}, state, {error:action.payload, isPending:false})
    default:
    return state;
    }
}

const initialStatePlanets = {
    planetsList: [],
    error: '',
    isPending:true 
}

export const requestPlanets = (state=initialStatePlanets, action={}) => {
    switch(action.type) {
    case REQUEST_PLANETS_PENDING:
    return Object.assign({}, state, {isPending:true})
    case REQUEST_PLANETS_SUCCESS:
    return Object.assign({}, state, {planetsList:action.payload, isPending:false})
    case REQUEST_PLANETS_FAILED:
    return Object.assign({}, state, {error:action.payload, isPending:false})
    default:
    return state;
    }
}

const initialStateStarships = {
    starshipsList: [],
    error: '',
    isPending:true 
}

export const requestStarships = (state=initialStateStarships, action={}) => {
    switch(action.type) {
    case REQUEST_STARSHIPS_PENDING:
    return Object.assign({}, state, {isPending:true})
    case REQUEST_STARSHIPS_SUCCESS:
    return Object.assign({}, state, {starshipsList:action.payload, isPending:false})
    case REQUEST_STARSHIPS_FAILED:
    return Object.assign({}, state, {error:action.payload, isPending:false})
    default:
    return state;
    }
}

const initialStateisHidden = {
    isHidden: true,
}

export const togglePeople = (state=initialStateisHidden, action={}) => {
    switch(action.type) {
    case TOGGLE_HIDDEN:
    return Object.assign({}, state, {isHidden:!action.payload})
    default: 
    return state; 
}
}