import React from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const { recipeDetail } = useSelector((state) => state);
  const { summary } = recipeDetail;
  return <div dangerouslySetInnerHTML={{ __html: summary }}></div>;
};

export default Summary;
