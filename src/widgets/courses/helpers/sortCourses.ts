import { TCourse } from "../types/coursesTypes";

export const sortCourses = (courses: TCourse[], tag: string) => {
  const sorted = courses.filter((course) => course.tags.includes(tag));
  return sorted;
};
