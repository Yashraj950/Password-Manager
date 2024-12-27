import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let password = localStorage.getItem("password");
    if (password) {
      setPasswordArray(JSON.parse(password));
    }
  }, []);

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("password", JSON.stringify(passwordArray));
    console.log(passwordArray);
  };

  const showPassword = () => {
    passwordRef.current.type = "text";
    console.log(ref.current.src);

    if (
      ref.current.src.includes(
        "https://cdn1.iconfinder.com/data/icons/hawcons/32/699007-icon-21-eye-hidden-512.png"
      )
    ) {
      ref.current.src = "https://cdn-icons-png.flaticon.com/512/65/65000.png";

      passwordRef.current.type = "text";
    } else {
      ref.current.src =
        "https://cdn1.iconfinder.com/data/icons/hawcons/32/699007-icon-21-eye-hidden-512.png";
      passwordRef.current.type = "password";
    }
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_15%_at_500%_10%,#181111_40%,#063238_100%)]"></div>{" "}
      <div className="myContainer">
        <h1 className="text-4xl  text-center pb-5">
          <span className="text-blue-700  hover:text-yellow-500 ">
            &lt;Password
          </span>
          <span className="text-yellow-500 hover:text-blue-700">
            Manager&gt;
          </span>
        </h1>
        <p className="text-green-600 text-lg text-center pb-3">
          Your own Password Manager
        </p>

        <div className="text-black flex flex-col p-4 gap-5 items-center">
          <input
            value={form.site}
            onChange={handlechange}
            placeholder="Enter website URL"
            className="rounded-full border-[2px] border-green-500 w-full p-4 py-1"
            type="text"
            name="site"
            id=""
          />
          <div className="flex w-full justify-between gap-8 ">
            <input
              value={form.username}
              onChange={handlechange}
              placeholder="Enter Username"
              className="rounded-full border-[2px] border-green-500 w-full p-4 py-1"
              type="text"
              name="username"
              id=""
            />
            <div className="relative">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handlechange}
                placeholder="Enter Password"
                className="rounded-full border-[2px] border-green-500 w-full p-4 py-1"
                type="password"
                name="password"
                id=""
              />

              <span
                className="absolute right-2 top-[2px] cursor-pointer "
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="size-8 p-1"
                  src="https://cdn-icons-png.flaticon.com/512/65/65000.png"
                  alt=""
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2 hover:text-white
           bg-green-600 hover:bg-green-500 font-bold py-1 px-6 rounded-full 
            w-fit border-2 border-green-500"
          >
            <span>
              <lord-icon
                src="https://cdn.lordicon.com/wsaaegar.json"
                trigger="hover"
                colors="primary:#121331,secondary:#fdfffc"
              ></lord-icon>
            </span>
            Add Password
          </button>
        </div>

        <div className="-password">
          <h2 className="font-bold text-2xl py-4  text-blue-600">
            Your Passwords
          </h2>
          {passwordArray.length === 0 && (
            <div className="text-orange-600">No Password show here</div>
          )}
          {passwordArray.length != 0 && (
            <table class="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                </tr>
              </thead>
              <tbody className="bg-green-200">
                {passwordArray.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 border border-white text-center w-32">
                      <a href={item.site} target="_blank">
                        {item.site}
                      </a>
                    </td>
                    <td className="py-2 border border-white text-center w-32">
                      {item.username}
                    </td>
                    <td className="py-2 border border-white text-center w-32">
                      {item.password}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
