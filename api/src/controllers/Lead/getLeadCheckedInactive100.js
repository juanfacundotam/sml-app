const Lead = require("../../models/Lead");

const getLeadCheckedInactive100 = async () => {
  const leadChequedInactive = await Lead.find({
    checked: true,
    $or: [{ status: "Sin contactar" }, { status: "No responde" }]
  })
    .limit(100)
    .exec();
  return leadChequedInactive;
};

module.exports = getLeadCheckedInactive100;
