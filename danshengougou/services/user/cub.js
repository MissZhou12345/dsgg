const { extend } = require('../../dist/index');
const { uiChangeStatus } = require('./cub-ui');


const _data = extend({}, uiChangeStatus.data);
const _function = extend({}, uiChangeStatus);


module.exports = extend({}, _function, { data: _data });




