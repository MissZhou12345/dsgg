const { Actionsheet, Tab, NoticeBar, extend } = require('../../../dist/index');
const { CubUserCub } = require('../../../services/index');


Page(extend({}, Tab, NoticeBar, Actionsheet, {
    data: {
        broodid: ''
    },
    onLoad: function () {

    },
    onShow: function () {

    }
}, CubUserCub));
