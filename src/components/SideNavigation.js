import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
	return (
		<div className="sidebar-fixed position-fixed">
			<hr />
			<MDBListGroup className="list-group-flush">
				<NavLink exact={true} to="/" activeClassName="activeClass">
					<MDBListGroupItem>
						<MDBIcon icon="chart-pie" className="mr-3" />
						All
					</MDBListGroupItem>
				</NavLink>

				<MDBListGroupItem>
					<MDBIcon icon="money-bill" className="mr-3" />
					Templates
				</MDBListGroupItem>

				<NavLink to="/innovation" activeClassName="activeClass">
					<MDBListGroupItem>
						<MDBIcon icon="user" className="mr-3" />
						Social Innovation
        	</MDBListGroupItem>
				</NavLink>
			</MDBListGroup>
		</div>
	);
}

export default TopNavigation;