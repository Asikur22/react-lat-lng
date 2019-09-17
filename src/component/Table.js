import React, { Component } from "react";

export default class Table extends Component {
	render() {
		let { results } = this.props;
		if (results.status === "OK") {
			let {
				results: {
					0: {
						formatted_address: address,
						geometry: {
							location: { lat, lng }
						}
					}
				}
			} = results;
			return (
				<div className="container">
					<div className="alert alert-info" role="alert">
						<div className="table-responsive">
							<table className="table table-bordered mb-0">
								<tbody>
									<tr>
										<th>Address:</th>
										<td>{address}</td>
									</tr>
									<tr>
										<th>Latitude:</th>
										<td>{lat}</td>
									</tr>
									<tr>
										<th>Longitude:</th>
										<td>{lng}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			);
		} else if (results.error_message) {
			return (
				<div className="container">
					<div
						className="alert alert-danger alert-dismissible fade show"
						role="alert">
						{results.error_message}
					</div>
				</div>
			);
		} else {
			return React.Fragment;
		}
	}
}
