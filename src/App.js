import React, { Component } from "react";
import axios from "axios";

import Header from "./component/Header";
import Form from "./component/Form";
import Table from "./component/Table";

import "./bootstrap.min.css";
import "./App.css";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: ""
		};
	}

	getLatLng = (address, api) => {
		// AIzaSyBS-H0BgaS8NlqjGC-zyAtEofZMfyo_0As
		let url = `https://maps.google.com/maps/api/geocode/json?address=${address}=&key=${api}`;
		axios
			.get(url)
			.then(res => {
				this.setState({
					results: res.data
				});
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		return (
			<div className="App">
				<Header />
				<Form getAddress={this.getLatLng} />
				<Table results={this.state.results} />
			</div>
		);
	}
}
