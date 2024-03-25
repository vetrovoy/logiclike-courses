import { FC, memo } from "react";

import { TCourse } from "../../../types/coursesTypes";
import { CoursesCard } from "../../CoursesCard/CoursesCard";

import classes from "./CoursesList.module.scss";

type TCoursesList = {
  courses: TCourse[];
};

export const CoursesList: FC<TCoursesList> = memo(({ courses }) => {
  return (
    <div className={classes.list}>
      {courses.map((course) => {
        return <CoursesCard key={course.id} course={course} />;
      })}
    </div>
  );
});
