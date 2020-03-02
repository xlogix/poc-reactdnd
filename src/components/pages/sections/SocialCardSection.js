import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { MDBContainer, MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import DatePicker from './DatePickerSection'

class SocialCardSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: [
				{ id: 0, name: "Problem", value: true },
				{ id: 1, name: "Solution", value: false },
				{ id: 2, name: "Team", value: true },
				{ id: 3, name: "Ecosystem", value: false },
			],
		};
	}

	handleRadioChange = (index ) => {
		const { cards } = this.state;
		cards[index].value = !cards[index].value
		this.setState({
			cards
		});
	}

	handleDragStart = (id, event) => {
		let fromBox = JSON.stringify({ id});
		event.dataTransfer.setData("dragContent", fromBox);
	};

	handleDragOver = (id, event)=> {
		event.preventDefault(); // Necessary. Allows us to drop.
		return false;
	};

	/* Fired when an element or text selection is dropped on a valid drop target */
	/* The event is fired on the drop target(s) */
	handleDrop = (id, event) => {
		event.preventDefault();

		let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
		let toBox = { id };

		this.swapBoxes(fromBox, toBox);
		return false;
	};

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

		if (fromIndex !== -1 && toIndex !== -1) {
			let { fromId, ...fromRest } = cards[fromIndex];
			let { toId, ...toRest } = cards[toIndex];
			cards[fromIndex] = { id: fromBox.id, ...toRest };
			cards[toIndex] = { id: toBox.id, ...fromRest };

			this.setState({ cards: cards });
		}
	};

	makeBoxes = () => {
		return this.state.cards.map((card, index) => (
			<MDBRow id={card.id} className="mb-12 row-padding" draggable="true"
				onDragStart={(e) => this.handleDragStart(card.id, e)} onDragOver={(e) =>this.handleDragOver(card.id, e)}
				onDrop={(e)=>this.handleDrop(card.id, e)}>
				<MDBCol md="1" className="d-flex align-self-center">
					<Grid container justify="space-around">
						<MDBIcon className="drag-padding" icon="grip-lines" />
						<MDBInput checked={card.value} onClick={ ()=> this.handleRadioChange(index) } type="radio" id="radio1" />
					</Grid>
				</MDBCol>
				<MDBCol>
					<MDBCard md="6" className="classic-admin-card d-flex align-self-center">
						<MDBCardBody>
							<h4 className="black-text"><strong>{card.name}</strong></h4>
							<div className="text-right">
								<MDBIcon icon="money-bill-alt" size="5x" className="primary-color" />
							</div>
							<p className="blue-text">view builder</p>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
				<MDBCol id="date" md="5" className="d-flex align-self-center">
					{card.value ? <DatePicker /> : null}
				</MDBCol>
			</MDBRow>
		));
	};

	render() {
		return (
			<MDBContainer fluid className="border border-light">
				<Grid container justify="space-around">
					<h4 className="headings"><strong>Social Innovation</strong></h4>
					<h4 className="headings align-center">Select all</h4>
					<h4 className="headings align-right">Due Date (Optional)</h4>
				</Grid>

				<div>{this.makeBoxes()}</div>;

			</MDBContainer >
		);
	}
}

export default SocialCardSection;
