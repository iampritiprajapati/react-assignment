import {Link, Outlet} from "react-router-dom";
import React from 'react';
function Layout(){
return(
    <div>
        <Link to="Layout">Layout</Link> <br/>
            <Link to="Home">Home</Link> <br/>
            <Link to="About">About</Link> <br/>
            <Link to="Register">Register</Link> <br/>
            <Link to="Login">Login</Link> <br/>
            <Link to="Contact">Contact</Link> <br/>
            <Link to="NotFound">NotFound</Link> <br/>
            <Link to="Admin">Admin</Link> <br/>
            <Link to="Aboutus">Aboutus</Link> <br/>
            <Link to="CheckBoxe">ChechBoxe</Link> <br/>
            <Link to="Hello">Hello</Link> <br/>
            <Link to="View">Table</Link><br/>
            <Link to="Post">Post</Link><br/>
            <Link to="Map">Map</Link><br/>
            <Link to="WeatherComponent">WeatherComponent</Link> <br/>
            <Link to="WeatherComponentStatic">WeatherComponentStatic</Link> <br/>
            <Link to="Weathercs">Weathercs</Link> <br/>
            <Link to="Log">Log</Link> <br/>
            <a href="Layout">Layout</a> <br/>
            <a href="Home">Home</a> <br/>
            <a href="About">About</a> <br/>
            <a href="Register">Register</a> <br/>
            <a href="Loginr">Login</a> <br/>
            <a href="Contact">Contact</a> <br/>
            <a href="NotFound">NotFound</a> <br/>
            <a href="Admin">Admin</a> <br/>
            <a href="Aboutus">Aboutus</a> <br/>
            <a href="CheckBoxe">CheckBoxe</a> <br/>
            <a href="Hello">Hello</a> <br/>
            <a href="View">Table</a> <br/>
            <a href="Post">Post</a><br/>
            <a href="Map">Map</a> <br/>
            <a href="WeatherComponent">WeatherComponent</a> <br/>
            <a href="WeatherComponentStatic">WeatherComponentStatic</a> <br/>
            <a href="Weathercs">Weathercs</a> <br/>
            <a href="Log">Log</a> <br/>
            <Outlet/>
            </div>  );
}
export default Layout; 