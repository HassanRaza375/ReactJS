import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  let name = useRef("");
  let email = useRef("");
  let password = useRef("");
  const navigate = useNavigate();
  const [isshow, setshow] = useState(true);
  useEffect(() => {
    let iftoken = localStorage.getItem("token");
    if (iftoken) {
      navigate("/Home");
    }
  }, []);
  const SignUpHandler = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/signup", {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    });
    alert(res.data.message);
    if (res.data.message) {
      name.current.value = "";
      email.current.value = "";
      password.current.value = "";
      navigate("/Home");
    }
    localStorage.setItem("token", JSON.stringify(res.data.token));
  };
  return (
    <div className="bg-[#160430] h-[100vh]">
      <div className="mx-auto">
        <div className="flex gap-[72px]">
          <div className="w-6/12 cd-none">
            <img
              src="images/loginback.png"
              className="w-full max-h-screen object-cover"
              height="auto"
              alt="login"
            />
          </div>
          <div className="md:w-6/12 sm:w-12/12 w-12/12 text-white bg-login">
            <div className="flex items-center flex-col justify-center h-[100vh] p-[20px]">
              <div className="w-full max-w-[460px]">
                <h2 className="text-center font-bold text-[50px]">SIGN IN</h2>
                <div className="mt-[1rem]">
                  <p className="font-bold text-[1rem] mb-[17px] text-white">
                    Sign in with email address
                  </p>
                  <div className="flex gap-[11px] bg-[#261046] rounded-[10px] text-[#A4A4A4] px-[22px] py-[10px] items-center">
                    <img
                      src="/images/messageinput.png"
                      height="18"
                      width="25"
                      loading="lazy"
                      className="w-[25px] h-[18px]"
                      alt=""
                    />
                    <input
                      ref={email}
                      type="text"
                      className="w-[100%] focus:outline-0 h-[40px]"
                      placeholder="Yourname@gmail.com"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-[11px] width-[50%] bg-[#261046] rounded-[10px] text-[#A4A4A4] px-[22px] py-[10px] items-center mt-2">
                      <img
                        src="/images/user-icon.png"
                        height="30"
                        width="30"
                        loading="lazy"
                        className="w-[30px] h-[30px]"
                        alt=""
                      />
                      <input
                        ref={name}
                        type="text"
                        className="w-[100%] focus:outline-0 h-[40px]"
                        placeholder="Name"
                      />
                    </div>
                    <div className="flex gap-[11px] width-[50%] bg-[#261046] rounded-[10px] text-[#A4A4A4] px-[22px] py-[10px] items-center mt-2">
                      <input
                        ref={password}
                        type={isshow ? "text" : "password"}
                        className="w-[100%] focus:outline-0 h-[40px]"
                        placeholder="password"
                      />
                      <img
                        src={isshow ? "/images/show.png" : "/images/hide.png"}
                        height="30"
                        width="30"
                        loading="lazy"
                        className="w-[30px] h-[30px] cursor-pointer"
                        alt=""
                        onClick={() => setshow(!isshow)}
                      />
                    </div>
                  </div>
                  <button
                    className="cursor-pointer bg-gradient-to-r from-[#501794] to-[#3E70A1] p-[15px] w-[100%] rounded-[18px] mt-[22px] mb-[20px]"
                    onClick={() => SignUpHandler()}
                  >
                    Sign up
                  </button>
                </div>
                <div>
                  <span>Or continue with</span>
                  <div className="flex items-center gap-[9px] mt-[1rem] mb-[22px]">
                    <span className="flex items-center justify-center w-full gap-[14px] text-white bg-[#3B2063] p-[11px] rounded-[11px]">
                      <img
                        src="images/googlean.png"
                        height="18"
                        width="18"
                        loading="lazy"
                        className="h-[18px] w-[18px]"
                        alt=""
                      />{" "}
                      Google
                    </span>
                    <span className="flex items-center w-full justify-center gap-[14px] text-white bg-[#3B2063] p-[11px] rounded-[11px]">
                      <img
                        src="images/facebookan.png"
                        height="18"
                        width="18"
                        loading="lazy"
                        className="h-[18px] w-[18px]"
                        alt=""
                      />{" "}
                      Facebook
                    </span>
                  </div>
                  <p className="text-[#B6B6B6] font-medium text-[13px]">
                    By registering you with our
                    <a href="" className="text-[#9D5CE9] ml-1">
                      Terms and Conditions
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
