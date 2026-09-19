import { setUser } from "@/redux/authSlice";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "../ui/toast";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(
        `${USER_API_END_POINT}/logout`,
        { withCredentials: true }
      );

      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">

        {/* Logo */}
        <Link to="/" className="cursor-pointer">
          <h1 className="text-2xl font-bold tracking-tight">
            x<span className="text-[#2242c4]">Skills</span>
          </h1>
        </Link>

        {/* Navigation + User */}
        <div className="flex items-center gap-12">

          {/* Navigation */}
          <ul className="flex font-medium items-center gap-6">

            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <Link
                    to="/admin/companies"
                    className="text-gray-700 hover:text-[#2242c4] transition-colors"
                  >
                    Companies
                  </Link>
                </li>

                <li>
                  <Link
                    to="/admin/jobs"
                    className="text-gray-700 hover:text-[#2242c4] transition-colors"
                  >
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/"
                    className="text-gray-700 hover:text-[#2242c4] transition-colors"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/jobs"
                    className="text-gray-700 hover:text-[#2242c4] transition-colors"
                  >
                    Jobs
                  </Link>
                </li>

                <li>
                  <Link
                    to="/browse"
                    className="text-gray-700 hover:text-[#2242c4] transition-colors"
                  >
                    Browse
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Authentication */}
          {!user ? (
            <div className="flex items-center gap-2">

              <Link to="/login">
                <Button
                  variant="outline"
                  className="border-[#2242c4] text-[#2242c4] hover:bg-[#2242c4] hover:text-white cursor-pointer"
                >
                  Login
                </Button>
              </Link>

              <Link to="/signup">
                <Button className="bg-[#bc255c] hover:bg-[#941644] text-white cursor-pointer">
                  Signup
                </Button>
              </Link>

            </div>
          ) : (
            <Popover>

              {/* Avatar */}
              <PopoverTrigger>
                <Avatar className="cursor-pointer border-2 border-[#2242c4] hover:scale-105 transition-transform">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt={user?.fullname || "User"}
                  />
                </Avatar>
              </PopoverTrigger>

              {/* Profile Popover */}
              <PopoverContent className="w-80 bg-white border border-gray-200 shadow-lg">

                <div>

                  {/* User information */}
                  <div className="flex gap-3 space-y-2 pb-3 border-b">

                    <Avatar className="border border-gray-200">
                      <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt={user?.fullname || "User"}
                      />
                    </Avatar>

                    <div className="min-w-0">
                      <h4 className="font-semibold text-gray-900">
                        {user.fullname}
                      </h4>

                      <p className="text-sm text-gray-500 truncate">
                        {user?.profile?.bio || "Welcome to xSkills"}
                      </p>
                    </div>

                  </div>

                  {/* Menu */}
                  <div className="flex flex-col my-3 text-gray-600">

                    {user && user.role === "student" && (
                      <div className="flex w-fit items-center gap-2 cursor-pointer hover:text-[#2242c4] transition-colors">

                        <User2 size={18} />

                        <Button
                          variant="link"
                          className="p-0 text-gray-600 hover:text-[#2242c4]"
                          asChild
                        >
                          <Link to="/profile">
                            View Profile
                          </Link>
                        </Button>

                      </div>
                    )}

                    <div className="flex w-fit items-center gap-2 cursor-pointer hover:text-red-500 transition-colors">

                      <LogOut size={18} />

                      <Button
                        onClick={logoutHandler}
                        variant="link"
                        className="p-0 text-gray-600 hover:text-red-500 cursor-pointer"
                      >
                        Logout
                      </Button>

                    </div>

                  </div>

                </div>

              </PopoverContent>

            </Popover>
          )}

        </div>
      </div>
    </div>
  );
};

export default Navbar;