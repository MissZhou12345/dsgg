const { Actionsheet, extend } = require('../../../dist/index');
const { CubUserCub } = require('../../../services/index');


Page(extend({}, Actionsheet, {
    data: {
        cubid: ''
    },
    onLoad: function () {

    },
    onShow: function () {
    }
}, CubUserCub));
