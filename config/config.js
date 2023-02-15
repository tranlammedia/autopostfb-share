exports.PORT= process.env.PORT || '4000' // không thay đổi dòng này
//set time
exports.START = 10 // (giây) thời gian chờ lần đâu tiên
exports.DELAY = 20 //(phút) thời gian chờ trung bình cho lần post kế (random trong khoảng +/-40%)
exports.STEP = 5 // (Giây) thời gian log thông báo
