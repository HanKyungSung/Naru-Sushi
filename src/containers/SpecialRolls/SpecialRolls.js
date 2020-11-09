import React from 'react';

import page8 from '../../assets/NS_NARU_MENU_proof-9.png';
import page9 from '../../assets/NS_NARU_MENU_proof-10.png';

export default function SpecialRolls(props) {
    return (
        <div ref={props.sepcialRollsRef} id="specialRolls" >
            <img src={page8} alt="page8" className="max-width-100" />
            <img src={page9} alt="page9" className="max-width-100" />
        </div>
    );
}