const { Actionsheet, extend } = require('../../../dist/index');
const { CubUserInfo } = require('../../../services/index');

Page(extend({}, Actionsheet, {
    data: {

    },
    onLoad: function () {

    },
    onShow: function () {
    }
}, CubUserInfo));
