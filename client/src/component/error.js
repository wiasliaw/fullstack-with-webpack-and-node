import React from 'react';

const Error = ({ location }) => (
  <div>
    <h1>This is no <code>{location.pathname}</code></h1>
  </div>
);

export default Error;
