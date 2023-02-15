const { pageToGroups } = require("../config/pageToGroupsData")
const { tokens } = require("../config/tokensData")

const randomPageToGroup = async () => {

    index = Math.floor(Math.random()* pageToGroups.length)

    if(!tokens[pageToGroups[index].fromPage]) {
        console.log(`${pageToGroups[index].fromPage} không tồn tại token`)
    } 

    return {
        accessToken: tokens[pageToGroups[index].fromPage],
        fromPage: pageToGroups[index].fromPage,
        toGroup:  pageToGroups[index].toGroup
    }
}

module.exports = randomPageToGroup
