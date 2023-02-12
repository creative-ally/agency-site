"use client";
import Banner from "@/components/Banner/banner";
import Globalbtn from "@/components/GlobalButton/globalbtn";
import Projects from "@/components/Home/Projects/Projects";
import { Button } from "@mui/material";
import Blogs from "@/components/Blogs/blogs"
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <div className="my-4">
      <Banner />
      <Services />
      <Projects />
      <Blogs/>
    </div>
  );
}
