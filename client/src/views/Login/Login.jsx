import { useAuth0 } from "@auth0/auth0-react";
import style from "./Login.module.css";
import { Link } from "react-router-dom";

const MyComponent = () => {
  const { isAuthenticated, user } = useAuth0();
  const url = "https://example.com/roles";

  const objeto = [
    {
      name: "gus",
      rol: "c-level",
      array: ["elemento1", "elemento2", "elemento3"],
    },
    {
      name: "jose",
      rol: {
        prop1: "valor3",
        prop2: "valor4",
      },
      array: ["elemento4", "elemento5"],
    },
  ];

  if (isAuthenticated && user[url][0] === objeto[0].rol) {
    console.log("establecido");
  } else {
    console.log("no establecido");
  }
};

function Login() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  return (
    <div className={style.container}>
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
