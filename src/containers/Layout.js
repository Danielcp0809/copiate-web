import React from "react";
import "../styles/Layout.css";
import logo from "../assets/images/logo.png"

const Layout = (props) => {
	return (
		<div className="layout">
			<div className="mobile-header">
                <img src={logo} alt="Copiate"/>
            </div>
			{props.children}
		</div>
	);
};

export default Layout;
