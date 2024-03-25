import { FC, useCallback, useState } from "react";

import { MenuListItem } from "../MenuListItem/MenuListItem";

import classes from "./MenuList.module.scss";

type TMenuList = {
  list: string[];
  initialValue?: string;
  onSelect?: (name: string) => void;
};

export const MenuList: FC<TMenuList> = ({
  onSelect,
  initialValue = "",
  list,
}) => {
  const [activeMenuName, setActiveMenuName] = useState<string>(initialValue);

  const handleMenuSelect = useCallback(
    (name: string) => {
      setActiveMenuName(name);
      if (onSelect) {
        onSelect(name);
      }
    },
    [onSelect],
  );

  return (
    <div className={classes.menu}>
      {list.map((name, index) => {
        const isMenuItemActive = name === activeMenuName;
        return (
          <MenuListItem
            isSelected={isMenuItemActive}
            onSelect={handleMenuSelect}
            key={index}
            name={name}
          />
        );
      })}
    </div>
  );
};
