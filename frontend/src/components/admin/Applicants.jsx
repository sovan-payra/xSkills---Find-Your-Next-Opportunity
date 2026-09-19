import { setAllApplicants } from "@/redux/applicationSlice";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../shared/Navbar";
import ApplicantsTable from "./ApplicantsTable";

const Applicants = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const applicants =
    useSelector((store) => store.application?.applicants) || [];

  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_END_POINT}/${id}/applicants`,
          {
            withCredentials: true,
          }
        );

        // console.log("Applicants API response:", res.data);

        if (res.data.success) {
          dispatch(
            setAllApplicants(res.data.applications || [])
          );
        }
      } catch (error) {
        console.log("Get applicants error:", error);
        console.log(
          "Backend response:",
          error.response?.data
        );
      }
    };

    if (id) {
      fetchAllApplicants();
    }
  }, [dispatch, id]);

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-bold text-xl my-5">
          Applicants {applicants.length}
        </h1>

        <ApplicantsTable />
      </div>
    </div>
  );
};

export default Applicants;