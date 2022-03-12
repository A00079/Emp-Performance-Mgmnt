import React, { useState } from "react";
import { TextBox, Button, DropDown } from "../../components";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const [input, setInput] = useState({});
  const [dropDownOption, setDropDownOption] = useState("Admin");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleLogin = () => {
    console.log('===>', input);
    if (input.email == 'team.candidleads@gmail.com' && input.password == 'dcsiNDIA@02') {
      window.sessionStorage.setItem('useremail', input.email);
      props.history.push('/');
    }else{
      alert("Invalid Credencials Entered.")
    }
  }

  return (
    // <div className="flex h-screen justify-center items-center">
    //   <div className="space-y-4">
    //     <div>
    //       <DropDown
    //         // label="select the account type"
    //         def="Admin"
    //         setDropDownOption={(option) => setDropDownOption(option)}
    //         options={["Admin", "Manager", "Affiliate"]}
    //       />
    //     </div>
    //     <div>
    //       <TextBox
    //         svgCode="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
    //         type="text"
    //         placeHolder="Email"
    //         isLabel="true"
    //         label="Email"
    //         name="email"
    //         orientation="vertical"
    //         value={input.email}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //     <div>
    //       <TextBox
    //         svgCode="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    //         type="password"
    //         placeHolder="Password"
    //         isLabel="true"
    //         label="Password"
    //         orientation="vertical"
    //         name="password"
    //         value={input.password}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //     <div>
    //       <Button
    //         variant="primary200"
    //         color="primary"
    //         size="md"
    //         onClick={() => console.log("test")}
    //       >
    //         Login
    //       </Button>
    //     </div>
    //   </div>
    // </div>
    <section class="h-screen">
      <div class="px-6 h-full text-gray-800">
        <div
          class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
        >
          <div
            class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="w-full"
              alt="Sample image"
            />
          </div>
          <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form>
              <h4 className="font-bold text-blue-600 text-4xl mb-1">Welcom Back</h4>
              <h4 className="font-bold text-gray-500 text-lg mb-3">Login To Your Account</h4>
              <div class="mb-6">
                <input
                  name="email"
                  onChange={handleInputChange}
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
              </div>

              <div class="mb-6">
                <input
                  name="password"
                  onChange={handleInputChange}
                  type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                />
              </div>

              <div class="flex justify-between items-center mb-6">
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                  >Remember me</label
                  >
                </div>
                <a href="#!" class="text-gray-800">Forgot password?</a>
              </div>

              <div class="text-center lg:text-left">
                <button
                  onClick={() => handleLogin()}
                  type="button"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Login
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Login);
