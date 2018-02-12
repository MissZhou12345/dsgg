const { Actionsheet, NoticeBar, extend } = require('../../../dist/index');
const { CubUserBrood } = require('../../../services/index');


Page(extend({}, NoticeBar, Actionsheet, {
    data: {
        broodid:''
    },
    onLoad: function () {

    },
    onShow: function () {
    }
}, CubUserBrood));
