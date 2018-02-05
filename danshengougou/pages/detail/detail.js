const { Actionsheet, Tab,extend } = require('../../dist/index');
const { CubDetail } = require('../../services/index');

Page(extend({}, Actionsheet,Tab,{
      data: {

      },
      onLoad: function () {

      },
      onShow: function() {
      }
}, CubDetail));
