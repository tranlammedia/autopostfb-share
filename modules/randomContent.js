const {contents} = require('../config/contentsData')

const randomContent = async () => {

    index = Math.floor(Math.random()* contents.length)
    // return contents[index]
    return contents[2]
}

module.exports = randomContent
