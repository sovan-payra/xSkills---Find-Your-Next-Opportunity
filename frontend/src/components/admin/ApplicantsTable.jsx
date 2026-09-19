import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "../ui/toast";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { setAllApplicants } from "@/redux/applicationSlice";

const shortlistingStatus = ["accepted", "rejected"];

const ApplicantsTable = () => {
  const dispatch = useDispatch();

  const applicants =
    useSelector((store) => store.application?.applicants) || [];

  const statusHandler = async (status, id) => {
    console.log("BUTTON CLICKED:", status, id);

    try {
      // console.log("Status:", status);
      // console.log("Application ID:", id);

      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        {
          status,
        },
        {
          withCredentials: true,
        }
      );

      // console.log("API RESPONSE:", res.data);

      if (res.data.success) {
        toast.success(res.data.message);

        const updatedApplicants = applicants.map((item) =>
          item._id === id
            ? {
                ...item,
                status: status.toLowerCase(),
              }
            : item
        );

        dispatch(setAllApplicants(updatedApplicants));
      }
    } catch (error) {
      console.log("Update application status error:", error);
      console.log(
        "Backend response:",
        error.response?.data
      );

      toast.error(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div>
      <Table>
        <TableCaption>
          A list of your recent applied users
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {applicants.length > 0 ? (
            applicants.map((item) => (
              <TableRow key={item._id}>
                <TableCell>
                  {item?.applicant?.fullname || "N/A"}
                </TableCell>

                <TableCell>
                  {item?.applicant?.email || "N/A"}
                </TableCell>

                <TableCell>
                  {item?.applicant?.phoneNumber || "N/A"}
                </TableCell>

                <TableCell>
                  {item?.applicant?.profile?.resume ? (
                    <a
                      className="text-blue-600 cursor-pointer hover:underline"
                      href={item.applicant.profile.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.applicant.profile.resumeOriginalName ||
                        "View Resume"}
                    </a>
                  ) : (
                    <span>NA</span>
                  )}
                </TableCell>

                <TableCell>
                  {item?.createdAt
                    ? item.createdAt.split("T")[0]
                    : "N/A"}
                </TableCell>

                <TableCell>
                  <span
                    className={
                      item?.status === "accepted"
                        ? "text-green-600 font-semibold capitalize"
                        : item?.status === "rejected"
                        ? "text-red-600 font-semibold capitalize"
                        : "text-yellow-600 font-semibold capitalize"
                    }
                  >
                    {item?.status || "pending"}
                  </span>
                </TableCell>

                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal className="cursor-pointer" />
                    </PopoverTrigger>

                    <PopoverContent className="w-32">
                      {shortlistingStatus.map((status) => (
                        <button
                          key={status}
                          type="button"
                          onClick={() =>
                            statusHandler(status, item._id)
                          }
                          className="block w-full text-left my-2 cursor-pointer hover:text-blue-600"
                        >
                          <span className="capitalize">
                            {status}
                          </span>
                        </button>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={7}
                className="text-center py-8"
              >
                No applicants found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;