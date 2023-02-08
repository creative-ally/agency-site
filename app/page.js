'use client'
import Globalbtn from "@/components/GlobalButton/globalbtn";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="my-4">
      <h1 className="text-center font-bold text-neutral dark:text-dark-base-100 text-3xl">
        Hello ki khobor?
      </h1>
      <Globalbtn>Discover More</Globalbtn>
    </div>
  );
}
