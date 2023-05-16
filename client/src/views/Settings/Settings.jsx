import Nav from '../../components/Nav/Nav';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useState } from 'react';
import Detail from '../../components/Lideres/Employees/Detail/Detail';

// const user = [
// 	{
// 		username: 'andres biasutto',
// 		email: 'aquiandresbiasutto@gmail.com',
// 	},
// ];

export default function Settings() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = 'localhost:5173';

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: 'read:current_user',
          },
        });
        console.log(accessToken);
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);
  {
    console.log(isAuthenticated);
  }
  {
    console.log(useAuth0());
  }

  const url = "https://example.com/roles";
  return (
    
    <>
      <Nav />
      {isAuthenticated && (
        <div className="flex justify-center items-center w-full">
          {/* <p>{user[url][0]} </p> */}
          <div className="h-screen w-4/5  flex flex-col justify-start items-center p-8">
            <button>Cambio de Colores</button>
            <div>
              <label>Languaje:</label>
              <select name="Languaje" id="Languaje">
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>
            <p className="text-24 m-5 text-white">Edit Profile</p>
            <div className="flex flex-col gap-4 w-10/12 h-full items-center">
              <input
                className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white p-1 text-[#d1d1d1]"
                placeholder="Name"
                type="text"
                id="name"
              />
              <input
                type="text"
                id="email"
                className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white p-1 text-[#d1d1d1]"
                placeholder="Email"
              />
              <input
                type="text"
                id="phone"
                className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white p-1 text-[#d1d1d1]"
                placeholder="Phone"
              />
              <input
                type="text"
                id="location"
                className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white p-1 text-[#d1d1d1]"
                placeholder="Location"
              />
              <input
                type="text"
                id="status"
                className="bg-transparent border border-white rounded-md text-center w-2/5 h-1/5 shadow-md shadow-white p-1 text-[#d1d1d1]"
                placeholder="Status"
              />
              <button className="bg-[#334155] hover:bg-[#4f6686] text-white py-2 px-4 rounded-full m-5">
                Save Changes
              </button>
            </div>
          </div>
          <Detail name={user.name} picture={user.picture} email={user.email} />
        </div>
      )}{" "}
    </>
  );
}






// import Nav from "../../components/Nav/Nav";
// import Detail from "../../components/Lideres/Employees_components/Detail/Detail";

// export default function Settings() {
//   return (
//     <>
//       <Nav />
//       <div className="h-screen w-3/5 gap-3 flex flex-col justify-start items-center p-8">
//         <button>Cambio de Colores</button>
//         <div>
//           <label>Languaje:</label>
//           <select name="Languaje" id="Languaje">
//             <option value="English">English</option>
//             <option value="Spanish">Spanish</option>
//           </select>
//         </div>
//         <p className="text-24 m-5 text-white">Edit Profile</p>
//         <div className="flex flex-col gap-4 w-10/12 h-full items-center">
//           <input
//             className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white p-1 text-[#d1d1d1]"
//             placeholder="Name"
//             type="text"
//             id="name"
//           />
//           <input
//             type="text"
//             id="email"
//             className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white p-1 text-[#d1d1d1]"
//             placeholder="Email"
//           />
//           <input
//             type="text"
//             id="phone"
//             className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white p-1 text-[#d1d1d1]"
//             placeholder="Phone"
//           />
//           <input
//             type="text"
//             id="location"
//             className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white p-1 text-[#d1d1d1]"
//             placeholder="Location"
//           />
//           <input
//             type="text"
//             id="status"
//             className="bg-transparent border border-white rounded-md text-center w-2/5 h-1/5 shadow-md shadow-white p-1 text-[#d1d1d1]"
//             placeholder="Status"
//           />
//           <button className="bg-[#334155] hover:bg-[#4f6686] text-white py-2 px-4 rounded-full m-5">
//             Save Changes
//           </button>
//         </div>
//       </div>
//       <Detail />
//     </>
//   );
// }
