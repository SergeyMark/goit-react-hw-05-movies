import { NavLink } from "react-router-dom";

export const Layout = () => {
    return(
        <>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/movie">Movies</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main></main>
        </>
    )
} 