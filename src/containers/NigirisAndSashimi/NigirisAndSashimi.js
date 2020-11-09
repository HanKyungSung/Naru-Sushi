import React from 'react';

import page11 from '../../assets/NS_NARU_MENU_proof-12.png';

export default function NigiriAndSashimi(props) {
    return (
        <div ref={props.nigirisAndSashimiRef} id="nigiriAndSashimi" >
            <img src={page11} alt="page11" className="max-width-100" />
        </div>
    );
}