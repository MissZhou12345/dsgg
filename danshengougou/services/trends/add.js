const { extend } = require('../../dist/index');
const { uiChangeEvents } = require('./add-ui');


const _data = extend({}, uiChangeEvents.data);
const _function = extend({}, uiChangeEvents);


module.exports = extend({}, _function, { data: _data });




