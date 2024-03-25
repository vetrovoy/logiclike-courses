import { FC, memo } from "react";

import { Card } from "../../../../entitities/Card/Card/Card";
import { TCourse } from "../../types/coursesTypes";

type TCoursesCard = {
  course: TCourse;
};

export const CoursesCard: FC<TCoursesCard> = memo(({ course }) => {
  return (
    <Card bgColor={course.bgColor} name={course.name} image={course.image} />
  );
});
