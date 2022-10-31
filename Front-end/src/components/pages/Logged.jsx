import React from "react";
import Default from "../templates/Default";
import { useParams } from "react-router-dom";
import { LoggedCourseWrapper, Loading } from "../organisms";
import { LoggedUserTitle } from "../atoms";

export default function Logged() {
  const { userId } = useParams();
  const [userCourses, setUserCourses] = React.useState([]);
  const [courses, setCourses] = React.useState([]);
  const [userName, setUserName] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://635d46b2fc2595be265733ce.mockapi.io/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUserCourses(data.ownedCourses);
        setUserName(data.name);
        console.log("Objeto userCourses e userName montado");
      });

    fetch("https://635d46b2fc2595be265733ce.mockapi.io/courses")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        console.log("Objeto Courses montado");
        setIsLoading(false);
      });
  }, []);

  React.useEffect(() => {}, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Default>
      <main>
        <LoggedUserTitle userName={userName} />
        <LoggedCourseWrapper userCourses={userCourses} courses={courses} />
      </main>
    </Default>
  );
}
