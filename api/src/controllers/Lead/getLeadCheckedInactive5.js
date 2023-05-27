const Lead = require("../../models/Lead");

const getLeadCheckedInactive5 = async (email) => {
  const emailProp = email.email;
  const leadChequedInactive = await Lead.find({
    checked: true,
    vendedor: emailProp,
    status: "Sin contactar",
    level: { $nin: ["incidencia", "0", "", "-"] },
  })
    .limit(5)
    .exec();

  const leadChequedInactiveNoResponde = await Lead.find({
    checked: true,
    vendedor: emailProp,
    $or: [{ status: "No responde" }],
    level: { $nin: ["incidencia", "0", "", "-"] },
  });

  let count = 0;

  count = 5 - leadChequedInactive.length;
  console.log(count);

  const leadRest = await Lead.find({
    checked: true,
    vendedor: "",
    status: "Sin contactar",
    level: { $nin: ["incidencia", "0", "", "-"] },
  })
    .limit(count)
    .exec();

  if (leadRest.length > 0) {
    leadRest.forEach((element) => {
      element.vendedor = emailProp;
      element.save();
    });
  }

  return [
    ...leadChequedInactive,
    ...leadRest,
    ...leadChequedInactiveNoResponde,
  ];
};

module.exports = getLeadCheckedInactive5;
