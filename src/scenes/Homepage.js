import React from "react";
import { Fade } from "react-reveal";

import Sections from "../elements/Sections";
import Header from "../components/Header";
import Clients from "../components/Clients";

import { Link } from "react-router-dom";
import HeroImage from "../assets/images/image-placeholder.png";
import image01 from "../assets/images/team-member-01.jpg";
import image02 from "../assets/images/team-member-02.jpg";
import image03 from "../assets/images/team-member-03.jpg";

export default function Homepage() {
  const members = [
    {
      imgSrc: image01,
      imgAlt: "coba1",
      description: "coba1",
      position: "coba1",
    },
    {
      imgSrc: image02,
      imgAlt: "coba2",
      description: "coba2",
      position: "coba2",
    },
    {
      imgSrc: image03,
      imgAlt: "coba3",
      description: "coba3",
      position: "coba3",
    },
  ];

  return (
    <div className="nq">
      <Header></Header>
      <main className="nm">
        <Sections className={"ng"}>
          <div className="tcontainern">
            <div className="rl ip">
              <div className="scontainero">
                <Fade bottom delay={500}>
                  <h2 className="sm">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet,{" "}
                    <Link to="#">consectetur adipiscing elit</Link>, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Fade>

                <Fade bottom delay={1000}>
                  <figure>
                    <img
                      className="sa"
                      src={HeroImage}
                      alt=""
                      width="712"
                      height="400"
                    />
                    <figcaption className="se">
                      A super-nice image{" "}
                      <span role="img" aria-label="smile">
                        😀
                      </span>
                    </figcaption>
                  </figure>
                </Fade>

                <Fade bottom delay={1500}>
                  <h4>Flexibility</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </Sections>
        <Sections className={"rq ng sh"}>
          <div className="tcontainern">
            <div className="team-inner rl ip">
              <div className="rc sh reveal-from-bottom is-revealed">
                <div className="scontainero">
                  <Fade bottom delay={500}>
                    <h2 className="sm oc">
                      Meet the team - Lorem ipsum is placeholder text.
                    </h2>
                  </Fade>
                  <Fade bottom delay={500}>
                    <p className="sv">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="tiles-wrap">
                {members.map((member, index) => (
                  <Clients
                    key={index}
                    delayInMilliseconds={500 * index}
                    data={member}
                  ></Clients>
                ))}
              </div>
            </div>
          </div>
        </Sections>
      </main>
    </div>
  );
}
