const Lead = require("../../models/Lead");

const getLeadCheckedInactive5 = async (email) => {
  const leadChequedInactive = await Lead.find({
    checked: true,
    $or: [{ status: "Sin contactar" }, { status: "No responde" }],
    level: { $nin: ["incidencia", "0", ""] },
    email: email
  })
    .limit(5)
    .exec();

  return leadChequedInactive;
};

module.exports = getLeadCheckedInactive5;
