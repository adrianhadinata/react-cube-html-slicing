import React from "react";
import propTypes from "prop-types";

export default function Buttons(props){
    const className = ["tbuttonn gbuttony"]
    
    if(props.isPrimary) className.push("fbuttonl")
    if(props.isSmall) className.push("sbuttono")
    
    return (
       <button className={className.join(" ")}>{props.children}</button>
    )
}

Buttons.propTypes = {
    isPrimary: propTypes.bool,
    isSmall: propTypes.bool
}
