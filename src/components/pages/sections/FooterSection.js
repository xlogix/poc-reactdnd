import React from 'react';
import { MDBContainer, MDBBtn } from 'mdbreact';
import Grid from '@material-ui/core/Grid';

const FooterSection = () => {
	return (
		<MDBContainer fluid>
			<Grid container justify="flex-end">
				<MDBBtn outline color="blue" tag="a" href="#" target="_blank">Cancel</MDBBtn>
				<MDBBtn color="blue" tag="a" href="#" target="_blank">Use this builder schedule</MDBBtn>
			</Grid>
		</MDBContainer>
	);
}

export default FooterSection;