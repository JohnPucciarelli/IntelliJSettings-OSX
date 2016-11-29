const alt = require('dispatchers/alt');

const ${Component}Actions = require('../actions/${Component}Actions');

const defaultState = {};

class ${NAME} {

  constructor() {
    this.state = { ...defaultState };

    this.bindActions(${Component}Actions);

    this.exportPublicMethods({});
  }

  /**
   * ${Component} Actions
   */
 
  /**
   * Public Methods
   */
}

module.exports = alt.createStore(${NAME}, '${NAME}');