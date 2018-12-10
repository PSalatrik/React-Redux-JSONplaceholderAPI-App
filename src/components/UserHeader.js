import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

 
class UserHeader extends Component { //has props from both mstp and passed form post_list <UserHeader userId={post.userId} the later is from the /posts endpoint

	componentDidMount() {
		this.props.fetchUser(this.props.userId); 
	}
	render() {

		//destructure this.props.user;
		const { user } = this.props;

		if ( !user ) {
			return null;
		}

		return <div className="header">{user.name}</div>;
	};
}

const mapStateToProps = (state, ownProps) => {
	return { user: state.users.find( (user)=> user.id === ownProps.userId) };
};

export default connect( mapStateToProps, { fetchUser }) (UserHeader);