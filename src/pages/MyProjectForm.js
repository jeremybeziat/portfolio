import React from "react";
import Header from "../components/Header";

const MyProjectForm = () => {
  return (
    <div style={{ margin: 0, height: "100vh", overflow: "hidden" }}>
      <Header />
      <iframe
        src="https://tally.so/r/wdYA9K?transparentBackground=1"
        title="null"
        style={{
          position: "absolute",
          paddingTop: "150px",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
        allowFullScreen
      ></iframe>
      <div></div>
    </div>
  );
};

export default MyProjectForm;
