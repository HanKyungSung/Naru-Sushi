import React from "react";

import "./alacarte.css";
import page4 from "../../assets/NS_NARU_MENU_proof-5.png";

export default function Alacarte(props) {
    return (
        <div ref={props.setAlacarteLocation}>
            <img src={page4} alt="page4" className="max-width-100" />
        </div>
    )
}