"use client";

import { KeyboardEvent, useEffect, useState } from "react";
import { RatingProps } from "./Rating.props";
import StartIcon from "./star.svg";
import cn from "classnames";
import styles from "./Rating.module.css";

export const Rating = ({
  isEtitable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>),
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateArray = new Array(5).fill(null).map((_, i: number) => {
      const starNumber = i + 1;
      const isFilled = i < currentRating;

      return (
        <button
          key={i}
          type="button"
          className={cn(styles["star-button"], {
            [styles.editable]: isEtitable,
          })}
          onMouseEnter={() => changeDisplay(starNumber)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(starNumber)}
          onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) =>
            isEtitable && handleKeyDown(starNumber, e)
          }
          disabled={!isEtitable}
          aria-label={
            isEtitable
              ? `Поставить рейтинг ${starNumber} из 5`
              : `Рейтинг: ${starNumber} из 5`
          }
          aria-pressed={isEtitable ? rating === starNumber : undefined}
        >
          <StartIcon
            className={cn(styles.star, {
              [styles.filled]: isFilled,
            })}
            aria-hidden="true"
          />
        </button>
      );
    });

    setRatingArray(updateArray);
  };

  const changeDisplay = (value: number) => {
    if (!isEtitable) {
      return;
    }

    constructRating(value);
  };

  const onClick = (value: number) => {
    if (!isEtitable || !setRating) {
      return;
    }

    setRating(value);
  };

  const handleKeyDown = (
    value: number,
    e: KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (!setRating) {
      return;
    }

    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      setRating(value);
    }
  };

  return (
    <div
      {...props}
      className={cn(styles["rating"], props.className)}
      role={isEtitable ? "radiogroup" : undefined}
      aria-label={isEtitable ? "Выберите рейтинг" : "Рейтинг"}
    >
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
