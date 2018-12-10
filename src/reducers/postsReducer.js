export default (state = [], action) => {
	switch (action.type) {
		case'FETCH_POSTS':
			return action.payload; //action.payload = response.data so... postsReducer = response.data
	default: 
		return state;
	}
};

