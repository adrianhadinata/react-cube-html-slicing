import React from "react";

import propTypes from "prop-types";

export default function Sections(props) {
  return <section className={props.className}>{props.children}</section>;
}

Sections.propTypes = {
  className: propTypes.string,
};
