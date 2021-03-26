import React from "react";
import { Link } from "react-router-dom";
import Richie from "../../Assets/richie.png";
import "./style.scss";

const NotFoundPage = () => {
	setTimeout(() => {
		window.location.href = "/";
	}, 5000);

	return (
		<div className="not-found-page">
			<h1 className="not-found-status">404</h1>
			<img className="homepage-icon" src={Richie} alt="Homepage Icon" />
			<p>
				<Link className="description" to="/">
					<p>Ana sayfaya dön</p>
				</Link>
			</p>
		</div>
	);
}

export default NotFoundPage;
