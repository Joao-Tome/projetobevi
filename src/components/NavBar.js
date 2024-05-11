import { Navbar, Nav, Container } from "react-bootstrap"
import "../stylesheet/NavBar.css"
import { Link } from "react-router-dom"

function NavBar(){
    return (
    <>
        <Navbar className="navbar-color">
            <Container>
                <Navbar.Brand >
                    <Link to={`/`} className="nav-link">
                        Projeto Teste Bevi
                    </Link>
                </Navbar.Brand>
                    <Nav className="me-auto" navbarScroll>
                        <Nav.Link>
                            <Link to={`/`} className="nav-link">
                                Home
                            </Link> 
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={`/Produto`} className="nav-link">
                                Produto
                            </Link>
                        </Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    </>
    )
}

export default NavBar