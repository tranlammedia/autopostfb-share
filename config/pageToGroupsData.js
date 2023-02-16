// fromPage: tên page trùng khớp với tên bên file tokensData.js
// toGroup: nơi page sẽ post, nếu 'me', page sẽ post lên tường của nó


// trước khi thêm vào, page phải join trước vào group
// nên join group không kiểm duyệt

exports.pageToGroups= [
    {
        fromPage: 'page1',
        toGroup: 'me'
    },
    {
        fromPage: 'page2',
        toGroup: 'me'
    },
    {
        fromPage: 'page1',
        toGroup: '1425275367755509'
    }
]
