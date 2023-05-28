import Nav from "../../components/Nav/Nav";
import Detail from "../../components/Lideres/Employees/Detail/Detail";
import {
  useUser,
  useOrganization,
  useOrganizationList,
} from "@clerk/clerk-react";
import { useState } from "react";
import axios from "axios";

export default function Settings() {
  const user = useUser().user;

  console.log(user);
  const [userInfo, setUserInfo] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [rolUser, setRolUser] = useState(null);
  const [errors, setErrors] = useState({
    image: null,
    name: "",
    phone: "",
    location: "",
    status: "",
  });
  const [input, setInput] = useState({
    image: null,
    name: "",
    phone: "",
    location: "",
    status: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(({
      ...input,
      [e.target.name]: e.target.value,
    }))
  };

  const editHandle = (e) => {
    e.preventDefault();
    isActive ? setIsActive(false) : setIsActive(true);
  };

  const submitHandle = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", input.image);
    formData.append("upload_preset", "prueba");
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dqsipqfn5/image/upload", {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    const imageUrl = data.secure_url;

    const id = useUser().user;
    console.log('soy el id', id)
    const update = {
      id:id,
      image: imageUrl ? imageUrl : userInfo.profile.image,
      name:
        !errors.name && input.name.length > 0
        ? input.name : userInfo.profile.name,
      phone:
        !errors.phone && input.phone.length > 0
        ? input.phone : userInfo.profile.phone,
      location:
        !errors.location && input.location.length > 0
        ? input.location : userInfo.profile.location,
      status:
        !errors.status && input.status.length > 0
        ? input.status : userInfo.profile.status,
    };

    await axios.put("http://localhost:3001/profile", update);
    setInput({
      image: null,
      name: "",
      phone: "",
      location: "",
      status: "",
    });
    alert("se actualizo");
  };

  const handleImageChange = (e) => {
    setInput((input) => ({
      ...input,
      image: e.target.files[0],
    }));
  };
  console.log(rolUser);
  return (
    <>
      <Nav />
      {
        <div className="flex justify-center items-center w-full">
          <div className="h-screen w-4/5  flex flex-col justify-start items-center p-8">
            <button>Cambio de Colores</button>
            <div>
              <label>Languaje:</label>
              <select name="Languaje" id="Languaje">
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>
            <form onSubmit={submitHandle}>
            <p className="text-24 m-5 text-white">Edit Profile</p>
            <div className="flex flex-col gap-4 w-10/12 h-full items-center">
              <input
                name="image"
                placeholder="image"
                type="file"
                onChange={(e) => handleImageChange(e)}

              />
              <input
                className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white p-1 text-[#d1d1d1]"
                value={input.name}
                onChange={handleChange}
                placeholder="Name"
                type="text"
                id="name"
              />
              {/* <input
                type="text"
                id="email"
                className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white p-1 text-[#d1d1d1]"
                placeholder="Email"
              /> */}
              <input
                type="number"
                id="phone"
                className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white p-1 text-[#d1d1d1]"
                placeholder="Phone"
                value={input.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                id="location"
                className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white p-1 text-[#d1d1d1]"
                placeholder="Location"
                value={input.location}
                onChange={handleChange}
              />
              <input
                type="text"
                id="status"
                className="bg-transparent border border-white rounded-md text-center w-2/5 h-1/5 shadow-md shadow-white p-1 text-[#d1d1d1]"
                placeholder="Status"
                value={input.status}
                onChange={handleChange}
              />
              <button className="bg-[#334155] hover:bg-[#4f6686] text-white py-2 px-4 rounded-full m-5">
                Save Changes
              </button>
            </div>
            </form>
          </div>
          <Detail
            name={user?.fullName}
            picture={user?.profileImageUrl}
            email={user?.emailAddresses[0].emailAddress}
          />
        </div>
      }{" "}
    </>
  );
}
