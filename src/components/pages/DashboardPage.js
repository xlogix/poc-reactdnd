import React from 'react';
import { MDBRow } from 'mdbreact';
import HeaderSection from './sections/HeaderSection'
import CardSection from './sections/CardSection';
import FooterSection from './sections/FooterSection';

const DashboardPage = () => {
  return (
    <React.Fragment>
      <MDBRow className="mb-4">
        <HeaderSection />
        <CardSection />
        <FooterSection />
      </MDBRow>
    </React.Fragment>
  )
}

export default DashboardPage;