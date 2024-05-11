import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"


function PaginaBase(){
    return(
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}

export default PaginaBase