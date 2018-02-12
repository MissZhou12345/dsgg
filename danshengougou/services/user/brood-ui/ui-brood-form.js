const broodConfig = require('./field-config');

module.exports = {
    data: {
        broodConfig,
        breedList: [{ 'id': 0, 'name': '品种' }, { 'id': 1, 'name': '萨摩耶' }, { 'id': 2, 'name': '马犬' }, { 'id': 3, 'name': '苏牧' }],
        curBreedIndex: 0,


        static1: {
            text: '足协杯战线连续第2年上演广足协杯战线连续第2年上演广州德比战州德比战'
        }
    },
    onShow() {
        if (this.route != 'pages/user/brood/index') {
        // initScroll的通告栏如果宽度足够显示内容将保持静止
            this.initZanNoticeBarScroll('static1');
        }
    },
    
    onBreedChange(e) {
        this.setData({
            curBreedIndex: e.detail.value
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