import { FC, useEffect, useMemo, useState } from "react";

import { sortCourses } from "../../helpers/sortCourses";

import { fetchCourses } from "../../api/fetchCourses";

import { TCourse } from "../../types/coursesTypes";

import { Sidebar } from "../../../../shared/ui/sidebar/Sidebar";

import { CoursesMenu } from "../CoursesMenu/CoursesMenu";

import { CoursesList } from "./CoursesList/CoursesList";

import classes from "./Courses.module.scss";

type TStatus = "success" | "idle" | "error" | "loading";

const initialSortName = "Все темы";

export const Courses: FC = () => {
  const [sortName, setSortName] = useState<string>(initialSortName);

  const [status, setStatus] = useState<TStatus>("idle");
  const [courses, setCourses] = useState<TCourse[]>([]);

  useEffect(() => {
    (async () => {
      try {
        setStatus("loading");
        const courses = await fetchCourses();
        setCourses(courses);
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    })();
  }, []);

  const coursesSorted = useMemo(() => {
    if (sortName === initialSortName) return courses;
    return sortCourses(courses, sortName);
  }, [courses, sortName]);

  return (
    <section className={classes.container}>
      {status === "loading" && <p>loading...</p>}
      {status === "error" && <p>error</p>}

      {status === "success" && courses.length !== 0 && (
        <>
          <Sidebar>
            <CoursesMenu
              initialValue={initialSortName}
              onSelect={(name) => setSortName(name)}
              courses={courses}
            />
          </Sidebar>
          <CoursesList courses={coursesSorted} />
        </>
      )}
    </section>
  );
};
