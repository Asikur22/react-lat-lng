import React, { Component } from "react";
import Cookies from "js-cookie";

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			address: "",
			apiStatus: this.props.apiStatus,
			api: Cookies.get("api") ? Cookies.get("api") : "",
			error: "",
			results: ""
		};
		this.errormessage = (
			<div className="invalid-feedback" style={{ display: "block" }}>
				Both Fields are required!
			</div>
		);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.apiStatus !== this.props.apiStatus) {
			if (this.props.apiStatus !== true) {
				this.setState({
					api: "",
					apiStatus: false
				});
			}
		}
	}

	onChangeInput = event => {
		let { value } = event.target;

		this.setState({
			[event.target.name]: value
		});

		if (value.length === 0) {
			this.setState({ error: this.errormessage });
		} else {
			this.setState({ error: "" });
		}
	};

	onSubmitForm = event => {
		event.preventDefault();

		let address = this.state.address;
		let api = this.state.api;
		if (address.length > 0 && api.length > 0) {
			this.setState({ error: "" });

			let place = encodeURI(address);
			this.props.getAddress(place, api);

			this.setState({
				address: ""
			});
		} else {
			this.setState({ error: this.errormessage });
		}
	};

	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<p>
						Plz type your Google Map API Key and Address then hit
						enter to get location details. Get a Google API Key{" "}
						<a
							className="text-info"
							target="_blank"
							rel="noopener noreferrer"
							href="https://developers.google.com/maps/documentation/javascript/get-api-key">
							Here
						</a>
					</p>
					<form className="form-inline" onSubmit={this.onSubmitForm}>
						<input
							className="form-control mr-sm-2"
							type="text"
							name="api"
							placeholder="Google Map API..."
							aria-label="Google Map API"
							onChange={this.onChangeInput}
							value={this.state.api}
							autoComplete="on"
						/>
						<input
							className="form-control mr-sm-2"
							type="text"
							name="address"
							placeholder="Address..."
							aria-label="Address"
							onChange={this.onChangeInput}
							value={this.state.address}
						/>
						<input
							className="btn btn-info my-2 my-sm-0 px-5"
							value="Find"
							type="submit"
						/>
						{this.state.error}
					</form>
				</div>
			</div>
		);
	}
}
