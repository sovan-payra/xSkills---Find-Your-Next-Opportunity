import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    if (!mongodbTime) return null;

    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();

    if (Number.isNaN(createdAt.getTime())) return null;

    const timeDifference = currentTime - createdAt;

    return Math.floor(
      timeDifference / (1000 * 24 * 60 * 60)
    );
  };

  const daysAgo = daysAgoFunction(job?.createdAt);

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 hover:shadow-2xl transition-shadow">

      {/* Date + Bookmark */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {daysAgo === null
            ? "Recently"
            : daysAgo === 0
            ? "Today"
            : `${daysAgo} days ago`}
        </p>

        <Button
          type="button"
          variant="outline"
          className="rounded-full"
          size="icon"
        >
          <Bookmark />
        </Button>
      </div>

      {/* Company */}
      <div className="flex items-center gap-2 my-2">
        <Button
          type="button"
          className="p-6"
          variant="outline"
          size="icon"
        >
          <Avatar>
            <AvatarImage
              src={job?.company?.logo}
              alt={job?.company?.name || "Company"}
            />
          </Avatar>
        </Button>

        <div>
          <h1 className="font-medium text-lg">
            {job?.company?.name || "Company"}
          </h1>

          <p className="text-sm text-gray-500">
            {job?.location || "India"}
          </p>
        </div>
      </div>

      {/* Job information */}
      <div>
        <h1 className="font-bold text-lg my-2">
          {job?.title || "Job Title"}
        </h1>

        <p className="text-sm text-gray-600 line-clamp-2">
          {job?.description || "No description available"}
        </p>
      </div>

      {/* Job details */}
      <div className="flex items-center gap-2 mt-4 flex-wrap">
        <Badge
          className="text-blue-700 font-bold"
          variant="ghost"
        >
          {job?.position} Positions
        </Badge>

        <Badge
          className="text-[#F83002] font-bold"
          variant="ghost"
        >
          {job?.jobType}
        </Badge>

        <Badge
          className="text-[#7209b7] font-bold"
          variant="ghost"
        >
          {job?.salary} LPA
        </Badge>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 mt-4">
        <Button
          type="button"
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
        >
          Details
        </Button>

        <Button
          type="button"
          className="bg-[#7209b7] hover:bg-[#5d078f]"
        >
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;