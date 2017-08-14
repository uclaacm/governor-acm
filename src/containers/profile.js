import React from 'react';
import {connect} from 'react-redux';
import {replace} from 'react-router-redux';

import {Action} from 'reducers';
import ProfileComponent from 'components/Profile';

import moment from 'moment';

class Profile extends React.Component {
	constructor(props) {
		super(props);
	}

	saveChanges(newprofile) {
		this.props.updateUser(newprofile);
	}

	componentWillMount() {
		if (this.props.isAdmin) {
			return this.props.redirectHome();
		}
		if (this.props.authenticated) {
			this.props.fetchUser();
			this.props.fetchActivity();
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.isAdmin) {
			return nextProps.redirectHome();
		}
		if (nextProps.updated){
			setTimeout(() => {
				this.props.updateDone();
			}, 1000);
		}
	}

	render() {
		return <ProfileComponent
			profile={this.props.profile}
			updated={this.props.updated}
			updateSuccess={this.props.updateSuccess}
			updateError={this.props.updateError}
			saveChanges={this.saveChanges.bind(this)}
			logout={this.props.logout}
			activities={this.props.activities}
			errorActivity={this.props.errorActivity}
		/>;
	}
}

const mapStateToProps = (state)=>{
	let profile = { name: "", major: "", year: 0, points: 0};

	if (state.User.get("fetchSuccess")) {
		const User = state.User.get("profile");
		profile.name = `${User.firstName} ${User.lastName}`;
		profile.major = User.major;
		profile.year = User.year;
		profile.points = User.points;
	}

	let activities = state.User.get('activity');
	for(let i = 0; i < activities.length; i++){
		let k = activities[i];
		k.date = moment(k.date);
	}

	return {
		profile,
		fetchSuccess : state.User.get('fetchSuccess'),
		updated: state.User.get('updated'),
		updateSuccess: state.User.get('updateSuccess'),
		updateError: state.User.get('error'),
		authenticated: state.Auth.get("authenticated"),
		isAdmin: state.Auth.get('isAdmin'),
		activities,
		errorActivity: state.User.get('errorActivity'),
	};
};

const mapDispatchToProps = (dispatch)=>{
	return {
		fetchUser: () => {
			dispatch(Action.FetchUser());
		},
		updateUser: newprofile => {
			dispatch(Action.UpdateUser(newprofile))
		},
		redirectHome: () => {
			dispatch(replace('/'));
		},
		updateDone: () => {
			dispatch(Action.UserUpdateDone());
		},
		logout: () => {
			dispatch(Action.LogoutUser());
		},
		fetchActivity: ()=>{
			dispatch(Action.FetchActivity());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
