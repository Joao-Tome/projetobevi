import { Navbar, Nav, Container } from "react-bootstrap"
import "../stylesheet/NavBar.css"
import { Outlet } from "react-router-dom"

function NavBar(){
    return (
    <>
        <Navbar expand="sm" className="navbar-color">
            <Container>
            <Navbar.Brand href="#home">Projeto Teste Bevi</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" navbarScroll>
                        <Nav.Link>
                            Home
                        </Nav.Link>
                        <Nav.Link>
                            Produto
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
}

export default NavBar