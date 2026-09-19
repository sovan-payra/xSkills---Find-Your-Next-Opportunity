import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch, useSelector } from "react-redux";
import {
  setLocationFilter,
  setTitleFilter,
  setSalaryFilter,
  clearFilters,
} from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    key: "location",
    array: [
      "Delhi NCR",
      "Bangalore",
      "Hyderabad",
      "Pune",
      "Mumbai",
      "Chennai",
      "Kolkata",
      "Gurgaon",
      "Noida",
      "Ahmedabad",
      "Jaipur",
      "Chandigarh",
      "Indore",
      "Lucknow",
      "Kochi",
      "Coimbatore",
    ],
  },

  {
    filterType: "Job Role",
    key: "title",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Software Engineer",
      "Mobile App Developer",
      "UI/UX Designer",
      "Graphic Designer",
      "Data Scientist",
      "Data Analyst",
      "Machine Learning Engineer",
      "AI Engineer",
      "DevOps Engineer",
      "Cloud Engineer",
      "Cybersecurity Analyst",
      "Database Administrator",
      "QA Engineer",
      "Software Tester",
      "Product Manager",
      "Project Manager",
      "Business Analyst",
      "Digital Marketing",
      "Content Writer",
      "SEO Specialist",
      "Technical Writer",
      "Game Developer",
      "Blockchain Developer",
      "Network Engineer",
      "System Administrator",
      "IT Support Specialist",
    ],
  },

  {
    filterType: "Salary (LPA)",
    key: "salary",
    array: [
      "0-3",
      "3-5",
      "5-8",
      "8-10",
      "10-15",
      "15-20",
      "20+",
    ],
  },
];

const FilterCard = () => {
  const dispatch = useDispatch();

  const { filters } = useSelector((store) => store.job);

  const changeHandler = (type, value) => {
    if (type === "location") {
      dispatch(setLocationFilter(value));
    }

    if (type === "title") {
      dispatch(setTitleFilter(value));
    }

    if (type === "salary") {
      dispatch(setSalaryFilter(value));
    }
  };

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg">
          Filter Jobs
        </h1>

        <button
          type="button"
          onClick={() => dispatch(clearFilters())}
          className="text-sm text-blue-600 hover:underline"
        >
          Clear
        </button>
      </div>

      <hr className="mt-3" />

      <div className="mt-4 space-y-6">
        {filterData.map((data, index) => (
          <div key={data.filterType}>
            <h2 className="font-bold text-lg mb-2">
              {data.filterType}
            </h2>

            <RadioGroup
              value={filters?.[data.key] || ""}
              onValueChange={(value) =>
                changeHandler(data.key, value)
              }
            >
              {data.array.map((item, idx) => {
                const itemId = `filter-${index}-${idx}`;

                return (
                  <div
                    key={itemId}
                    className="flex items-center space-x-2 my-2"
                  >
                    <RadioGroupItem
                      value={item}
                      id={itemId}
                    />

                    <Label htmlFor={itemId}>
                      {item}
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCard;