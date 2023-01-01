import styles from "./MenuButton.module.scss";
import { RxPlusCircled } from "react-icons/rx";
import { useEffect, useState, useCallback } from "react";

export type MenuButtonProps = {
  onClick?: () => void;
};

export const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div id="tooltip" className={styles.tooltip} draggable>
      <RxPlusCircled
        onClick={handleClick}
        className={styles.plusicon}
      ></RxPlusCircled>
    </div>
  );
};
