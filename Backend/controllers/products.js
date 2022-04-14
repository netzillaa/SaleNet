const getAllProducts = async (req, res) => {
    res.status(200).json({ product: "returning all products in a shop" })
}

module.exports = { getAllProducts }