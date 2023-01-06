import React from "react";
import { useMatch } from "react-router-dom";

const Posts = (props) => {
  ///posts/:year/:month
  const match = useMatch("posts/:year/:month");
  console.log(match);
  const year = match.params.year;
  const month = match.params.month;
  return (
    <div>
      <h1>Posts</h1>
      Year: {year} , Month: {month}
    </div>
  );
};

export default Posts;
