// const Recommend = require('../models/Recommend');

// const recommend = async (req, res) => {
//   try {
//     const { toemail, fromemail, text } = req.body;
    
//     // Create a new Recommend document
//     const newRecommend = new Recommend({ toemail, fromemail, text });
    
//     // Save the new Recommend document to the database
//     const savedRecommend = await newRecommend.save();
    
//     res.json(savedRecommend);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// module.exports = { recommend };
