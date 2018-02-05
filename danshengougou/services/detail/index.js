const { extend } = require('../../dist/index');
const { uiCubTrends, uiHeaderImgs, uiCubList, uiTuppingVideo } = require('./index-ui');


const _data = extend({}, uiCubTrends.data, uiCubList.data, uiTuppingVideo.data, uiHeaderImgs.data);
const _function = extend({}, {}, uiCubTrends, uiCubList, uiTuppingVideo, uiHeaderImgs);

module.exports = extend({}, _function, { data: _data });



