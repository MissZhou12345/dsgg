module.exports = {
    data: {
        baseActionsheet: {
            show: false,
            cancelText: '关闭',
            closeOnClickOverlay: true,
            componentId: 'baseActionsheet',
            actions: [{
                name: '已售罄',
                subname: '选项描述语1',
                className: 'action-class',
                loading: false
            }, {
                name: '出售中',
                subname: '选项描述语2',
                className: 'action-class',
                loading: false
            }]
        }
    },


    onShareAppMessage() {
        return {
            title: 'ZanUI-WeApp',
            imageUrl: 'https://img.yzcdn.cn/public_files/2017/02/06/ee0ebced79a80457d77ce71c7d414c74.png'
        };
    },

    handleChangeCubStatus() {
        this.setData({
            'baseActionsheet.show': true
        });
    },

    handleZanActionsheetCancel({ componentId }) {
        this.setData({
            [`${componentId}.show`]: false
        });
    },

    handleZanActionsheetClick({ componentId, index }) {
        console.log(`item index ${index} clicked`);

        // 如果是分享按钮被点击, 不处理关闭
        if (index === 2) {
            return;
        }

        this.setData({
            [`${componentId}.actions[${index}].loading`]: true
        });

        setTimeout(() => {
            this.setData({
                [`${componentId}.show`]: false,
                [`${componentId}.actions[${index}].loading`]: false
            });
        }, 1500);
    }



};