import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import charactersReducer from './store/reducers/characters'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    character: charactersReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store