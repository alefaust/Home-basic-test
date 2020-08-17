import React from 'react';

import { MdPersonOutline, MdMailOutline } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io'
import {IconContext} from 'react-icons';

import './style.css';

function InputsContact() {
    return (
        <div className="container-field">
            <IconContext.Provider value={{ className: "input-inside-contact" }}>
                <div >
                    <input type="text" placeholder="Username" />
                    <MdPersonOutline />
                </div>
                <div>
                    <input type="text" placeholder="Mail" />
                    <MdMailOutline />
                </div>
                <div>                    
                    <select>
                        <option value="" defaultValue hidden>Whats Are Your Interests?</option>
                        <option value="1">Test</option>
                        <option value="2">Test 1</option>
                    </select>
                    <IoIosArrowDown />
                </div>
            </IconContext.Provider>

            <button type="button">+</button>
        </div>
    );
}

export default InputsContact;