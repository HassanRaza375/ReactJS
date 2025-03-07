import React from "react";

const tableTabs = ({ tabs, selectedtabs, setSelectedTab }) => {
  return (
    <>
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
            <span className="text-[#6E6893] text-[18px] font-normal">USD</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default tableTabs;
