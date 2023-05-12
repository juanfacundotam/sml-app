import { useAuth0 } from '@auth0/auth0-react';
import style from './Login.module.css';
import { validate } from '../../components/Login/Form/validation';
import { Link } from 'react-router-dom';

function Login() {
	const { loginWithRedirect, isAuthenticated } = useAuth0();

	const handleFormLogin = async (userData) => {
		const errors = validate(userData);
		const hasErrors = Object.values(errors).some((error) => error !== '');

		if (hasErrors) {
			// Mostrar errores de validación al usuario o realizar alguna acción adicional
			console.log('Errores de validación:', errors);
		} else {
			try {
				// Lógica para autenticar con el formulario
				// Realizar la solicitud al servidor para verificar las credenciales del usuario
				// Por ejemplo, utilizando una API o un servicio de autenticación

				// Si la autenticación es exitosa, redirigir a la ruta "/"
				window.location.href = '/home';
			} catch (error) {
				// Manejo de errores de autenticación
				console.log(error);
			}
		}
	};

	return (
		<div className={style.container}>
			{!isAuthenticated}
			{isAuthenticated && <Link to='/home'>Home</Link>}
			{!isAuthenticated && (
				<button
					onClick={() => loginWithRedirect()}
					className={`${style['auth-button']} ${style['google-button']}`}>
					<span className={style['google-icon']}></span>
					<span className={style['button-text']}>Login</span>
				</button>
			)}
		</div>
	);
}

export default Login;
