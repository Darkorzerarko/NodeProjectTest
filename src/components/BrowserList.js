import React from 'react';

import Browser from './Browser.js';

export default function BrowserList({ list }) {
  return (
    <article>
      <h1>Popular web browsers</h1>
      {list.browsers.map((browser) => (
        <Browser
          name={browser.name}
          logo={browser.logo}
          description={browser.description}
        />
      ))}
    </article>
  );
}
