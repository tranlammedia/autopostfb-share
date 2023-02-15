const handleMessage = async (campaign) => {
    const {
        name = campaign.introduction || '',
        desc = campaign.desc || '',
        link,
    } = campaign

    return (
        name+"%0A"+"%0A"+
        desc+"%0A"+"%0A"
    )
}

module.exports = handleMessage