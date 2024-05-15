import { useRouteError } from "react-router-dom"
import Container from "react-bootstrap/Container";

function ErrorPage(){
    //Pega o erro da pagina por aqui, do React-router-dom
    const error = useRouteError();

    return(
        <>
        <Container id="error-page" className="text-center">
            <h1>Opa!</h1>
            <p>Um erro aconteceu, segue os detalhes:</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </Container>
        </>
    )
}

export default ErrorPage