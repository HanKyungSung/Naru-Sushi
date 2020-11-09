import React from 'react';

import './appetizer.css';
import page2 from '../../assets/NS_NARU_MENU_proof-3.png';

export default function Appetizer(props) {

    return (
        <div ref={props.appetizerRef} id="appetizer" >
            <img src={page2} alt="page2" className="max-width-100" />
        </div>
    );
}