import React, { useState } from "react";

const TabularHome = () => {
  const [tabs, setTabs] = useState(["All", "Paid", "Unpaid", "Overdue"]);
  const [selectedtabs, setSelectedTab] = useState("All");

  return (
    <>
      <section className="bg-[#F4F2FF] min-h-screen">
        <div className="max-w-[1100px] mx-auto py-[20px] px-[1rem]">
          <div className="flex mx-[6px]">
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
                            className={`text-[14px] cursor-pointer px-[10px] py-[10px] font-medium text-[#6E6893] ${
                              e == selectedtabs
                                ? "border-b-2 border-[#25213B] text-[#25213B]"
                                : ""
                            } `}
                            onClick={() => setSelectedTab(`${e}`)}
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
          </div>
        </div>
      </section>
    </>
  );
};

export default TabularHome;
