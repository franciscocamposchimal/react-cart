import React from "react";
import PropTypes from "prop-types";
import ResumeItem from "../ResumeItem";

const Resume = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return <ResumeItem {...item} key={item.id} />;
      })}
    </div>
  );
};

Resume.propTypes = {
  items: PropTypes.array,
};

export default Resume;
