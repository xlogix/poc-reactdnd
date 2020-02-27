import React, { Component } from "react";
import { MDBInput } from "mdbreact";

class RadioButton extends Component {
    state = {
        radio: 2
    }

    onClick = nr => () => {
        this.setState({
            radio: nr
        });
    }

    render() {
        return (
            <MDBInput onClick={this.onClick(1)} checked={this.state.radio === 1 ? true : false} type="radio"
                id="radio1" />
        );
    }
}

export default RadioButton;