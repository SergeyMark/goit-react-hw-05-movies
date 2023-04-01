import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";

import css from './Layout.module.css';

const Layout = () => {
    return(
        <>
            <header className={css.NavHeader}>
                <nav>
                    <ul className={css.ListHeader}>
                        <li><NavLink className={css.ItemHeader} to="/">Home</NavLink></li>
                        <li><NavLink className={css.ItemHeader} to="/movie">Movies</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet/>
                </Suspense>
            </main>
        </>
    )
} 

export default Layout;