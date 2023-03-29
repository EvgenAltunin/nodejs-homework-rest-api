const { Contact } = require("../../models");

const updateContactStatus = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { favorite } = req.body;
    const updateContactStatus = await Contact.findByIdAndUpdate(
      { _id: contactId },
      { favorite },
      {
        new: true,
      }
    );
    if (!updateContactStatus) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json({ data: updateContactStatus });
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error);
  }
};

module.exports = {
  updateContactStatus,
};
