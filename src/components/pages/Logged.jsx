import React from "react";
import Default from "../templates/Default";
import { LoggedCourseWrapper } from "../organisms";

export default function Logged() {
  return (
    <Default>
      <main>
        <h1 className="half mx-auto">Nome do usuário</h1>
        <LoggedCourseWrapper />
      </main>
    </Default>
  );
}
