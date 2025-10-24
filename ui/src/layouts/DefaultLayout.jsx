import { Link, Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function DefaultLayout() {
    return (
        <>
            <div>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Outlet />
                </main>
            </div >
        </>
    )
}