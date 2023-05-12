// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// function Login() {
//   const { loginWithRedirect } = useAuth0();

//   const slackWorkspace ="signinwithslack"
//   const slackClientId= "3867251818310.5252696531139"

//   const handleGoogleLogin = () => {
//     window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${googleClientId}&redirect_uri=${googleRedirectUri}&response_type=code&scope=openid%20profile%20email`;
//   };

//   const handleMicrosoftLogin = () => {
//     window.location.href = `https://login.microsoftonline.com/${microsoftTenantId}/oauth2/v2.0/authorize?client_id=${microsoftClientId}&response_type=code&redirect_uri=${microsoftRedirectUri}&scope=user.read%20openid%20profile`;
//   };

//   const handleSlackLogin = () => {
//     window.location.href = `https://${slackWorkspace}.slack.com/oauth/authorize?client_id=${slackClientId}&scope=identity.basic`;
//   };

//   return (
//     <div>
//       <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
//       <button onClick={handleMicrosoftLogin}>Iniciar sesión con Microsoft</button>
//       <button onClick={handleSlackLogin}>Iniciar sesión con Slack</button>
//     </div>
//   );
// }

// export default Login;





import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import style from "./Login.module.css";
import Form from "../../components/Form/Form";
import { validate } from "../../components/Form/validation";

function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleFormLogin = async (userData) => {
    const errors = validate(userData);
    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (hasErrors) {
      // Mostrar errores de validación al usuario o realizar alguna acción adicional
      console.log("Errores de validación:", errors);
    } else {
      try {
        // Lógica para autenticar con el formulario
        // Realizar la solicitud al servidor para verificar las credenciales del usuario
        // Por ejemplo, utilizando una API o un servicio de autenticación

        // Si la autenticación es exitosa, redirigir a la ruta "/"
        window.location.href = "/home";
      } catch (error) {
        // Manejo de errores de autenticación
        console.log(error);
      }
    }
  };

  return (
    <div className={style.container}>
      {!isAuthenticated }
      {isAuthenticated && <Link to="/home">Home</Link>}
      {!isAuthenticated && (
        <button
          onClick={() => loginWithRedirect()}
          className={`${style["auth-button"]} ${style["google-button"]}`}
        >
          <span className={style["google-icon"]}></span>
          <span className={style["button-text"]}>Login</span>
        </button>
      )}
    </div>
  );
}

export default Login;



//   return (
//     <div className={style.container}>
//       {!isAuthenticated && (
//         <>
//           <Form Login={handleFormLogin} />
//           <h1 className="underline">hola</h1>
//           <button
//             onClick={() => loginWithRedirect()}
//             className={`${style["auth-button"]} ${style["google-button"]}`}
//           >
//             <span className={style["google-icon"]}></span>
//             <span className={style["button-text"]}>Google</span>
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// export default Login;

// {/* <p>Username</p>
//       <input type="text" placeholder="Title" />
//       <p>Password</p>
//       <input type="password" placeholder="Title" />
//       <label>
//         <input type="checkbox" /> Remember me
//       </label>
//       <p>Forgot your password? <a href="#">Reset Password</a></p>
//       <button type="submit">Login</button> */}

// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// function Login() {
//   const { loginWithRedirect } = useAuth0();
//   const googleRedirectUri = window.location.origin + "/login/callback"
  

//   const handleGoogleLogin = () => {
//     loginWithRedirect({
//       screen_hint: "signup",
//       connection: "google-oauth2",
//       redirect_uri: googleRedirectUri,
//     });
//   };
//   const handleMicrosoftLogin = () => {
//     window.location.href = `https://login.microsoftonline.com/${microsoftTenantId}/oauth2/v2.0/authorize?client_id=${microsoftClientId}&response_type=code&redirect_uri=${microsoftRedirectUri}&scope=user.read%20openid%20profile`;
//   };

//   const handleSlackLogin = () => {
//     window.location.href = `https://${slackWorkspace}.slack.com/oauth/authorize?client_id=${slackClientId}&scope=identity.basic`;
//   };

//   return (
//     <div>
//       <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
//       <button onClick={handleMicrosoftLogin}>Iniciar sesión con Microsoft</button>
//       <button onClick={handleSlackLogin}>Iniciar sesión con Slack</button>
//     </div>
//   );
// }

//  export default Login;