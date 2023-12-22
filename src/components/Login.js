import React, { useState } from "react";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [data, setData] = useState({ name: "", password: " " });
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  return (
    <>
      <form action="">
        <div>
          <div>
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              value={data.name}
              name="name"
              id="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              id="password"
            />
          </div>
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </div>
      </form>
    </>
  );
};

export default Login;
