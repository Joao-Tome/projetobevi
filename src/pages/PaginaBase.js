import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"


function PaginaBase(){
    return(
        <>
            <NavBar/>
            {/* Outlet: Carrega as outras paginas aonde esta o outlet. do react-router-dom */}
            <Outlet/>
        </>
    )
}

export default PaginaBase