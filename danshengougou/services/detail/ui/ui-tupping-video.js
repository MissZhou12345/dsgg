module.exports = {
    data: {
        showTuppingPopup: false,
        tuppingPosterSrc: '',
        tuppingSrc: ''
    },
    handleTogglePopupTupping() {
        this.setData({
            showTuppingPopup: !this.data.showTuppingPopup
        });
        this.setTuppingVideoSrc();
    },
    setTuppingVideoSrc() {
        this.setData({
            tuppingSrc: 'http://danshengougou-test.oss-cn-beijing.aliyuncs.com/upload/video/1517650491462.mp4',
            tuppingPosterSrc: 'http://img.danshengougou.com/upload/pet/48089e45a87dd402b73573b1d5144964.jpg'
        });
    }
};