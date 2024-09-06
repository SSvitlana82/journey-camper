import BookForm from "../BookForm/BookForm";
import style from "./Reviews.module.css";
import { useState } from "react";
import ReviewsBox from "../ReviewsBox/ReviewsBox";

const Reviews = ({ reviews }) => {
  console.log(reviews);
  return (
    <div className={style.container}>
      <ul>
        {reviews.map((data) => {
          return (
            <li key={data._id}>
              <ReviewsBox data={data} />
            </li>
          );
        })}
      </ul>
      ;
      <BookForm />
    </div>
  );
};

export default Reviews;
