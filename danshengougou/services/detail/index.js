module.exports = {
    handleTogglePopupTupping() {
        this.setData({
            showPopup: !this.data.showPopup
        });
        this.setTuppingVideoSrc();
    },
    setTuppingVideoSrc() {
        this.setData({
            tuppingSrc: 'http://danshengougou-test.oss-cn-beijing.aliyuncs.com/upload/video/1517650491462.mp4',
            tuppingPosterSrc:'http://img.danshengougou.com/upload/pet/48089e45a87dd402b73573b1d5144964.jpg'
        });
    },
    data: {
        showPopup: false,
        tuppingPosterSrc: '',
        tuppingSrc: '',
        

        imgUrls: [
            'http://img.danshengougou.com/upload/pet/48089e45a87dd402b73573b1d5144964.jpg',
            'http://img.danshengougou.com/upload/pet/b88b71e6388fb88d9f367f79276f0c52.jpg',
            'http://img.danshengougou.com/upload/pet/e28d2ccbe14284c596c379ff350387c5.jpeg'
        ],
        indicatorDots: true,
        autoplay: false,
        interval: 5000,
        duration: 1000,

        steps: [
            {
                done: true,
                current: true,
                text: '步骤一',
                desc: '10.01',
                content: '多萨比恢复i打扮field都是多萨比恢复i打扮field都是多萨比恢复i打扮field都是多萨比恢复i打扮field都是多萨比恢复i打扮field都是'
            },
            {
                done: false,
                current: false,
                text: '步骤二',
                desc: '10.02',
                content: '多萨比恢复i打扮field都是多萨比恢复i打扮field都是多萨比恢复i打扮field都是多萨比恢复i打扮field都是多萨比恢复i打扮field都是'
            },
            {
                done: false,
                current: false,
                text: '步骤三',
                desc: '10.03',
                content: 'ddd'
            }
        ]
    }
};
