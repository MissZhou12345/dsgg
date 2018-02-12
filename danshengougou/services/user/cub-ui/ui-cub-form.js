const cubConfig = require('./field-config');

module.exports = {
    data: {
        cubConfig,
        generList: [{ 'id': 1, 'name': '公' }, { 'id': 2, 'name': '母' }],
        curGenerIndex: 1,


        cubStatusList: [{ 'id': 1, 'name': '已售出' }, { 'id': 2, 'name': '已售罄' }],
        curCubStatusIndex: 1,

        static1: {
            text: '足协杯战线连续第2年上演广足协杯战线连续第2年上演广州德比战州德比战'
        }
    },
    onShow() {
        // initScroll的通告栏如果宽度足够显示内容将保持静止
        this.initZanNoticeBarScroll('static1');
    },
    onCubStatusChange(e) {
        this.setData({
            curCubStatusIndex: e.detail.value
        });
    },
    
    onGenerChange(e) {
        this.setData({
            curGenerIndex: e.detail.value
        });
    },

    handleZanFieldChange(e) {
        const { componentId, detail } = e;

        console.log('[zan:field:change]', componentId, detail);
    },

    handleZanFieldFocus(e) {
        const { componentId, detail } = e;

        console.log('[zan:field:focus]', componentId, detail);
    },

    handleZanFieldBlur(e) {
        const { componentId, detail } = e;

        console.log('[zan:field:blur]', componentId, detail);
    },
    formSubmit(event) {
        console.log('[zan:field:submit]', event.detail.value);
    }


};