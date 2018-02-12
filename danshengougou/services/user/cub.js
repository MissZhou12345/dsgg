const { extend } = require('../../dist/index');
const { uiCubList, uiCubForm } = require('./cub-ui');


const _data = extend({}, uiCubList.data, uiCubForm.data);
const _function = extend({}, uiCubList, uiCubForm);


module.exports = extend({}, _function, { data: _data });




