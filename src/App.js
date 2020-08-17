import React from 'react';

import PageHeader from '../src/page/PageHeader';
import PageBody from '../src/page/PageBody';

import '../src/assets/styles/global.css';

function App() {
  return (
     <div className="container">
       <PageHeader/>
       <PageBody/>
   </div>
  );
}

export default App;
