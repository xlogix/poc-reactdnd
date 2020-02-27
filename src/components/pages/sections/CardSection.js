import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { MDBContainer, MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import RadioButton from '../../RadioButton'
import DatePicker from './DatePickerSection'

class CardSection extends Component {
  state = {
    radio: 2
  }

  onClick = nr => () => {
    this.setState({
      radio: nr
    });
    if (this.state.radio === 1) {
      document.getElementById('date').style.display = 'block';
      
    }
  }

  render() {
    return (
      <MDBContainer fluid className="border border-light">
        <Grid container justify="space-around">
          <h4 className="headings"><strong>Ideation</strong></h4>
          <h4 className="headings align-center">Select all in ideation</h4>
          <h4 className="headings align-right">Due Date (Optional)</h4>
        </Grid>

        <MDBRow id="" className="mb-12 row-padding">
          <MDBCol md="1" className="d-flex align-self-center">
            <MDBInput onClick={this.onClick(1)} checked={this.state.radio === 1 ? true : false} type="radio"
              id="radio1" />
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
            <DatePicker />
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-12 row-padding">
          <MDBCol md="1" className="d-flex align-self-center">
            <RadioButton />
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
            <DatePicker />
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-12 row-padding">
          <MDBCol md="1" className="d-flex align-self-center">
            <RadioButton />
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
            <DatePicker />
          </MDBCol>
        </MDBRow>
        <Grid container justify="space-around">
          <h4 className="headings"><strong>Validation</strong></h4>
          <h4 className="headings align-center">Select all in validation</h4>
          <h4 className="headings align-center"></h4>
        </Grid>

        <MDBRow className="mb-12">
          <MDBCol md="1" className="d-flex align-self-center">
            <RadioButton />
          </MDBCol>
          <MDBCol>
            <MDBCard md="6" className="classic-admin-card d-flex align-self-center">
              <MDBCardBody>
                <h4 className="black-text"><strong>Problem</strong></h4>
                <div className="text-right">
                  <MDBIcon icon="chart-line" size="5x" className="primary-color" />
                </div>
                <p className="blue-text">view builder</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="5" className="d-flex align-self-center">
            <DatePicker />
          </MDBCol>
        </MDBRow>
      </MDBContainer >
    );
  }
}

export default CardSection;

