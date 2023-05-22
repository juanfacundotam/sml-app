const Lead = require("../../models/Lead");

const getLeadCheckedInactive100 = async () => {
  const leadChequedInactive = await Lead.find({
    checked: true,
    $or: [{ status: "Sin contactar" }, { status: "No responde" }],
    level: { $in: [0, 1, 2] },
    level: { $ne: "Incidencia" }
  })
    .limit(100)
    .exec();
  return leadChequedInactive;
};

module.exports = getLeadCheckedInactive100;
