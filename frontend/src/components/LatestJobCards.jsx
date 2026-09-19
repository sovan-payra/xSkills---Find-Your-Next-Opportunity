import React from "react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage } from "./ui/avatar";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer hover:shadow-2xl transition-shadow"
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 border">
          <AvatarImage
            src={job?.company?.logo || ""}
            alt={job?.company?.name || "Company"}
          />
        </Avatar>

        <div>
          <h1 className="font-medium text-lg">
            {job?.company?.name || "Company"}
          </h1>

          <p className="text-sm text-gray-500">
            {job?.location || "India"}
          </p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">
          {job?.title || "Job Title"}
        </h1>

        <p className="text-sm text-gray-600 line-clamp-2">
          {job?.description || "No description available"}
        </p>
      </div>

      <div className="flex items-center gap-2 mt-4 flex-wrap">
        <Badge
          className="text-blue-700 font-bold"
          variant="ghost"
        >
          {job?.position || 0} Positions
        </Badge>

        <Badge
          className="text-[#F83002] font-bold"
          variant="ghost"
        >
          {job?.jobType || "N/A"}
        </Badge>

        <Badge
          className="text-[#7209b7] font-bold"
          variant="ghost"
        >
          {job?.salary ?? "N/A"} LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;