import { Link, Outlet } from "react-router";

export default function DefaultLayout() {
    return (
        <>
            <div>
                <header>
                    <nav>
                        <Link to="/">Home</Link >
                        <Link to="/about">About</Link >
                    </nav>
                </header>
                <main>
                    <Outlet />
                </main>
            </div >
        </>
    )
}