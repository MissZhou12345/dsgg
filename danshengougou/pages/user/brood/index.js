const { Actionsheet, extend } = require('../../../dist/index');
const { CubUserBrood } = require('../../../services/index');


Page(extend({}, Actionsheet, {
    data: {
        cubid: ''
    },
    onLoad: function () {

    },
    onShow: function () {
    }
}, CubUserBrood));
