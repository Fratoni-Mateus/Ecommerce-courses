import React from "react";
import { PricedCourseCard } from "../molecules";

export default function SellingCourseWrapper(props) {
  return (
    <div>
      {props.courses
        .sort((a, b) => a.courseTitle.localeCompare(b.courseTitle))
        .map((course) => (
          <PricedCourseCard
            key={course.id}
            src={course.courseImage}
            courseTitle={course.courseTitle}
            shortText={course.courseDescription}
            moreText={course.courseText}
            price={`R$ ${course.coursePrice}`}
          />
        ))}
    </div>
  );
}
