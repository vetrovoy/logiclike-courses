import { FC, memo } from "react";

import classes from "./CardTag.module.scss";

type TCardTag = {
  tag: string;
};

export const CardTag: FC<TCardTag> = memo(({ tag }) => {
  return <span className={classes.tag}>{tag}</span>;
});
