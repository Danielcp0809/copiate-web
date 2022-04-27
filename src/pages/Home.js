import { faMapMarkerAlt, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import landingImage from "../assets/images/landing.jpg";
import logo from "../assets/images/logo.png"
import "../styles/Home.css";

const Home = () => {
	return (
		<div className="home">
			<div></div>
			<div className="image-container">
				<img className="image" src={landingImage} alt="landing" />
			</div>
			<div className="information">
                <img src={logo} alt=""/>
				<h1>Servicio Técnico</h1>
				<p>
					No te preocupes!, Nuestro técnicos expertos solucionarán tu problema,
					<br />
					Chatea con nosotros!
				</p>
                <div className="info-card">
                    <div>
                        <p>Para más información llámanos</p>
                        <label>+593 990 489 029</label>
                    </div>
                    <FontAwesomeIcon
                        icon={faMobileAlt}
                        style={{
                            height: 50,
                            marginLeft: 10
                        }}
                    />
                </div>
                <div className="info-card" style={{marginTop: 20}}>
                    <div>
                        <p>Serapio Japerabi s12 y <br/> Juan Camacaro</p>
                    </div>
                    <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        style={{
                            height: 50,
                            marginLeft: 10
                        }}
                    />
                </div>
			</div>
		</div>
	);
};

export default Home;
