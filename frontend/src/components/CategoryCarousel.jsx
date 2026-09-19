import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { Button } from "./ui/button";

const category = [
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
  "Embedded Systems Engineer",
  "Network Engineer",
  "System Administrator",
  "IT Support Specialist",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((cat) => (
            <CarouselItem
              key={cat}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Button
                type="button"
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-full hover:bg-[#6A38C2] hover:text-white transition-colors"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;