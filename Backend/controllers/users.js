const getUser = async (req, res) => {
    res.status(200).json({ User: "user info" })
}
const getAllUsers = async (req, res) => {
    res.status(200).json({ Users: "A list of users" })
}

module.exports = { getAllUsers }
