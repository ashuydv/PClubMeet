const { v4: uuidV4 } = require("uuid");

const handleNewMeeting = (req, res) => {
    res.json({ link : uuidV4() })
}

module.exports = {
    handleNewMeeting : handleNewMeeting
}