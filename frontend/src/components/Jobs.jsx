import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Jobs = () => {
  const {
    allJobs = [],
    searchedQuery = "",
    filters = {
      location: "",
      title: "",
      salary: "",
    },
  } = useSelector((store) => store.job);

  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    const searchText = searchedQuery.trim().toLowerCase();

    const filteredJobs = allJobs.filter((job) => {
      // Search filter
      const matchesSearch =
        !searchText ||
        job?.title?.toLowerCase().includes(searchText) ||
        job?.description?.toLowerCase().includes(searchText) ||
        job?.location?.toLowerCase().includes(searchText);

      // Location filter
      const matchesLocation =
        !filters.location ||
        job?.location
          ?.toLowerCase()
          .includes(filters.location.toLowerCase());

      // Job role filter
      const matchesTitle =
        !filters.title ||
        job?.title
          ?.toLowerCase()
          .includes(filters.title.toLowerCase());

      // Salary filter
      let matchesSalary = true;

      if (filters.salary) {
        const salary = Number(job?.salary);

        switch (filters.salary) {
          case "0-3":
            matchesSalary = salary >= 0 && salary <= 3;
            break;

          case "3-5":
            matchesSalary = salary > 3 && salary <= 5;
            break;

          case "5-8":
            matchesSalary = salary > 5 && salary <= 8;
            break;

          case "8-10":
            matchesSalary = salary > 8 && salary <= 10;
            break;

          case "10-15":
            matchesSalary = salary > 10 && salary <= 15;
            break;

          case "15-20":
            matchesSalary = salary > 15 && salary <= 20;
            break;

          case "20+":
            matchesSalary = salary > 20;
            break;

          default:
            matchesSalary = true;
        }
      }

      return (
        matchesSearch &&
        matchesLocation &&
        matchesTitle &&
        matchesSalary
      );
    });

    setFilterJobs(filteredJobs);
  }, [allJobs, searchedQuery, filters]);

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto mt-5 px-4">
        <div className="flex gap-5">
          {/* Filter */}
          <div className="w-[20%]">
            <FilterCard />
          </div>

          {/* Jobs */}
          {filterJobs.length === 0 ? (
            <div className="flex-1 text-center py-10 text-gray-500">
              Job not found
            </div>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterJobs.map((job) => (
                  <motion.div
                    key={job?._id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;