import React, { useRef } from "react";
const SignUp = () => {
  const Name = useRef(null);
  const Age = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);
  const Gender = useRef(null);
  const handleSubmit = () => {
    const data = {
      Name: Name.current.value,
      Age: Age.current.value,
      Email: Email.current.value,
      Password: Password.current.value,
      Gender: Gender.current.value,
    };
    console.log(data);
  };
  return (
    <>
      <div className="max-w-[500px] mx-auto h-[100vh] flex flex-col align-center justify-center">
        <div className="grid grid-cols-2 gap-4 py-3">
          <input
            ref={Name}
            type="text"
            placeholder="Name"
            className="border-[1px] p-2 rounded-2xl border-amber-400"
          />
          <input
            ref={Age}
            type="number"
            placeholder="Age"
            className="border-[1px] p-2 rounded-2xl border-amber-400"
          />
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
          <select
            ref={Gender}
            className="border-[1px] p-2 rounded-2xl border-amber-400"
            id=""
          >
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Unknown</option>
          </select>

          <button
            onClick={() => handleSubmit()}
            className="border-1 text-white cursor-pointer hover:bg-amber-400 border-amber-400 bg-amber-300 p-2 rounded-2xl"
          >
            Submit
          </button>
        </div>
      </div>
      ;
    </>
  );
};

export default SignUp;
