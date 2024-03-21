import { api } from "../../../shared/api/api";

import { TCourse } from "../types/coursesTypes";

export const fetchCourses = async () => {
  try {
    const courses = await api.get<TCourse[]>("docs/courses.json");

    return courses;
  } catch (error) {
    console.error(
      "An unexpected error occurred in fetchCourses request:",
      error,
    );
    throw error;
  }
};
