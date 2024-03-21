import { FC, ReactNode } from "react";

import classes from "./Sidebar.module.scss";

type TSidebar = {
  children: ReactNode;
};

export const Sidebar: FC<TSidebar> = ({ children }) => {
  return <div className={classes.sidebar}>{children}</div>;
};
