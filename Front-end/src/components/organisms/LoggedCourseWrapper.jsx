import React from "react";
import { LoggedCourseCard } from "../molecules";

export default function LoggedCourseWrapper(props) {
  return (
    <div>
      {props.userCourses.map((userCourse) => (
        <LoggedCourseCard
          src={props.courses[userCourse].courseImage}
          courseTitle={props.courses[userCourse].courseTitle}
          shortText={props.courses[userCourse].courseDescription}
          moreText={props.courses[userCourse].courseText}
          key={props.courses[userCourse].id}
        />
      ))}
    </div>
  );
}
