const { Actionsheet, Tab, extend } = require('../../../dist/index');
const { CubTrendsAdd } = require('../../../services/index');


Page(extend({}, Actionsheet, Tab, {
    data: {

    },
    onLoad: function () {

    },
    onShow: function () {
    }
}, CubTrendsAdd));
