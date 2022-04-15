import React from "react";

const styles = {
  container: {
    position: "relative",
    width: "100%",
    borderBottom: "solid 1px #D8D8D8",
    minHeight: "160px",
    display: "flex",
    alignItems: "center",
  },
  span: {
    position: "absolute",
    right: 0,
    top: "48%",
  },
};

const DocsBlock = (props) => (
  <div style={styles.container}>
    {props.children}
    <span style={styles.span}>
      {props.size}, {props.weight}
    </span>
  </div>
);

export default DocsBlock;
