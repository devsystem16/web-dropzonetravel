import React from "react";
import { Parallax } from "react-parallax";
import "./parallax.css";
import CardPersonalParallax from "./CardPersonalParallax";
const ParallaxImage = ({ img, titulo, Textcss = "claro" }) => {
  const claseCss = `text-content-parallax ${Textcss}`;
  return (
    <Parallax
      bgImage={img} ///
      strength={800}
      bgImageStyle={{ backgroundSize: "cover" }}
      style={{ height: "100vh" }} // 2
    >
      <CardPersonalParallax></CardPersonalParallax>
    </Parallax>
  );
};

export default ParallaxImage;
