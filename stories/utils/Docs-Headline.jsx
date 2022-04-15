import React from "react";
import PropTypes from "prop-types";

const styles = {
  wrapper: {
    position: "relative",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "20px",
    paddingTop: "20px",
    borderBottom: "solid 1px #D8D8D8",
  },
  container: {
    marginTop: "60px",
  },
  spacer: {
    height: "40px",
    width: "100%",
    display: "block",
  },
  weight: {
    minWidth: "300px",
    textAlign: "right",
  },
  paragrapgh: {
    display: "inline",
    marginLeft: "20px",
  },
};

const Spacer = () => <div style={styles.spacer}></div>;

const DocsWeight = (props) => (
  <div style={styles.wrapper}>
    <p className="">
      <small>{props.subtitle}</small>
    </p>
    <div style={styles.weight}>
      <p style={styles.paragrapgh} className="">
        <small>Font size / leading</small>
      </p>
      <p style={styles.paragrapgh} className="">
        <small>Weight</small>
      </p>
    </div>
  </div>
);

const DocsHeadline = (props) => (
  <div className="container mx-auto">
    <div style={styles.container}>
      <h4 className="">{props.title}</h4>
      {props.showSubtitle ? <DocsWeight {...props} /> : <Spacer />}
    </div>
  </div>
);

DocsHeadline.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

DocsHeadline.defaultProps = {
  title: "Desktop",
  subtitle: "Headings",
  showSubtitles: false,
};

export default DocsHeadline;
