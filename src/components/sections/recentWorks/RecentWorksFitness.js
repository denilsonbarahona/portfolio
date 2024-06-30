import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef } from "react";

const RecentWorksFitness = () => {
  // Isotope
  const isotope = useRef();
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".grid-items", {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      isotope.current.arrange({ filter: `*` });
    }
  }, []);

  return (
    <Fragment>
      <div className="content works">
        {/* title */}
        <div className="title">Recent Works</div>
        {/* content */}
        <div className="row grid-items border-line-v">
          {/* work item photo */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://compa.financial/"
                  target="_blank"
                  className="has-popup-image"
                >
                  <img src="images/compa-1.png" alt="" />
                  <span className="info">
                    <span className="ion ion-link" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="https://compa.financial/"
                  target="_blank"
                  className="name has-popup-image"
                >
                  Compa
                </a>
                <div className="category">
                  Web application that provides mortgage loans to its users.
                </div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://on-nova.com"
                  target="_blank"
                  className="has-popup-image"
                >
                  <img src="images/nova-1.png" alt="" />
                  <span className="info">
                    <span className="ion ion-link" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="https://on-nova.com"
                  target="_blank"
                  className="name has-popup-image"
                >
                  Nova
                </a>
                <div className="category">
                  A DeFi application that allows users to request loans to be
                  funded by other users.
                </div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://medical-7f1db.web.app/"
                  target="_blank"
                  className="has-popup-image"
                >
                  <img src="images/medical-1.png" alt="" />
                  <span className="info">
                    <span className="ion ion-link" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="https://medical-7f1db.web.app/"
                  target="_blank"
                  className="name has-popup-image"
                >
                  Medical
                </a>
                <div className="category">
                  Aplicacion web para el control de un laboratorio y clinica
                  medica.
                </div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://denilsonbarahona.github.io/d-p-memorama/"
                  target="_blank"
                  className="has-popup-image"
                >
                  <img src="images/card-1.png" alt="" />
                  <span className="info">
                    <span className="ion ion-link" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="https://denilsonbarahona.github.io/d-p-memorama/"
                  target="_blank"
                  className="name has-popup-image"
                >
                  Rick & Morty
                </a>
                <div className="category">
                  Web card memory game using the characters of the rick & morty
                  series.
                </div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default RecentWorksFitness;
