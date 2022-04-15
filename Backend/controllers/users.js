const getSingleUser = async (req, res) => {
    res.status(200).json({ User: "Single user info" })
}
const getAllUsers = async (req, res) => {
    res.status(200).json({ Users: "A list of users" })
}

module.exports = { getAllUsers, getSingleUser }
