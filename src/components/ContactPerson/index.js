import React from 'react';

import InputsContact from '../InputsContact';

import ImgMan from '../../assets/images/man.svg';
import ImgWom from '../../assets/images/woman.svg';

import './style.css';

function ContactPerson() {
    return (
        <div className="container-contact">
            <form action="">
                <div className="container-btlog">
                    <button type="button">Sigin up</button>
                    <button type="button">login</button>
                </div>
                <div className="container-btsex">
                    <button type="button"><img src={ImgMan} alt="Man" /></button>
                    <button type="button"><img src={ImgWom} alt="Woman" /></button>
                </div>
                <InputsContact/>
            </form>
        </div>
    );
}

export default ContactPerson;