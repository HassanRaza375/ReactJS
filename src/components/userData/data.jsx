import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";

const data = ({ Users }) => {
  const [showactiveDropdown, setActiveDropdown] = useState(null);
  const toggleDropdown = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };
  return (
    <>
      {Users.length > 0 ? (
        Users.map((e, i) => {
          return (
            <tr key={e + i}>
              <td className="px-[20px] py-[13px] text-start border-t-1 border-b-1 border-[#F4F2FF] bg-white">
                <input
                  type="checkbox"
                  className="text-[20px] border-[#6E6893]"
                />
              </td>
              <td className="px-[20px] py-[13px] text-start border-t-1 border-b-1 border-[#F4F2FF] bg-white">
                <h2 className="mb-0 text-[14px] font-medium text-[#25213B]">
                  {e.name}
                </h2>
                <p className="mb-0 text-[14px] font-normal text-[#6E6893] mt-[7px]">
                  {e.email}
                </p>
              </td>
              <td className="px-[20px] py-[13px] text-start border-t-1 border-b-1 border-[#F4F2FF] bg-white">
                <span className="px-[5px] py-[2px] gap-[4px] font-medium text-[12px] text-[#4A4AFF] inline-flex items-center bg-[#E6E6F2] rounded-[10px]">
                  <span className="relative flex size-[6px]">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4A4AFF] opacity-75"></span>
                    <span className="relative inline-flex size-[6px] rounded-full bg-[#4A4AFF]"></span>
                  </span>
                  Active
                </span>
                <p className="text-[#6E6893] text-[12px] mt-[7px]">
                  Last login: 14/APR/2020
                </p>
              </td>
              <td className="px-[20px] py-[13px] text-start border-t-1 border-b-1 border-[#F4F2FF] bg-white">
                <span className="px-[5px] py-[2px] gap-[4px] font-medium text-[12px] text-[##007F00] inline-flex items-center bg-[#CDFFCD] rounded-[10px]">
                  <span className="relative flex size-[6px]">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#007F00] opacity-75"></span>
                    <span className="relative inline-flex size-[6px] rounded-full bg-[#007F00]"></span>
                  </span>
                  Paid
                </span>
                <p className="text-[#25213B] text-[12px] font-medium">
                  Paid on 15/APR/2020
                </p>
              </td>
              <td className="px-[20px] py-[13px] text-end border-t-1 border-b-1 border-[#F4F2FF] bg-white">
                <h2 className="text-[14px] font-medium text-[#25213B]">$200</h2>
                <p className="text-[12px] font-normal text-[#6E6893]">USD</p>
              </td>
              <td className="px-[20px] py-[13px] text-[20px] cursor-pointer font-semibold text-[#6E6893] text-start border-t-1 border-b-1 border-[#F4F2FF] bg-white">
                <div className="relative">
                  <HiOutlineDotsVertical onClick={() => toggleDropdown(e.id)} />
                  <div
                    className={`relative ${
                      showactiveDropdown == e.id ? "" : "hidden"
                    }`}
                  >
                    <ul className="absolute top-0 w-[154px] right-0 bg-white rounded-[6px] shadow-sm p-[10px] z-10">
                      <li className="p-[5px] font-normal text-[14px] text-[#25213B] hover:bg-sky-700 hover:text-white rounded-[6px]">
                        Edit
                      </li>
                      <li className="p-[5px] font-normal text-[14px] text-[#25213B] hover:bg-sky-700 hover:text-white rounded-[6px]">
                        View Profile
                      </li>
                      <li className="p-[5px] font-normal text-[14px] text-[#007F00] hover:bg-lime-500 hover:text-white rounded-[6px]">
                        Activate User
                      </li>
                      <li className="p-[5px] font-normal text-[14px] text-[#D30000] hover:bg-red-500 hover:text-white rounded-[6px]">
                        Delete
                      </li>
                    </ul>
                    <IoMdCloseCircle
                      className="absolute top-[-9px] right-[-9px] z-20"
                      onClick={() => toggleDropdown(e.id)}
                    />
                  </div>
                </div>
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan="100%" className="text-center p-[10px]">No user Data</td>
        </tr>
      )}
    </>
  );
};

export default data;
