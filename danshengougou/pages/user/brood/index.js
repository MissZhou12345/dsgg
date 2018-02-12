const { Actionsheet, extend } = require('../../../dist/index');
const { CubUserBrood } = require('../../../services/index');


Page(extend({}, Actionsheet,{
    data: {
        
    },
    onLoad: function () {

    },
    onShow: function () {
    }
}, CubUserBrood));
