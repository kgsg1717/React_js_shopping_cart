import { combineReducers } from 'redux';
import basketReduce from './basketReducer';

export default combineReducers({

        basketState:basketReduce

});