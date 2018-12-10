import { combineReducers } from 'redux';
import postsReducer  from './postsReducer.js';
import userReducer from './userReducer.js';

export default combineReducers({
	posts: postsReducer, 
	users: userReducer
// remember that postsReducer returns response.data and has been added here as the value of the posts key wich is now a property of state. i.e: state.posts
// remember tgat userReducer returns  a new array from the existing state/store [...state, action.payload] and is now a new key: value object
//of state so you can call state.users and map it to props.
});