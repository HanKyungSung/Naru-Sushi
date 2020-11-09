import React from 'react';

import './saladAndSoup.css';
import page3 from '../../assets/NS_NARU_MENU_proof-4.png';

export default function SaladAndSoup(props) {
    return (
        <div ref={props.saladAndSoupRef} id="saladAndSoup" >
            <img src={page3} alt="page3" className="max-width-100" />
        </div>
    );
}