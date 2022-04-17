import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const [input, setInput] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleLogin = () => {
    if (input.email == 'team.candidleads@gmail.com' && input.password == 'dcsiNDIA@02') {
      window.sessionStorage.setItem('useremail', input.email);
      props.history.push('/');
    } else {
      alert("Invalid Credencials Entered.")
    }
  }

  return (
    <div class="h-screen flex">
      <div class="relative flex w-1/2 bg-gradient-to-tr from-blue-600 to-purple-600  justify-around items-center">
        <div className="absolute top-0 left-0 px-10 py-5">
          <div className="flex flex-row justify-start items-center space-x-3">
            <div className="bg-indigo-400 shadow-xl border-2 border-dashed border-indigo-200 p-2 rounded-md">
              <p className="font-bold text-white">ERP</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-white font-medium text-sm">ERP Analytics</p>
              <p className="text-white font-medium text-xs">Candid Leads</p>
            </div>
          </div>
        </div>
        <div>
          <img src="./img/Login/login.svg" className="object-contain object-center w-60 mb-5" />
          <h1 class="text-white font-bold text-4xl font-sans">Dashboard Console</h1>
          <p class="text-white mt-1">The most popular management tool that makes your business grow</p>
          <p class="text-white font-bold text-sm mt-3">An intelligent management platform for Affiliators.<br />Simple and easy to use.</p>
        </div>
      </div>
      <div class="flex w-1/2 justify-center items-center bg-white">
        <form class="bg-white">
          <div className="bg-red-100 border border border-red-300 p-2 rounded-md w-1/3 mb-3">
            <svg class="w-10 h-10 mx-auto text-red-600 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
          </div>
          <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
          <p class="text-sm font-normal text-gray-600">Welcome Back</p>
          <p class="text-lg font-normal text-gray-600 mb-7">Login to your account</p>

          <div class="flex items-center border-2 sm:w-64  py-2 px-3 rounded-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <input name="email"
              onChange={handleInputChange} class="pl-2 sm:w-64 outline-none text-xs border-none" type="text" id="" placeholder="Email Address" />
          </div>
          <div class="flex items-center border-2 sm:w-64 py-2 px-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
            <input onChange={handleInputChange} class="pl-2 sm:w-64 text-xs outline-none border-none" type="password" name="password" id="" placeholder="Password" />
          </div>
          <button onClick={() => handleLogin()} class="block w-full bg-indigo-600 mt-4 py-2 rounded-lg text-white font-semibold mb-2">
            <div className="flex flex-row justify-center items-center space-x-2">
              <div>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
              </div>
              <p>Login</p>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
