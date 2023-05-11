import React from 'react';
import style from './Landing.module.css';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';

function Landing() {
	return (
		<div className={style.container}>
			<Nav />
			<div>
				<h1>SML VIEWS</h1>
				<Link
					to='/employees'
					className={style.linksRoutes}>
					Employees
				</Link>
				<Link
					to='/analytics'
					className={style.linksRoutes}>
					Analytics
				</Link>
				<Link
					to='/login'
					className={style.linksRoutes}>
					Login
				</Link>
			</div>
		</div>
	);
}

export default Landing;
