import React from 'react';

import ImgMan from '../../assets/images/man.svg';
import ImgWom from '../../assets/images/woman.svg';


import { MdPersonOutline, MdKeyboardArrowDown, MdMailOutline } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io'
import {IconContext} from 'react-icons';

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
                <div className="container-field">
                    <IconContext.Provider value={{ className: "input-inside-contact" }}>
                        <div >
                            <MdPersonOutline />
                            <input type="text" placeholder="Username" />
                        </div>
                        <div>
                            <MdMailOutline />
                            <input type="text" placeholder="Mail" />
                        </div>
                        <div>
                            <IoIosArrowDown />
                            <input type="text" placeholder="Whats Are Your Interests?" />
                        </div>
                    </IconContext.Provider>

                    <button type="button">+</button>
                </div>
            </form>
        </div>
    );
}

export default ContactPerson;