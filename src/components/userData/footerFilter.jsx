import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
const footerFilter = () => {
  return (
    <>
      <tr>
        <td
          colSpan="100%"
          className="bg-[#F4F2FF] px-[20px] py-[13px] rounded-[6px] text-[#6E6893] text-[12px] font-semibold"
        >
          <div className="flex items-center justify-end">
            <div className="flex items-center gap-[50px]">
              <span className="flex items-center gap-[8px] cursor-pointer">
                Rows per page: 10 <IoMdArrowDropdown />
              </span>
              <span>1-10 of 276</span>
              <span className="flex gap-[50px] items-center">
                <FaChevronLeft className="cursor-pointer" />
                <FaChevronRight className="cursor-pointer" />
              </span>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default footerFilter;
