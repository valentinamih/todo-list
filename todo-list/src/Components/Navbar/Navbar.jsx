import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = (props) => {
    return <div className={style.navbar}>
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/main" activeClassName ={style.active}>Main</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/list" activeClassName={style.active}>List</NavLink>
            </div>
        </nav>
    </div>
}