import React from "react";
import Default from "../templates/Default";
import { LoggedCourseCard } from "../organisms";

export default function Logged() {
  return (
    <Default>
      <main>
        <h1 className="half mx-auto">Nome do usuário</h1>
        <LoggedCourseCard />
      </main>
    </Default>
  );
}
