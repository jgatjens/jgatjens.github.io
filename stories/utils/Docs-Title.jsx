import React from "react";
import PropTypes from "prop-types";

const styles = {
  container: {
    position: "relative",
    width: "100%",
    paddingBottom: "40px",
    marginBottom: "40px",
    borderBottom: "solid 1px #D8D8D8",
  },
  title: {
    fontSize: "16px",
    paddingBottom: "10px",
    fontWeight: "bold",
    letterSpacing: "2.5px",
  },
  subtitle: {
    fontSize: "26px",
  },
};

const DocsTitle = (props) => (
  <div className="container mx-auto">
    <div style={styles.container}>
      <h4 style={styles.title} className="flex">
        {props.icon ? <span className="pr-3">{props.icon}</span> : null}
        {props.title}
      </h4>
      <h3 style={styles.subtitle}>{props.subtitle}</h3>
    </div>
  </div>
);

DocsTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.node,
};

DocsTitle.defaultProps = {
  title: "jgatjens.com",
  subtitle: "SubTitle",
  icon: null,
};

export default DocsTitle;
