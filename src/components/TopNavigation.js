import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem } from 'mdbreact';
class TopNavigation extends Component {
	state = {
		collapse: false
	}

	onClick = () => {
		this.setState({
			collapse: !this.state.collapse,
		});
	}

	toggle = () => {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	render() {
		return (
			<MDBNavbar className="flexible-navbar" light expand="md" scrolling>
				<MDBNavbarToggler onClick={this.onClick} />
				<MDBCollapse isOpen={this.state.collapse} navbar>
					<MDBNavbarNav>
						<MDBNavItem>
							<a rel="noopener noreferrer" className="nav-link Ripple-parent" href="/">All</a>
						</MDBNavItem>
						<MDBNavItem>
							<a rel="noopener noreferrer" className="nav-link Ripple-parent" href="/">Templates</a>
						</MDBNavItem>
						<MDBNavItem>
							<a className="nav-link Ripple-parent" href="/innovation">
								Social Innovation</a>
						</MDBNavItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>
		);
	}
}

export default TopNavigation;