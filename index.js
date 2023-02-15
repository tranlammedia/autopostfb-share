const express = require('express');
const { PORT, START, STEP, DELAY } = require('./config/config');
const handlePublishPagePost = require('./modules/handlePublishPagePost');
const handleMessage = require('./modules/handleMessage');
const formatTime = require('./modules/formatTime');
const handleRandomTime = require('./modules/handleRandomTime');
const randomContent = require('./modules/randomContent');
const randomPageToGroup = require('./modules/randomPageToGroup');

const app = express();

app.get('/', (req, res) => {
    res.json({ 'success': true })
})

main = async () => {
    message = ''
    posted = 0
    countdown = START

    const publishPagePost = async () => {
        // random content
        content = await randomContent()
        // random page to group
        pageToGroup = await randomPageToGroup()

        accessToken = pageToGroup.accessToken
        fromPage = pageToGroup.fromPage
        groupid = pageToGroup.toGroup

        //check accessToken có tồn tại trước khi post
        if (accessToken) {
            message = await handleMessage(content)
            // post to phtoto
            if (content?.urlPhoto) {
                console.log(`${fromPage} -> toPhoto ${groupid}`)
                await handlePublishPagePost.toPhoto(accessToken, groupid, message, content.urlPhoto)
                    .then(data => {
                        if (data.error) {
                            console.log(data.error.message)
                        }
                        posted++
                    })
            } else {
                console.log(`${fromPage} -> toLink ${groupid}`)
                //default post to link
                await handlePublishPagePost.toLink(accessToken, groupid, message, content.link)
                    .then(data => {
                        if (data.error) {
                            console.log(data.error.message)
                        }
                        posted++
                    })
            }
            console.log(`name ${content.name}, tông ${posted}`)
        }
    }

    function countdownPost() {
        setTimeout(async () => {
            countdown -= STEP
            if (countdown <= 0) {
                await publishPagePost()
                countdown = handleRandomTime(DELAY)
            } else {
                console.log(`${formatTime(countdown)} - posted: ${posted}`)
            }
            countdownPost()
        }, STEP * 1000)
    }

    countdownPost();

}


app.listen(PORT, () => {
    console.log('server running ', PORT)
    main()
    console.log(`start ${formatTime(countdown)} - posted: ${posted}`)
})