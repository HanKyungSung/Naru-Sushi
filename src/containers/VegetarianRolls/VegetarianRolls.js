import React from 'react';

import page10 from '../../assets/NS_NARU_MENU_proof-11.png';

export default function VegetarianRolls(props) {
    return (
        <div ref={props.vegetarianRollsRef} id="vegetarianRolls" >
            <img src={page10} alt="page10" className="max-width-100" />
        </div>
    );
}