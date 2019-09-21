import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import Header from "./component/Header";
import Form from "./component/Form";
import Table from "./component/Table";

import "./bootstrap.min.css";
import "./App.css";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: "",
			apiStatus: true
		};
	}

	getLatLng = (address, api) => {
		let url = `https://maps.google.com/maps/api/geocode/json?address=${address}=&key=${api}`;
		axios
			.get(url)
			.then(res => {
				console.log(res.data);
				this.setState({
					results: res.data
				});

				if (typeof res.data.error_message !== "undefined") {
					this.setState({
						apiStatus: false
					});
				} else {
					Cookies.set("api", api);
				}
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		return (
			<div className="App">
				<Header />
				<Form
					getAddress={this.getLatLng}
					apiStatus={this.state.apiStatus}
				/>
				<Table results={this.state.results} />
			</div>
		);
	}
}
