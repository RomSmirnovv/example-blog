"use client";

import cn from "classnames";
import LikeIcon from "./Like.svg";
import styles from "./Like.module.css";
import { LikeProps } from "./Like.props";

export const Like = ({
  isActive,
  onClick,
  disabled = false,
  className,
}: LikeProps): JSX.Element => {
  return (
    <button
      type="button"
      className={cn(
        styles["like"],
        {
          [styles["like-active"]]: isActive,
          [styles["like-inactive"]]: !isActive,
        },
        className,
      )}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={isActive}
      aria-label={isActive ? "Убрать лайк" : "Поставить лайк"}
    >
      <span className={styles["like-icon-wrap"]}>
        <LikeIcon className={styles["like-icon"]} />
      </span>
    </button>
  );
};
