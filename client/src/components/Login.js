import { useState } from "react";
import axios from "axios";


function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });


  const handleLogin = async () => {
    const response = await axios.post("/users/login", data);
    console.log(response);
  }

  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-slate-50 flex-col gap-[20px]">



      <label>
        Email:
        <input
          value={data.email}
          onChange={e => setData({ ...data, email: e.target.value })}
          className="border-slate-500 border-2 p-[10px] w-[250px] hover:bg-red-100"
        />
      </label>



      <label>
        Password:
        <input
          value={data.password}
          onChange={e => setData({ ...data, password: e.target.value })}
          className="border-slate-500 border-2 p-[10px] w-[250px] hover:bg-red-100"
        />
      </label>

      <button onClick={handleLogin} className="bg-slate-500 text-white p-[10px] rounded-md">
        Login
      </button>
    </div>
  );
}

export default Login;
