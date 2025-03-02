import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

const TabularHome = () => {
  const [tabs, setTabs] = useState(["All", "Paid", "Unpaid", "Overdue"]);
  const [selectedtabs, setSelectedTab] = useState("All");

  return (
    <>
      <section className="bg-[#F4F2FF] min-h-screen">
        <div className="max-w-[1100px] mx-auto py-[20px] px-[1rem]">
          <div className="flex mx-[6px] flex-wrap">
            <div className="w-12/12">
              <span className="text-[14px] font-bold text-[#6E6893]">
                Table Heading
              </span>
              <div className="flex items-center justify-between border-b-1 border-[#C6C2DE]">
                <div className="flex items-center gap-[6px] relative">
                  {tabs.length > 0
                    ? tabs.map((e) => {
                        return (
                          <span
                            className={`text-[14px] cursor-pointer px-[10px] relative bottom-[-1px] pt-[10px] pb-[8px] border-b-2 border-transparent font-medium text-[#6E6893] ${
                              e == selectedtabs
                                ? "!border-[#25213B] text-[#25213B]"
                                : ""
                            } `}
                            onClick={() => setSelectedTab(`${e}`)}
                            key={e}
                          >
                            {e}
                          </span>
                        );
                      })
                    : "No Tabs"}
                </div>
                <div className="flex items-center">
                  <span className="text-[#6E6893] text-[14px] font-medium ">
                    Total payable amount:
                  </span>
                  <span className="text-[#6D5BD0] text-[18px] font-bold mx-1">
                    $900.00
                  </span>
                  <span className="text-[#6E6893] text-[18px] font-normal">
                    USD
                  </span>
                </div>
              </div>
            </div>
            <div className="w-12/12 mt-[20px]">
              <div className="bg-[#FFFFFF] rounded-[6px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)]">
                {/* filter head */}
                <div className="flex justify-between items-center py-[15px] px-[20px]">
                  <div className="flex gap-[20px] grow">
                    <span className="font-normal text-[16px] text-[#25213B] border-1 border-[#C6C2DE] px-[10px] py-[11px] rounded-[6px] flex items-center gap-[10px]">
                      <img
                        src="/images/Filter.png"
                        loading="lazy"
                        height="20"
                        width="20"
                        alt="filt"
                      />
                      Filter
                    </span>
                    <div className="text-[12px] font-normal p-[10px] w-full max-w-[392px] bg-[#F4F2FF] rounded-[6px] flex items-center gap-[10px]">
                      <img
                        src="/images/filtersearch.png"
                        height="20"
                        width="20"
                        loading="lazy"
                        alt="search"
                      />
                      <input
                        type="text"
                        className="border-0 outline-0 w-full h-[20px]"
                        placeholder="Search Users by Name, Email or Date"
                      />
                    </div>
                  </div>
                  <button className="bg-[#6D5BD0] rounded-[6px] text-[16px] font-semibold p-[10px] text-white cursor-pointer">
                    Pay Dues
                  </button>
                </div>
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
                      {[1, 2, 3, 4].map((e, i) => {
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
                                Justin Septimus
                              </h2>
                              <p className="mb-0 text-[14px] font-normal text-[#6E6893] mt-[7px]">
                                example@email.com
                              </p>
                            </td>
                            <td className="px-[20px] py-[13px] text-start border-t-1 border-b-1 border-[#F4F2FF] bg-white">
                              <span className="px-[5px] py-[2px] gap-[4px] font-medium text-[12px] text-[#4A4AFF] inline-flex items-center bg-[#E6E6F2] rounded-[10px]">
                                <span class="relative flex size-[6px]">
                                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4A4AFF] opacity-75"></span>
                                  <span class="relative inline-flex size-[6px] rounded-full bg-[#4A4AFF]"></span>
                                </span>
                                Active
                              </span>
                              <p className="text-[#6E6893] text-[12px] mt-[7px]">
                                Last login: 14/APR/2020
                              </p>
                            </td>
                            <td className="px-[20px] py-[13px] text-start border-t-1 border-b-1 border-[#F4F2FF] bg-white">
                              <span className="px-[5px] py-[2px] gap-[4px] font-medium text-[12px] text-[##007F00] inline-flex items-center bg-[#CDFFCD] rounded-[10px]">
                                <span class="relative flex size-[6px]">
                                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#007F00] opacity-75"></span>
                                  <span class="relative inline-flex size-[6px] rounded-full bg-[#007F00]"></span>
                                </span>
                                Paid
                              </span>
                              <p className="text-[#25213B] text-[12px] font-medium">
                                Paid on 15/APR/2020
                              </p>
                            </td>
                            <td className="px-[20px] py-[13px] text-end border-t-1 border-b-1 border-[#F4F2FF] bg-white">
                              <h2 className="text-[14px] font-medium text-[#25213B]">
                                $200
                              </h2>
                              <p className="text-[12px] font-normal text-[#6E6893]">
                                USD
                              </p>
                            </td>
                            <td className="px-[20px] py-[13px] text-[20px] cursor-pointer font-semibold text-[#6E6893] text-start border-t-1 border-b-1 border-[#F4F2FF] bg-white">
                              <HiOutlineDotsVertical />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
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
