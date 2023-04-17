import React, { lazy, Suspense } from "react";

// import YouTube from "react-youtube";
const YouTube = lazy(() => import("react-youtube"));

const Videos = () => {
  // const videoId = "cyd2elFIJPo";
  const opts = {
    height: "200",
    width: "100%",

    playerVars: {
      autoplay: 0,
      modestbranding: 0,
    },
  };

  return (
    <section id="videosYoutube" className="why_section layout_padding">
      <div className="container-fluid">
        <div className="custom_heading-container">
          <center>
            <h2>Vive nuestras maravillosas experiencias</h2>
          </center>
        </div>
        <center></center>
        <section className="client_section layout_padding">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container-fluid">
                  <div className="row" style={{ marginLeft: "0%" }}>
                    <div className="col-lg-3">
                      <Suspense fallback={<div>Loading...</div>}>
                        <YouTube videoId="cyd2elFIJPo" opts={opts} />
                      </Suspense>
                    </div>

                    <div className="col-lg-3">
                      <Suspense fallback={<div>Loading...</div>}>
                        <YouTube videoId="GLvc57YPQN8" opts={opts} />
                      </Suspense>
                    </div>

                    <div className="col-lg-3">
                      <Suspense fallback={<div>Loading...</div>}>
                        <YouTube videoId="aJKhYmgRg54" opts={opts} />
                      </Suspense>
                    </div>

                    <div className="col-lg-3">
                      <Suspense fallback={<div>Loading...</div>}>
                        <YouTube videoId="BF3-dXiA_k0" opts={opts} />
                      </Suspense>
                    </div>

                    <div className="col-lg-3">
                      <Suspense fallback={<div>Loading...</div>}>
                        <YouTube videoId="xvgZmmrJ3Yg" opts={opts} />
                      </Suspense>
                    </div>

                    <div className="col-lg-3">
                      <Suspense fallback={<div>Loading...</div>}>
                        <YouTube videoId="p2DDd7s3_C0" opts={opts} />
                      </Suspense>
                    </div>

                    <div className="col-lg-3">
                      <Suspense fallback={<div>Loading...</div>}>
                        <YouTube videoId="cpf29L8IXas" opts={opts} />
                      </Suspense>
                    </div>

                    <div className="col-lg-3">
                      <Suspense fallback={<div>Loading...</div>}>
                        <YouTube videoId="V0CHYFcwcTM" opts={opts} />
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-3">
                      <Suspense fallback={<div>Loading...</div>}>
                        <YouTube videoId="n-k3g8IOq4g" opts={opts} />
                      </Suspense>
                    </div>

                    <div className="col-lg-3">
                      <Suspense fallback={<div>Loading...</div>}>
                        <YouTube videoId="Seo0lxA3mKU" opts={opts} />
                      </Suspense>
                    </div>

                    <div className="col-lg-3">
                      <Suspense fallback={<div>Loading...</div>}>
                        <YouTube videoId="EYnvKe0t-i0" opts={opts} />
                      </Suspense>
                    </div>

                    <div className="col-lg-3">
                      <Suspense fallback={<div>Loading...</div>}>
                        <YouTube videoId="gCnU2vPub2A" opts={opts} />
                      </Suspense>
                    </div>

                    <div className="col-lg-3">
                      <Suspense fallback={<div>Loading...</div>}>
                        <YouTube videoId="PPo3xnC20-s" opts={opts} />
                      </Suspense>
                    </div>

                    <div className="col-lg-3">
                      <Suspense fallback={<div>Loading...</div>}>
                        <YouTube videoId="yz3Q1TwTdpo" opts={opts} />
                      </Suspense>
                    </div>

                    <div className="col-lg-3">
                      <Suspense fallback={<div>Loading...</div>}>
                        <YouTube videoId="jxXoyth2DZs" opts={opts} />
                      </Suspense>
                    </div>

                    <div className="col-lg-3">
                      <Suspense fallback={<div>Loading...</div>}>
                        <YouTube videoId="NxJ6h6y6xfk" opts={opts} />
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Videos;
