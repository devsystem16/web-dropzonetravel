import React from "react";
import { Parallax } from "react-parallax";
import "./parallax.css";
const ParallaxImage = ({ id = "", img, titulo, Textcss = "claro" }) => {
  const claseCss = `text-content-parallax ${Textcss}`;
  return (
    <Parallax
      bgImage={img} ///
      strength={600}
      bgImageStyle={{ backgroundSize: "cover" }}
      style={{ height: "100vh" }} // 2
    >
      <div
        id={id}
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          left: "40%",
        }}
      >
        <h1 className={claseCss} style={{ fontWeight: "bold" }}>
          {titulo}
        </h1>
      </div>
    </Parallax>
  );
};

export default ParallaxImage;
