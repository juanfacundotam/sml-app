const Lead = require("../../models/Lead");

const getLeadCheckedInactive5 = async (email) => {
  const emailProp = email.email
  const leadChequedInactive = await Lead.find({
    checked: true,
    vendedor: emailProp,
    $or: [{ status: "Sin contactar" }],
    level: { $nin: ["incidencia", "0", "", "-"] },
  })
  .limit(5)
  .exec();
  
  const leadChequedInactiveNoResponde = await Lead.find({
    checked: true,
    vendedor: emailProp,
    $or: [{ status: "No responde" }],
    level: { $nin: ["incidencia", "0", "", "-"] },
  })



  return [...leadChequedInactive, ...leadChequedInactiveNoResponde];
};

module.exports = getLeadCheckedInactive5;
