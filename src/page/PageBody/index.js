import React from 'react';

import ListItens from '../../components/ListItens';
import ContactPerson from '../../components/ContactPerson'


import './style.css';

function PageBody() {
  return (
    <div className="container-color-screen">
      <div className="container-body">
        <div className="container-text">
          <p id="page-text-bold">Join us today</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <ListItens/>
        <ContactPerson/>
      </div>
    </div>
  );
}

export default PageBody;