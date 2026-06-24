import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import car from "../../assets/images/car.gif";
const Login = () => {

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const navigate=useNavigate();

  const onSubmitHandel=(e)=>{
    e.preventDefault();
    try
    {
      if(!password || !email)return toast.error("Password and Confirm Password does not match");
      else
      {
        console.log(email,password);
        toast.success("Login Successfully");
        navigate("/cars");
      }
    }
    catch(error)
    {
      console.log(error); 
    }

  }


  return (
    <>
      <div className="container p-4">
        <div className="row ">
          <div className="col-md-7 ">
            <img
              src={car}
              alt="auth"
              className="rounded"
              height={"100%"}
              width={"100%"}
            />
          </div>
          <div className="col-md-5 checked center">
            <div className="min-h-screen flex items-center justify-center px-4">
              <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                <form onSubmit={onSubmitHandel} className="space-y-4">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="********"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
