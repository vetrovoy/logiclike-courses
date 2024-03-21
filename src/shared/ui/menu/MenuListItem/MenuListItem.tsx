import { FC, MouseEvent } from "react";

import classes from "./MenuListItem.module.scss";

type TMenuListItem = {
  isSelected: boolean;
  onSelect: (name: string) => void;
  name: string;
};

export const MenuListItem: FC<TMenuListItem> = ({
  isSelected = false,
  onSelect,
  name,
}) => {
  const handleSelect = (e: MouseEvent<HTMLButtonElement>) => {
    onSelect(name);
  };

  const menuItemClass = isSelected
    ? `${classes.active} ${classes.button}`
    : classes.button;

  return (
    <button onClick={handleSelect} className={menuItemClass}>
      {name}
    </button>
  );
};
