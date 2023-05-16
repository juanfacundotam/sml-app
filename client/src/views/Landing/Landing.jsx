import React from 'react';
import style from './Landing.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Nav from '../../components/Nav/Nav';
import objeto from './test';

function Landing() {
	const { isAuthenticated, user } = useAuth0();
	const location = useLocation();
	const userdb = objeto;
	const url = 'https://example.com/roles';
	console.log(userdb[0].rol);
	return (
		<div className={style.container}>
			{(isAuthenticated || location.state?.fromLogin) && (
				<>
					<Nav />
					{user[url][0] === 'c-level' || userdb[0].rol === user[url][0] ? (
						<div className='flex flex-col gap-5'>
							<h1>Bienvenido {user.name} </h1>
							<Link
								to='/employees'
								className={style.linksRoutes}>
								Lider-Dashboard
							</Link>
							<Link
								to='/employees/analytics'
								className={style.linksRoutes}>
								Lider-Analytics
							</Link>
							<Link
								to='/corredores'
								className={style.linksRoutes}>
								Corredores-Dashbord
							</Link>
							<Link
								to='/corredores/analytics'
								className={style.linksRoutes}>
								Corredores-Analytics
							</Link>
							<Link
								to='/analytics'
								className={style.linksRoutes}>
								Analytics
							</Link>
							<Link
								to='/vendedores'
								className={style.linksRoutes}>
								VendedoresDashboard
							</Link>
							<Link
								to='/vendedores/analytics'
								className={style.linksRoutes}>
								VendedoresAnalytics
							</Link>
						</div>
					) : (
						<div>
							<h1>Bienvenido {user.name} </h1>
							<Link
								to='/corredores'
								className={style.linksRoutes}>
								Corredores-Dashbord
							</Link>
							<Link
								to='/corredores/analytics'
								className={style.linksRoutes}>
								Corredores-Analytics
							</Link>
							<Link
								to='/corredores'
								className={style.linksRoutes}>
								Corredores-Dashbord
							</Link>
							<Link
								to='/corredores/analytics'
								className={style.linksRoutes}>
								Corredores-Analytics
							</Link>
						</div>
					)}
				</>
			)}
		</div>
	);
}

export default Landing;
