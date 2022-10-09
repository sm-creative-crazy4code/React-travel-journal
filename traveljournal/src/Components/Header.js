import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <div className="coustum_nav">
        
      <Navbar className="coustum_nav" bg="dark" variant="dark">
        <Container style={{textaling:"center"}}>
          <Navbar.Brand href="/home" style={{textaling:"center"}} >
            <img
              alt=""
              src="./imgs/location-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Travel-journal
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
// 