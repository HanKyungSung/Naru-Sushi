import React from 'react';

import page5 from '../../assets/NS_NARU_MENU_proof-6.png';
import page6 from '../../assets/NS_NARU_MENU_proof-7.png';
import page7 from '../../assets/NS_NARU_MENU_proof-8.png';

export default function Rolls(props) {
    return (
        <div ref={props.rollsRef} id="rolls" >
            <img src={page5} alt="page5" className="max-width-100" />
            <img src={page6} alt="page6" className="max-width-100" />
            <img src={page7} alt="page7" className="max-width-100" />
        </div>
    );
}