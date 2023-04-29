import React from "react";
import { Criteria as CriteriaProps } from "../../types";

const Criteria = (props: CriteriaProps) => {
  const { type = "", text = "" } = props;
  if (type === "plain_text") {
    return <div>{text}</div>;
  }
  // const variables = Object.keys(variable);
  // const replaced = text.replace();
  return <div>{text}</div>;
};

export default Criteria;
