import styles from "./App.module.css";
import Landing from "./views/Landing/Landing";
import { useDispatch, useSelector } from "react-redux";
import Employees from "./views/Employees/Employees.jsx";
import Analytics from "./views/Analytics/Analytics"
import Settings from "./views/Settings/Settings.jsx";
import CorredoresAnlaytics from "./components/Corredores/Analitycs/CorredoresAnalytics";

import VendedoresAnalytics from "./components/Vendedores/analytics/VendedoresAnalytics";

import { useEffect } from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
  useUser,
  UserProfile
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";


import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";


if (!"pk_test_ZmFtb3VzLWRyYWdvbi0xMi5jbGVyay5hY2NvdW50cy5kZXYk") {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = "pk_test_ZmFtb3VzLWRyYWdvbi0xMi5jbGVyay5hY2NvdW50cy5kZXYk";






function PublicPage() {
  const {user} = useUser()
  console.log(user);
  return (
    <>
      <h1>Public page</h1>
      <a href="/sign-in/">Go to protected page</a>
    </>
  );
}

function ProtectedPage() {
  return (
    <>
      <h1>Protected page</h1>
      <UserButton />
      <Link to="/employees">Employees</Link>
      <Link to="/settings">settings</Link>
    </>
  );
}

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path="/home" element={<Landing />} />
        <Route path="/" element={<PublicPage />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="/employees" element={<Employees />} />
        <Route path="/analytics" element={<Analytics/>} />
        <Route path="/corredores/analytics" element={<CorredoresAnlaytics />}/>
        <Route
          path="/sign-in/*"
          element={<SignIn 
            appearance={{
              elements:{
                formButtonPrimary:styles.formButtonPrimary,
                socialButtonsBlockButton:styles.socialButtons,
                card:styles.card,
                logoImage:styles.logoImage,
                headerTitle: styles.headerTitle,
                headerSubtitle: styles.headerSubtitle,
                rootBox:styles.rootBox,
                _App_yfs9d_9:styles.App_yfs9d_9
              }
            }}
            routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route
          path="/protected"
          element={
            <>
              <SignedIn>
                <ProtectedPage />
                <Employees />
                <Settings />
                <VendedoresAnalytics />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}
function App() {
  const dispatch = useDispatch();
  const lead = useSelector((state) => state.lead);

  useEffect(() => { }, [dispatch]);

  return (

    <div className={styles.App}>
      <ClerkProviderWithRoutes />
    </div>
  );
}

export default App;


// import { Routes, Route, useLocation,useNavigate } from "react-router-dom";
// import Landing from "./views/Landing/Landing";
// import { useDispatch, useSelector } from "react-redux";
// import Employees from "./views/Employees/Employees.jsx";
// import Analytics from "./views/Analytics/Analytics.jsx";
// import Settings from "./views/Settings/Settings.jsx";

// import CorredoresDashboard from "./components/Corredores/Dashboard/CorredoresDashboard";
// import VendedoresDashboard from "./components/Vendedores/Dashboard/VendedoresDashboard";
// import { AnalyticLeader } from "./components/Lideres/Analytic/AnalyticLeader";
// import { useEffect } from "react";
// import VendedoresAnalytics from "./components/Vendedores/analytics/VendedoresAnalytics";
// import CorredoresAnlaytics from "./components/Corredores/Analitycs/CorredoresAnalytics";
// import{ClerkProvider} from '@clerk/clerk-react'
// import {
//   SignedIn,
//   SignedOut,
//   RedirectToSignIn,
//   SignIn,
//   SignUp,
//   UserButton,
// } from '@clerk/clerk-react'
// const clerkPubKey = "pk_test_Y3JlYXRpdmUtcGFyYWtlZXQtODMuY2xlcmsuYWNjb3VudHMuZGV2JA"

// if(!clerkPubKey){
//   throw new Error("Missing Publishable Key")
// }



// function App() {
//   const navigate = useNavigate()
//   const location = useLocation()
//   const dispatch = useDispatch();
//   const lead = useSelector((state) => state.lead);

//   useEffect(() => {}, [dispatch]);

//   return (
//     <ClerkProvider publishableKey={clerkPubKey}
//     navigate={(to) => navigate(to)}>
//     <div className="App">
//       <Routes>
//         <Route path="/home" element={<Landing />} />
//         <Route path="/" element={<SignIn routing = "path" path="/" />} />
//         <Route path="/sign-up" element={<SignUp routing="path" path="/sign-up"/>} />
//         <Route element= {<SignedIn>
//         <Route path="/employees" element={<Employees />} />
//         <Route path="/employees/analytics" element={<AnalyticLeader />} />
//         <Route path="/corredores" element={<CorredoresDashboard />} />
//         <Route path="/corredores/analytics" element={<CorredoresAnlaytics />}/>
//         <Route path="/analytics" element={<Analytics />} />
//         <Route path="/settings" element={<Settings />} />
//         <Route
//           path="/vendedores"
//           element={<VendedoresDashboard lead={lead} />}
//         />
//         <Route path="/vendedores/analytics" element={<VendedoresAnalytics />} />
//         </SignedIn>} />
//         <Route path="/" element= {<SignedOut>
//           <RedirectToSignIn />
//         </SignedOut>} />
//       </Routes>

//       {location.pathname === "/" && (
//         <div className="App flex items-center justify-center">
//           <img
//             className="opacity-20 w-4/5 mt-[2%]"
//             src="https://cdn.discordapp.com/attachments/1105243107555037294/1106577865698459788/White_Logo_Social_Media_Lab.png"
//           />
//         </div>
//       )}
//     </div>
//     </ClerkProvider>
//   );
// }

// export default App;

