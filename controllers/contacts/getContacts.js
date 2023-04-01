const { Contact } = require("../../models");

const getContacts = async (req, res, next) => {
  const { _id } = req.user;
  const { page = 1, limit = 10, favorite} = req.query;
  const skip = (page - 1) * limit

if (favorite !== undefined && favorite !== "true" && favorite !== "false") {
  return res.status(400).json({ message: "Invalid value for favorite field!" });
}

const filter = { owner: _id };
if (favorite !== undefined) {
  filter.favorite = favorite === "true";
}
  
  console.log(filter)
  const contacts = await Contact.find(filter, "", {
    skip,
    limit: Number(limit),
  }).populate("owner", "_id email subscription");
  res.status(200).json({ data: contacts });
};

module.exports = {
  getContacts,
};
