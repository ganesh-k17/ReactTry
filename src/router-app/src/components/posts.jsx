import React from "react";
import { useLocation, useMatch } from "react-router-dom";
import queryString from 'querystring'

const Posts = (props) => {
  ///posts/:year/:month
  const match = useMatch("posts/:year/:month");
  const location = useLocation();

  console.log(location);
  console.log(queryString.parse(location.search));

  const { sortBy } = queryString.parse(location.search);  // we assume sortBy is the query string, if we dont know exactly what is querystring we can get it from the direct object from query-string method

  console.log(sortBy);

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
