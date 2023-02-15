// name và desc bắt buộc tồn tại 1 trong 2.
// link: bắt buộc
// urlPhto: (không bắt buộc) nếu tồn tại, api facebook sẽ post bằng photo
// Mẹo định dạng post trong phần desc:
// - soạn bài trên facebook và copy vào
// - mục desc: dùng dấu nháy xéo (``) thay cho dấu đơn ('') vị trí nằm dưới nút ESC
// - dùng '%0A' để xuống dòng trên facebook

exports.contents= [
    {
        name: 'content1',
        desc: 'mo ta 1',
        link: 'https://youtube.com',
    },
    {
        name: 'content2',
        desc: 'mo ta 2',
        link: 'https://youtube.com',
        urlPhoto: 'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/r/s/rsz_1920x1000_1.jpg'
    },
    {
        name: 'content3',
        desc: `
    ----%0A
        💫 Thủ tục đơn giản, dễ dàng%0A
        💫 Phục vụ tận nơi, không cần chờ đợi%0A
        💫 Chỉ cần CMND để thực hiện khoản vay%0A
        💫 Giải ngân nhanh trong 5phút%0A
    ----%0A
    Nhanh - gọn - hiệu quả - uy tín%0A
    Vay tiền online chưa bao giờ dễ dàng đến thế!"%0A
    Đăng ký ngay: (https://shorten.asia/YkHqMmBF)
    `,
        link: 'https://shorten.asia/YkHqMmBF',
    }
]