import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    const response = await axios.post("/users/register", data);
    console.log(response);

    if (response.data.success) navigate("/login");
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-slate-50 flex-col gap-[20px]">
      <label>
        Username:
        <input
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
          className="border-slate-500 border-2 p-[10px] w-[250px] hover:bg-red-100"
        />
      </label>

      <label>
        Email:
        <input
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="border-slate-500 border-2 p-[10px] w-[250px] hover:bg-red-100"
        />
      </label>

      <label>
        Password:
        <input
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className="border-slate-500 border-2 p-[10px] w-[250px] hover:bg-red-100"
        />
      </label>

      <button
        onClick={handleRegister}
        className="bg-slate-500 text-white p-[10px] rounded-md"
      >
        Register
      </button>
    </div>
  );
}

export default Register;
