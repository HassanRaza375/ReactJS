import React, { useRef } from "react";

const tableMainFilter = ({ SearchUserData }) => {
  const filterSearch = useRef("");
  const handleInputChange = () => {
    if (SearchUserData) {
      SearchUserData(filterSearch.current.value); // Pass the current value to the event function
    }
  };
  return (
    <>
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
              ref={filterSearch}
              type="text"
              className="border-0 outline-0 w-full h-[20px]"
              placeholder="Search Users by Name, Email or Date"
              onInput={handleInputChange}
            />
          </div>
        </div>
        <button className="bg-[#6D5BD0] rounded-[6px] text-[16px] font-semibold p-[10px] text-white cursor-pointer">
          Pay Dues
        </button>
      </div>
    </>
  );
};

export default tableMainFilter;
