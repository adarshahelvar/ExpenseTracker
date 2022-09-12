// 3e92597aeeb5ea50a7cead3f71f09d18ddf7a064649ff22001b75ff2631d6794ce1f576b510a0a7c3bc2d7ba18fe0ea511b79cadb826e42f4e6a40e4a0c41315

const jwt = require("jsonwebtoken");
const User = require('./models/user');

exports.authenticate = (req, res, next) => {
  try {
    const token = req.header("authorization");

    const Id = jwt.verify(token, 'adarsh1234567890');
   // console.log(TOKEN_SECRET)
    console.log(Id)
    User.findByPk(Id)
      .then((user) => {
        //console.log(JSON.stringify(user))
        req.user = user;
        next();
      })
      .catch((err) => {
       // throw new Error(err);
       res.status(401).json({message:"unauthorized login again"})

      });
  } catch (err) {
    //console.log(err);
   // res.status(404).JSON({ success: false });
   res.status(404).json({success :false,message:"not able to authorized!login again"})
  }
};

