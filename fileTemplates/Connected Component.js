const connectToStores = require('alt-utils/lib/connectToStores');

const ${Component}Store = require('./store/${Component}Store');
const ${Component}Actions = require('./actions/${Component}Actions');

const ${Component} = require('./${Component}');

Connected${Component} = connectToStores({

  getStores() {
    return [${Component}Store];
  },

  getPropsFromStores() {
    const state = ${Component}Store.getState();
    return state;
  },

  componentDidConnect() {}

}, ${Component});
  
module.exports = Connected${Component};