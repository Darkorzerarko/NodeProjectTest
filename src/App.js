import React from 'react';
import ReactDOM from 'react-dom';

import data from './data/data.json';

import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';
import BrowserList from './components/BrowserList.js';

function App() {
  return (
    <>
      <Navigation />
      <BrowserList list={data} />

      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
