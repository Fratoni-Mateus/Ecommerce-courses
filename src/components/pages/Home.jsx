import React from "react";
import Default from "../templates/Default";
import { HomeHeader } from "../molecules/";
import { PricedCourseCard } from "../organisms/";

export default function Home() {
  return (
    <Default>
      <HomeHeader />
      <PricedCourseCard />
      <PricedCourseCard />
      <PricedCourseCard />
    </Default>
  );
}
