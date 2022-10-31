import React from "react";
import Default from "../templates/Default";
import { useParams } from "react-router-dom";
import { LoggedCourseWrapper } from "../organisms";
import { LoggedUserTitle } from "../atoms";

export default function Logged() {
  const { userId } = useParams();
  const [userCourses, setUserCourses] = React.useState([]);
  const [courses, setCourses] = React.useState([]);
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    fetch("https://635d46b2fc2595be265733ce.mockapi.io/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data));
    console.log("Objeto Courses montado");
  }, []);

  React.useEffect(() => {
    fetch(`https://635d46b2fc2595be265733ce.mockapi.io/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUserCourses(data.ownedCourses);
        console.log("Objeto userCourses montado");
      });
  }, []);

  React.useEffect(() => {
    fetch(`https://635d46b2fc2595be265733ce.mockapi.io/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data.name);
        console.log("Objeto user montado");
      });
  }, []);

  return (
    <Default>
      <main>
        <LoggedUserTitle userName={user} />
        <LoggedCourseWrapper userCourses={userCourses} courses={courses} />
      </main>
    </Default>
  );
}
