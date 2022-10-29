import React from "react";
import Default from "../templates/Default";
import { HomeHeader } from "../molecules/";
import { SellingCourseWrapper } from "../organisms/";

export default function Home() {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    fetch("https://635d46b2fc2595be265733ce.mockapi.io/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <Default>
      <main>
        <HomeHeader />
        <SellingCourseWrapper courses={courses} />
      </main>
    </Default>
  );
}
