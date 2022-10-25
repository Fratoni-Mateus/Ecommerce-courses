import React from "react";
import Default from "../templates/Default";
import { CourseCard } from "../organisms/";

export default function Home() {
  console.log("Home.jsx rodando");
  return (
    <Default>
      <CourseCard />
    </Default>
  );
}
