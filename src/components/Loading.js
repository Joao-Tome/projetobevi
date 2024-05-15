import  Container  from "react-bootstrap/Container";
import ReactLoading from "react-loading"
import "../stylesheet/Loading.css"

function Loading({isLoading}){
    if (!isLoading) {
       return (<></>)
    }
    return(
        <>
            <Container fluid className="loading-container">
                <ReactLoading type="spinningBubbles" color="#FFF" height={200} width={250} />
            </Container> 
        </>
    )
}
        
export default Loading;