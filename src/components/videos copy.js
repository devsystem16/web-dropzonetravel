import React, { lazy, Suspense, useState } from "react";

// import YouTube from "react-youtube";
const YouTube = lazy(() => import("react-youtube"));

const Videos = () => {
  const videoId = "cyd2elFIJPo";
  const opts = {
    height: "200",
    width: "100%",

    playerVars: {
      autoplay: 0,
      modestbranding: 0,
    },
  };

  const [showPlayer, setShowPlayer] = useState(false);
  const handleButtonClick = () => {
    setShowPlayer(true);
  };

  return (
    <section id="videosYoutube" className="why_section layout_padding">
      <div className="container-fluid">
        <section className="client_section layout_padding">
          <div className="container-fluidss">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {/* <div className="client_container layout_padding2"> */}

                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-3">
                        <button onClick={handleButtonClick}>
                          Reproducir video
                        </button>
                        {showPlayer && (
                          <Suspense
                            fallback={<div>Cargando reproductor...</div>}
                          >
                            <YouTube videoId="cyd2elFIJPo" opts={opts} />
                          </Suspense>
                        )}

                        {/* <Suspense fallback={<div>Loading...</div>}>
                          <YouTube
                            videoId="cyd2elFIJPo"
                            opts={opts}
                            // onReady={handleRequestError}
                            onRequestError={handleRequestError}
                          />
                        </Suspense> */}
                      </div>

                      <div className="col-lg-3">
                        <Suspense fallback={<div>Loading...</div>}>
                          <YouTube
                            videoId="GLvc57YPQN8"
                            opts={opts}
                            // onReady={handleRequestError}
                            // onRequestError={handleRequestError}
                          />
                        </Suspense>
                      </div>

                      <div className="col-lg-3">
                        <Suspense fallback={<div>Loading...</div>}>
                          <YouTube
                            videoId="aJKhYmgRg54"
                            opts={opts}
                            // onRequestError={handleRequestError}
                          />
                        </Suspense>
                      </div>

                      {/* <div className="col-lg-3">
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
                      </div> */}
                    </div>
                  </div>

                  {/* <div className="client_text">Contenido aquio.</div> */}
                  {/* </div> */}
                </div>
                <div className="carousel-item">
                  <div className="container-fluid">
                    <div className="row"></div>
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
          </div>
        </section>

        {/* <div className="content-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <YouTube videoId={"cyd2elFIJPo"} opts={opts} />
              </div>
              <div className="col-lg-3">
                <YouTube videoId={"GLvc57YPQN8"} opts={opts} />
              </div>
              <div className="col-lg-3">
                <YouTube videoId={"aJKhYmgRg54"} opts={opts} />
              </div>
              <div className="col-lg-3">
                <YouTube videoId={"BF3-dXiA_k0"} opts={opts} />
              </div>
              <div className="col-lg-3">
                <YouTube videoId={"xvgZmmrJ3Yg"} opts={opts} />
              </div>

       

              <div className="col-lg-3">
                <YouTube videoId={"p2DDd7s3_C0"} opts={opts} />
              </div>

              <div className="col-lg-3">
                <YouTube videoId={"cpf29L8IXas"} opts={opts} />
              </div>

              <div className="col-lg-3">
                <YouTube videoId={"V0CHYFcwcTM"} opts={opts} />
              </div>

              <div className="col-lg-3">
                <YouTube videoId={"n-k3g8IOq4g"} opts={opts} />
              </div>

           
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Videos;
