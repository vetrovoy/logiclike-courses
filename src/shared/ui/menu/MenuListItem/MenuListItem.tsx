import { FC, memo } from "react";

import classes from "./MenuListItem.module.scss";

type TMenuListItem = {
  isSelected: boolean;
  onSelect: (name: string) => void;
  name: string;
};

export const MenuListItem: FC<TMenuListItem> = memo(
  ({ isSelected = false, onSelect, name }) => {
    const handleSelect = () => {
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
  },
);
