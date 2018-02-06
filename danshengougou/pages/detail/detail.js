const { Actionsheet, Tab, Toast, extend } = require('../../dist/index');
const { CubDetail } = require('../../services/index');

Page(extend({}, Actionsheet, Tab, Toast, {
    data: {

    },
    onLoad: function () {

    },
    onShow: function () {
    }
}, CubDetail));
