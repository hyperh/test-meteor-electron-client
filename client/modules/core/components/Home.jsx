import React from 'react';

const Home = ({callRemoteMethod}) => (
  <div id="main-page">
    <div>Hello World</div>
    <button onClick={callRemoteMethod}>Call remote method</button>
  </div>
);

export default Home;
