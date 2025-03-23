import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [Users, setUser] = useState([]);
  useEffect(() => {
    const getAllUserHandler = async () => {
      try {
        let token = JSON.parse(localStorage.getItem("token"));
        console.log(token);
        const res = await axios.get("http://localhost:5000/api/auth/all", {
          headers: {
            Authorization: `Bearer ${token}`, // Ensure "Bearer " prefix
          },
        });
        if (res.data.length > 0) {
          setUser([...res.data]);
        }
      } catch (err) {
        if (err.response.data.message === "Token expired") {
          localStorage.removeItem("token");
          navigate("/SignUp");
        }
      }
    };
    getAllUserHandler();
  }, []);
  return (
    <>
      <div className="p-3">
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-4/12 border-1 p-3">Id</th>
              <th className="w-4/12 border-1 p-3">Name</th>
              <th className="w-4/12 border-1 p-3">Email</th>
            </tr>
          </thead>
          <tbody>
            {Users.length > 0 ? (
              Users.map((e) => {
                return (
                  <tr key={e.id}>
                    <td className="border-1 p-3 text-center">{e.id}</td>
                    <td className="border-1 p-3 text-center">{e.name}</td>
                    <td className="border-1 p-3 text-center">{e.email}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="100%">No record found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
