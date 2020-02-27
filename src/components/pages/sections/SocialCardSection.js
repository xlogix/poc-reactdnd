import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { MDBContainer, MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import DatePicker from './DatePickerSection'

class SocialCardSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: [
				{ id: 1, name: "Problem" },
				{ id: 2, name: "Solution" },
				{ id: 3, name: "Team" },
				{ id: 4, name: "Ecosystem" },
			],
			radioModel: [
				{ value: true },
				{ value: false },
				{ value: false },
				{ value: false }
			],
		};
	}

	radioButtonChange = (ev, index) => {
		const checkboxes = this.state.radioModel.slice(0);
		const newItem = {
			...checkboxes[index],
			value: ev.target.checked
		};

		checkboxes.splice(index, 1, newItem);

		this.setState({
			radioModel: checkboxes
		});
	}

	swapBoxes = (fromBox, toBox) => {
		let cards = this.state.cards.slice();
		let fromIndex = -1;
		let toIndex = -1;

		for (let i = 0; i < cards.length; i++) {
			if (cards[i].id === fromBox.id) {
				fromIndex = i;
			}
			if (cards[i].id === toBox.id) {
				toIndex = i;
			}
		}

		if (fromIndex != -1 && toIndex != -1) {
			let { fromId, ...fromRest } = cards[fromIndex];
			let { toId, ...toRest } = cards[toIndex];
			cards[fromIndex] = { id: fromBox.id, ...toRest };
			cards[toIndex] = { id: toBox.id, ...fromRest };

			this.setState({ cards: cards });
		}
	};

	handleDragStart = data => event => {
		let fromBox = JSON.stringify({ id: data.id });
		event.dataTransfer.setData("dragContent", fromBox);
	};

	handleDragOver = data => event => {
		event.preventDefault(); // Necessary. Allows us to drop.
		return false;
	};

	/* Fired when an element or text selection is dropped on a valid drop target */
	/* The event is fired on the drop target(s) */
	handleDrop = data => event => {
		event.preventDefault();

		let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
		let toBox = { id: data.id };

		this.swapBoxes(fromBox, toBox);
		return false;
	};

	render() {
		return (
			<MDBContainer fluid className="border border-light">
				<Grid container justify="space-around">
					<h4 className="headings"><strong>Social Innovation</strong></h4>
					<h4 className="headings align-center">Select all</h4>
					<h4 className="headings align-right">Due Date (Optional)</h4>
				</Grid>

				<MDBRow id="1" className="mb-12 row-padding" draggable="true">
					<MDBCol md="1" className="d-flex align-self-center">
						<Grid container justify="space-around">
							<MDBIcon className="drag-padding" icon="grip-lines" />
							<MDBInput onClick={(ev) => this.radioButtonChange(ev, 0)}
								checked={this.state.radioModel[0].value} type="radio" id="radio1" />
						</Grid>
					</MDBCol>
					<MDBCol>
						<MDBCard md="6" className="classic-admin-card d-flex align-self-center">
							<MDBCardBody>
								<h4 className="black-text"><strong>Problem</strong></h4>
								<div className="text-right">
									<MDBIcon icon="money-bill-alt" size="5x" className="primary-color" />
								</div>
								<p className="blue-text">view builder</p>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
					<MDBCol id="date" md="5" className="d-flex align-self-center">
						{this.state.radioModel[0].value ? <DatePicker /> : null}
					</MDBCol>
				</MDBRow>

				<MDBRow id="2" className="mb-12 row-padding" draggable="true">
					<MDBCol md="1" className="d-flex align-self-center">
						<Grid container justify="space-around">
							<MDBIcon className="drag-padding" icon="grip-lines" />
							<MDBInput checked={this.state.radioModel[1].value} type="radio"
								id="radio2" onClick={(ev) => this.radioButtonChange(ev, 1)} />
						</Grid>
					</MDBCol>
					<MDBCol>
						<MDBCard md="6" className="classic-admin-card d-flex align-self-center">
							<MDBCardBody>
								<h4 className="black-text"><strong>Solution</strong></h4>
								<div className="text-right">
									<MDBIcon icon="chart-pie" size="5x" className="primary-color" />
								</div>
								<p className="blue-text">view builder</p>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
					<MDBCol md="5" className="d-flex align-self-center">
						{this.state.radioModel[1].value ? <DatePicker /> : null}
					</MDBCol>
				</MDBRow>

				<MDBRow id="3" className="mb-12 row-padding" draggable="true">
					<MDBCol md="1" className="d-flex align-self-center">
						<Grid container justify="space-around">
							<MDBIcon className="drag-padding" icon="grip-lines" />
							<MDBInput checked={this.state.radioModel[2].value} type="radio"
								id="radio3" onClick={(ev) => this.radioButtonChange(ev, 2)} />
						</Grid>
					</MDBCol>
					<MDBCol>
						<MDBCard md="6" className="classic-admin-card d-flex align-self-center">
							<MDBCardBody>
								<h4 className="black-text"><strong>Team</strong></h4>
								<div className="text-right">
									<MDBIcon icon="chart-line" size="5x" className="primary-color" />
								</div>
								<p className="blue-text">view builder</p>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
					<MDBCol md="5" className="d-flex align-self-center">
						{this.state.radioModel[2].value ? <DatePicker /> : null}
					</MDBCol>
				</MDBRow>

				<MDBRow id="4" className="mb-12 row-padding" draggable="true">
					<MDBCol md="1" className="d-flex align-self-center">
						<Grid container justify="space-around">
							<MDBIcon className="drag-padding" icon="grip-lines" />
							<MDBInput checked={this.state.radioModel[3].value} type="radio"
								id="radio4" onClick={(ev) => this.radioButtonChange(ev, 3)} />
						</Grid>
					</MDBCol>
					<MDBCol>
						<MDBCard md="6" className="classic-admin-card d-flex align-self-center">
							<MDBCardBody>
								<h4 className="black-text"><strong>Ecosystem</strong></h4>
								<div className="text-right">
									<MDBIcon icon="chart-line" size="5x" className="primary-color" />
								</div>
								<p className="blue-text">view builder</p>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
					<MDBCol md="5" className="d-flex align-self-center">
						{this.state.radioModel[3].value ? <DatePicker /> : null}
					</MDBCol>
				</MDBRow>
			</MDBContainer >
		);
	}
}

export default SocialCardSection;
