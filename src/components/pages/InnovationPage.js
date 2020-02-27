import React from 'react';
import { MDBRow } from 'mdbreact';
import HeaderSection from './sections/HeaderSection'
import SocialCardSection from './sections/SocialCardSection';
import FooterSection from './sections/FooterSection';

const DashboardPage = () => {
  return (
    <React.Fragment>
      <MDBRow className="mb-4">
        <HeaderSection />
        <SocialCardSection />
        <FooterSection />
      </MDBRow>
    </React.Fragment>
  )
}

export default DashboardPage;