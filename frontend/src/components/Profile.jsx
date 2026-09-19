import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

const Profile = () => {
  useGetAppliedJobs();

  const [open, setOpen] = useState(false);

  const { user } = useSelector((store) => store.auth);
  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={user?.profile?.profilePhoto || ""}
                alt={user?.fullname || "Profile"}
              />
            </Avatar>

            <div>
              <h1 className="font-medium text-xl">
                {user?.fullname || "User"}
              </h1>

              <p>
                {user?.profile?.bio || "No bio added"}
              </p>
            </div>
          </div>

          <Button
            type="button"
            onClick={() => setOpen(true)}
            variant="outline"
          >
            <Pen />
          </Button>
        </div>

        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email || "N/A"}</span>
          </div>

          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber || "N/A"}</span>
          </div>
        </div>

        <div className="my-5">
          <h1>Skills</h1>

          <div className="flex items-center gap-1 flex-wrap">
            {user?.profile?.skills?.length ? (
              user.profile.skills.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">
            Resume
          </Label>

          {user?.profile?.resume ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={user.profile.resume}
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              {user?.profile?.resumeOriginalName ||
                "View Resume"}
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">
          Applied Jobs
        </h1>

        <AppliedJobTable />
      </div>

      <UpdateProfileDialog
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default Profile;