module.exports = {
    data: {

        showCubListPopup: false,

        tab1: {
            list: [{
                id: 'all',
                title: '1号(公)'
            }, {
                id: 'topay',
                title: '2号(母)'
            }, {
                id: 'tosend',
                title: '3号'
            }, {
                id: 'send',
                title: '4号'
            }, {
                id: 'sign',
                title: '5号'
            }, {
                id: 'sign1',
                title: '6号'
            }, {
                id: 'sign2',
                title: '7号'
            }, {
                id: 'sign3',
                title: '8号'
            }, {
                id: 'sign4',
                title: '9号'
            }, {
                id: 'sign5',
                title: '10号'
            }, {
                id: 'sign6',
                title: '11号'
            }, {
                id: 'sign7',
                title: '12号'
            }],
            selectedId: 'all',
            scroll: true
        }


    },

    /**
     * 
     */
    handleZanTabChange(e) {
        var componentId = e.componentId;
        var selectedId = e.selectedId;

        this.setData({
            [`${componentId}.selectedId`]: selectedId
        });
    },


    toggleBottomPopup() {
        this.setData({
            showCubListPopup: !this.data.showCubListPopup
        });
    },

    /**
     * 立即拨打电话
     */
    handleCallMe() {
        wx.makePhoneCall({
            phoneNumber: '18108176572'
        });
    },

    /**
     * 复制微信号给用户
     */
    handleWechatMe() {
        let phoneNumber = '18108176572';
        let _this= this;
        wx.setClipboardData({
            data: phoneNumber,
            success: function (res) {
                _this.showZanToast(`微信号：${phoneNumber} 复制成功！`);
            }
        })
    },

    
};