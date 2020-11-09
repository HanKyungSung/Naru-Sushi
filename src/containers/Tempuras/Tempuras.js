import React from 'react';

import page4 from '../../assets/NS_NARU_MENU_proof-5.png';

export default function Tempuras(props) {
    return (
        <div ref={props.tempurasRef} id="tempuras" >
            <img src={page4} alt="page4" className="max-width-100" />
        </div>
    );
}