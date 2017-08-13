import React from 'react';
import Config from 'config';

import Button from 'components/Button';

export default class ResetPassCard extends React.Component {
	constructor(props) {
		super(props);
		this.email = '';
		this.handleChange = this.handleChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	handleChange(e) {
		this.email = e.target.value;
	}

	submitForm(e) {
		e.preventDefault();
		this.props.onSubmit(this.email);
	}

	render() {
		return (
			<div className="card details-card">
				<p className="question">Forgot your password?</p>
				<div className="inner">
					<form onSubmit={this.submitForm} autoComplete="off">
						<div className="email">
							<p className="text">Enter your email address <span className="info">(@ucla.edu)</span></p>
							<input type="text" className="input-large" name="email" onChange={this.handleChange}></input>
						</div>
						<Button className="btn" style="blue" text="Reset Password" onClick={this.submitForm}/>
					</form>
				</div>
			</div>
		);
	}
}