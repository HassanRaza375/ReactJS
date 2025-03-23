import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { HiOutlineDotsVertical } from "react-icons/hi";
import DataUserBody from "../components/userData/data";
import FooterTable from "../components/userData/footerFilter";
import TableMainFilter from "../components/userData/tableMainFilter";
import TableTabs from "../components/userData/tableTabs";
import { useNavigate } from "react-router-dom";
const TabularHome = () => {
  const [Users, setUser] = useState([]);
  const [tabs, setTabs] = useState([
    { Name: "All", value: "All" },
    { Name: "Paid", value: "paid" },
    { Name: "Unpaid", value: "unpaid" },
    { Name: "Inactive", value: false },
    { Name: "Acitve", value: true },
  ]);
  const [selectedtabs, setSelectedTab] = useState("All");
  const copydata = useRef();
  const navigate = useNavigate();
  let token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    getAllUserHandler();
  }, []);
  const getAllUserHandler = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/all", {
        headers: {
          Authorization: `Bearer ${token}`, // Ensure "Bearer " prefix
        },
      });
      if (res.data.length > 0) {
        setUser([...res.data]);
        copydata.value = [...res.data];
      }
    } catch (err) {
      if (err.response.data.message === "Token expired") {
        localStorage.removeItem("token");
        navigate("/SignUp");
      }
    }
  };
  const mainTabsSearch = (searchString) => {
    if (searchString === "All") {
      setUser(copydata.value);
      return;
    }
    const filteredData = copydata.value.filter((e) => {
      return typeof searchString === "boolean"
        ? e.activeUser === searchString
        : e.paymentStatus == searchString;
    });

    setUser(filteredData);
  };
  const SearchUserData = (searchString) => {
    if (searchString === "") {
      setUser(copydata.value);
      return;
    }

    const filteredData = Users.filter((e) => {
      return (
        e.name.toLowerCase().includes(searchString.toLowerCase()) ||
        e.email.toLowerCase().includes(searchString.toLowerCase())
      );
    });

    setUser(filteredData);
  };
  const DeleteUser = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/auth/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Ensure "Bearer " prefix
        },
      });
      if (res.data.message) {
        alert(res.data.message);
        getAllUserHandler();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const ActiveUser = async (id, bool) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/auth/activateUser/${id}`,
        { useractive: bool }
      );
      if (res.data.message) {
        alert(res.data.message);
        getAllUserHandler();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <section className="bg-[#F4F2FF] min-h-screen">
        <div className="max-w-[1100px] mx-auto py-[20px] px-[1rem]">
          <div className="flex mx-[6px] flex-wrap">
            <TableTabs
              tabs={tabs}
              selectedtab={selectedtabs}
              setSelectedTab={setSelectedTab}
              filter={mainTabsSearch}
            />
            <div className="w-12/12 mt-[20px]">
              <div className="bg-[#FFFFFF] rounded-[6px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)]">
                {/* filter head */}
                <TableMainFilter SearchUserData={SearchUserData} />
                {/* table head */}
                <div className="flex items-center relative ">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="px-[20px] py-[13px] text-start border-t-1 border-b-1 border-[#F4F2FF] bg-[#F4F2FF]">
                          <input
                            type="checkbox"
                            className="text-[20px] border-[#6E6893]"
                          />
                        </th>
                        <th className="px-[20px] py-[13px] text-[12px] font-semibold text-[#6E6893] text-start border-t-1 border-b-1 border-[#F4F2FF] bg-[#F4F2FF]">
                          Name
                        </th>
                        <th className="px-[20px] py-[13px] text-[12px] font-semibold text-[#6E6893] text-start border-t-1 border-b-1 border-[#F4F2FF] bg-[#F4F2FF]">
                          User Status
                        </th>
                        <th className="px-[20px] py-[13px] text-[12px] font-semibold text-[#6E6893] text-start border-t-1 border-b-1 border-[#F4F2FF] bg-[#F4F2FF]">
                          Payment Status
                        </th>
                        <th className="px-[20px] py-[13px] text-[12px] font-semibold text-[#6E6893] text-start border-t-1 border-b-1 border-[#F4F2FF] bg-[#F4F2FF]">
                          Amount
                        </th>
                        <th className="px-[20px] py-[13px] text-[20px] cursor-pointer font-semibold text-[#6E6893] text-start border-t-1 border-b-1 border-[#F4F2FF] bg-[#F4F2FF]">
                          <HiOutlineDotsVertical />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <DataUserBody
                        DeleteUser={DeleteUser}
                        ActiveUser={ActiveUser}
                        Users={Users}
                      />
                    </tbody>
                    <tfoot>
                      <FooterTable data={Users} />
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TabularHome;
