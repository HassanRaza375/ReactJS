import React, { useRef } from "react";

const Login = () => {
  const Email = useRef(null);
  const Password = useRef(null);
  const handleSubmit = () => {
    const data = {
      Email: Email.current.value,
      Password: Password.current.value,
    };
    console.log(data);
  };
  return (
    <div className="max-w-[400px] mx-auto h-[100vh] flex flex-col align-center justify-center">
      <div className="grid grid-cols-2 gap-4 py-3">
        <input
          ref={Email}
          type="Email"
          required
          placeholder="Email"
          className="border-[1px] p-2 rounded-2xl border-amber-400"
        />
        <input
          ref={Password}
          type="number"
          className="border-1 p-2 rounded-2xl border-amber-400"
          placeholder="password"
        />
        <button
          onClick={() => handleSubmit()}
          className="col-span-2 border-1 text-white cursor-pointer hover:bg-amber-400 border-amber-400 bg-amber-300 p-2 rounded-2xl"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
