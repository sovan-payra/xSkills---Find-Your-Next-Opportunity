import { setSearchedQuery } from "@/redux/jobSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    const trimmedQuery = query.trim();

    dispatch(setSearchedQuery(trimmedQuery));
    navigate("/browse");
  };

  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10 px-4">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          Find Your Next Opportunity
        </span>

        <h1 className="text-5xl font-bold">
          Discover & Connect.
          <br />
          <span className="text-[#6A38C2]">Get Hired.</span>
        </h1>

        <p className="text-gray-600">
          Discover the right opportunities, connect with top companies,
          and take the next step in your career with xSkills.
        </p>

        <div className="flex w-full md:w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto bg-white">
          <input
            type="text"
            value={query}
            placeholder="Find your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchJobHandler();
              }
            }}
            className="outline-none border-none w-full bg-transparent"
          />

          <Button
            type="button"
            onClick={searchJobHandler}
            className="rounded-r-full bg-[#6A38C2] hover:bg-[#5429a0]"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;