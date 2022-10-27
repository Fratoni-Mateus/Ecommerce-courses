import React from "react";
import Default from "../templates/Default";
import { CourseCard } from "../molecules/";

export default function Logged() {
  return (
    <Default>
      <h2>Nome do usuário</h2>
      <CourseCard />
    </Default>
  );
}
