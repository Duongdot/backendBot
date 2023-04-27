import db from "../models/index";
//all model in database

let getHomePage = async (req, res) => {
  res.render("home");
};

module.exports = { getHomePage };
