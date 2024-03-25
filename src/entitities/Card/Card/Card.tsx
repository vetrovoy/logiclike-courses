import { FC, memo } from "react";

import { CardTag } from "../CardTag/CardTag";

import classes from "./Card.module.scss";

type TCard = {
  name: string;
  image: string;
  bgColor: string;
};

export const Card: FC<TCard> = memo(({ name, image, bgColor }) => {
  return (
    <div className={classes.card}>
      <div className={classes.imageBg} style={{ backgroundColor: bgColor }}>
        <div className={classes.imageContainer}>
          <img
            loading="lazy"
            className={classes.image}
            src={image}
            width={144}
            height={144}
            alt={name}
          />
        </div>
      </div>
      <div className={classes.tag}>
        <CardTag tag={name} />
      </div>
    </div>
  );
});
