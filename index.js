const express = require('express')
const path = require('path');
const app = express();
const axios = require('axios');

// app.use('/*', express.static('./'));

const clientBundles = './public/services';
const serverBundles = './templates/services';
const serviceConfig = require('./service-config.json');
const services = require('./loader.js')(clientBundles, serverBundles, serviceConfig);

const React = require('react');
const ReactDom = require('react-dom/server');
const Layout = require('./templates/layout');
const App = require('./templates/app');
const Scripts = require('./templates/scripts');

const renderComponents = (components, props = {}) => {
  return Object.keys(components).map(item => {
    let component = React.createElement(components[item], props);
    return ReactDom.renderToString(component);
  });
};

app.get('/:id', (req, res) => {
  console.log('get request');
  let id = req.params.id;
  axios.get(`http://localhost:3002/images/${id}/product_info`)
  .then( result => {
    let components = renderComponents(services, {productData: result.data});
    console.log(components);
    res.end(Layout(
      'hAmazon',
      App(...components),
      Scripts(Object.keys(services), {productData: result.data})
    ));
  })
  .catch( err => console.log(err));
});


app.listen(3000, () => console.log('Listening on port 3000'));
