import { FC, memo, useMemo } from "react";

import { MenuList } from "../../../../shared/ui/menu/MenuList/MenuList";
import { getCoursesTags } from "../../helpers/getCoursesTags";

import { TCourse } from "../../types/coursesTypes";

type TCoursesMenu = {
  courses: TCourse[];
  initialValue?: string;
  onSelect: (name: string) => void;
};

export const CoursesMenu: FC<TCoursesMenu> = memo(
  ({ initialValue, onSelect, courses }) => {
    const tags = useMemo(
      () => ["Все темы", ...getCoursesTags(courses)],
      [courses],
    );
    return (
      <MenuList initialValue={initialValue} onSelect={onSelect} list={tags} />
    );
  },
);
