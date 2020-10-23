import React from "react";

import "./logoPage.css";
import page1 from "../../assets/NS_NARU_MENU_proof.png";

export default function logoPage() {
    return (
        <div>
            <img src={page1} alt="Logo Page" className="max-width-100" />
        </div>
    );
}