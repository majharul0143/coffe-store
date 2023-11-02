import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar";

export default function Layout(){
    return(
        <div>
            this is layout
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}