const Seller = require('../models/Seller');

exports.Sellers = async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.json(sellers);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }


};
exports.viewSellers = async (req, res) => {
    try {
      const sellers = await Seller.find();
      res.status(200).json(sellers);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
