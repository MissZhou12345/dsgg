const { extend } = require('../../dist/index');
const { uiChangeStatus, uiBroodForm } = require('./brood-ui');


const _data = extend({}, uiChangeStatus.data, uiBroodForm.data);
const _function = extend({}, uiChangeStatus, uiBroodForm);


module.exports = extend({}, _function, { data: _data });




