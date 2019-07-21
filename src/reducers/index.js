import {combineReducers} from 'redux';
import movies from './movie_reducer';
import directors from './movie_reducer';

const rootReducer = combineReducers({
    movies, directors
})
export default rootReducer;