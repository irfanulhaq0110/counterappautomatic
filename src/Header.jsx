import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
   <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn.dribbble.com/users/28315/screenshots/1791922/sp.gif"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Counter APP
          </Navbar.Brand>
        </Container>
      </Navbar>
   
   
   
   
   </>
  )
}

export default Header