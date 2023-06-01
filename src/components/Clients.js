import React from "react";
import propTypes from "prop-types";
import { Fade } from "react-reveal";

export default function Clients(props) {
  return (
    <Fade bottom delay={props.delayInMilliseconds}>
      <div className="np">
        <div className="nd">
          <div className="team-item-header">
            <div className="team-item-image om">
              <img
                src={props.data.imgSrc}
                alt={props.data.imgAlt}
                width="180"
                height="180"
              />
            </div>
          </div>
          <div className="team-item-content">
            <h5 className="team-item-name sm s_">{props.data.namePerson}</h5>
            <div className="team-item-role h ik so st ot">
              {props.data.position}
            </div>
            <p className="sv l">{props.data.description}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

Clients.propTypes = {
  delayInMilliseconds: propTypes.number,
  data: propTypes.object,
};
