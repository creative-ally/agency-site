"use client";
import Banner from "@/components/Banner/banner";
import Globalbtn from "@/components/GlobalButton/globalbtn";
import Projects from "@/components/Home/Projects/Projects";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="my-4">
      <Banner />
      <Projects />
    </div>
  );
}
