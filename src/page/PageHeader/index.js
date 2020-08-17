import React from 'react';

import ImgLogo from '../../assets/images/grupo2820@2x.png';

import { MdNotifications, MdDehaze, MdKeyboardArrowUp } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { IconContext } from "react-icons";
import './style.css';

class PageHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            styleOpen: 'nav-list-close',
            satusNav: false,
        }
        this.ExpanMenu = this.ExpanMenu.bind(this);
    }

    ExpanMenu = () => {

        const { satusNav } = this.state;


        this.setState({
            styleOpen: satusNav === true ? 'nav-list-close' : 'nav-container',
            satusNav: satusNav === true ? false : true,
        });

        console.log(this.state);
    }


    render() {


        const { styleOpen, satusNav } = this.state;

        return (

            <header>
                <div className="page-header">
                    <div className="container-header">
                        <a className="nav-menu" onClick={this.ExpanMenu} id="diveffect">
                            {satusNav === true ? <MdKeyboardArrowUp color="#C6C6D0" size={30} /> : <MdDehaze color="#C6C6D0" size={30} />}
                        </a>
                        <img src={ImgLogo} alt="Logo" id="page-logo" />
                        <aside>

                            <MdNotifications color="#C6C6D0" size={20} />
                            <span className="notification"></span>

                        </aside>
                    </div>
                    <div className={styleOpen}>
                        <nav>
                            <ul>
                                <li>
                                    <IconContext.Provider value={{ className: "input-inside" }}>
                                        <div>
                                            <FiSearch />
                                            <input type="text" placeholder="Search" />
                                        </div>
                                    </IconContext.Provider>
                                </li>
                                <li><a className="nav-active" href={null}>HOME</a></li>
                                <li><a href={null}>ARTICLES</a></li>
                                <li><a href={null}>AUDIO</a></li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </header>
        );
    }

}

export default PageHeader;