import useGetAllJobs from "@/hooks/useGetAllJobs";
import {
  clearFilters,
  setSearchedQuery,
} from "@/redux/jobSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./shared/Navbar";
import Job from "./Job";

const Browse = () => {
  useGetAllJobs();

  const { allJobs = [] } = useSelector((store) => store.job);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
      dispatch(clearFilters());
    };
  }, [dispatch]);

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto my-10 px-4">
        <h1 className="font-bold text-xl my-10">
          Search Results ({allJobs.length})
        </h1>

        {allJobs.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No jobs found
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allJobs.map((job) => (
              <Job key={job._id} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;