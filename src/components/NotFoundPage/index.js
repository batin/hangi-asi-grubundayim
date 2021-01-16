import React from "react";
import { Link } from "react-router-dom";
import Richie from "../../Assets/richie.png";

import style from "./style.module.scss";

function NotFoundPage() {
	 setTimeout(function () {
			window.location.href = "/";
		}, 5000);
	return (
		<div className={style.NotFoundPage}>
			<h1 className={style.notFoundStatus}>404</h1>
			<img className="homepage-icon" src={Richie} alt="Homepage Icon" />
			<p>
				<Link className={style.desc} to="/">
					<p>Ana sayfaya dön</p>
				</Link>
			</p>
		</div>
	);
}

export default NotFoundPage;
