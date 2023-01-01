import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import {TiShoppingCart} from "react-icons/ti"
import { getByDisplayValue } from '@testing-library/react';
import { Container } from 'react-bootstrap';

export default function NavbarOne() {
  const [showNavCentred, setShowNavCentred] = useState(false);

  return (
    <div style={{backgroundColor: "#D7E9B9"}}>
   <Container >
    <MDBNavbar sticky expand='lg' light  style={{minHeight: "70px", backgroundColor: "#D7E9B9"}}>
      <MDBContainer fluid style={{maxWidth: "1500px"}}>
        <MDBNavbarBrand href='#'>
            <h2 className='logo'># HASHTAG</h2>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarCenteredExample'
          aria-controls='navbarCenteredExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavCentred(!showNavCentred)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavCentred} className="justify-content-end" center>
          <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0' >
            <MDBNavbarLink  className="nav-linkss" href='#'>Home</MDBNavbarLink>
            <MDBNavbarLink className="nav-linkss" href='#'>About</MDBNavbarLink>
            <MDBNavbarLink className="nav-linkss" href='#'>Contact</MDBNavbarLink>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><TiShoppingCart size="30" style={{cursor: "pointer"}}/></div>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </Container>
    </div>
  );
}