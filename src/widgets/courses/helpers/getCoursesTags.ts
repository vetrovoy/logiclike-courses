import { TCourse } from "../types/coursesTypes";

export const getCoursesTags = (courses: TCourse[]): string[] => {
  const tags: { [key: string]: string } = {};

  courses.forEach((course) => {
    course.tags.forEach((tag) => {
      tags[tag] = tag;
    });
  });

  return Object.values(tags);
};
