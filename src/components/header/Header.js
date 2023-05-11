import React from "react";
import logo from '../images/logo.png';
import classes from "./Header.module.css";
import {Link} from 'react-router-dom'
const Header = (props) => {
    const submitHandler =(e) => {
        e.preventDefault();
        props.onSearch(e.target.search.value);
    }
    return <nav class={classes.nav}>
    <p className={`navbar-brand ${classes.nav_icon}`} href="/">
        <img src={logo} alt="logo"/>
    </p>
    <ul className={classes.nav_list}>
        <li className={classes.lii}>
            <Link className={classes.nav_link} to="/">Home</Link>
        </li>
        <li className={classes.lii}>
            <Link className={classes.nav_link} to="/thongke">Thống kê</Link>
        </li>
    </ul>
    {props.isShowForm && <form className={classes.form} onSubmit={submitHandler}>
        <input name="search" id="search" className={classes.form_input} type="text" placeholder="Nhập tên nước..."></input>
        <button type="submit" className={classes.form_button}>Tra cứu</button>
    </form>}
    </nav>
}
export default Header;