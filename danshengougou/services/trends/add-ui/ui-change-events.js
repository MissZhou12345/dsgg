module.exports = {
    data: {
        showCubBigEventPopup: false,


        tab1: {
            list: [{
                id: 'all',
                title: '疫苗'
            }, {
                id: 'topay',
                title: '驱虫'
            }],
            selectedId: 'all'
        },
    },

    handleChoiseEvent($this) {
        this.toggleCubBigEventPopup();
    },

    toggleCubBigEventPopup() {
        this.setData({
            showCubBigEventPopup: !this.data.showCubBigEventPopup
        });
    },


    handleZanTabChange(e) {
        var componentId = e.componentId;
        var selectedId = e.selectedId;

        this.setData({
            [`${componentId}.selectedId`]: selectedId
        });
    }

};