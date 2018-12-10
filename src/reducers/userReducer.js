export default (state = [], action ) => {
	switch ( action.type ) {
		case 'FETCH_USER':
			return [...state, action.payload]; // userReducer now retruns a new array that is response.data added to the state array. 
		default:
			return state;
	}
};